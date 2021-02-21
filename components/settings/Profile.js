import { useState, useContext, useEffect } from "react";
import { ApiContext } from "../../context/ApiContext";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const [inputValue, setInputValue] = useState({});
  const { updateProfile } = useContext(ApiContext).api;
  const { usrInfo } = useContext(AuthContext).authValue;
  const [btnText, setBtnText] = useState("Save");
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "term") {
      setInputValue({ ...inputValue, [name]: value.substring(0, 1) });
    } else {
      setInputValue({ ...inputValue, [name]: value });
    }
  };

  useEffect(() => {
    setInputValue({
      ...inputValue,
      username: usrInfo?.username,
      phone: usrInfo?.phone,
      name: usrInfo?.name,
      term: usrInfo?.term,
    });
  }, [usrInfo]);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setErr("");
    }, 4000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [err]);

  const toggleBtn = () => {
    setBtnText("Saved");
    setTimeout(() => {
      setBtnText("Save");
    }, 3500);
    return;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText("Saving...");
    const res = await updateProfile(inputValue);
    if (res === "school information updated!") {
      toggleBtn();
    } else {
      setBtnText("Save");
      setErr(res);
    }
  };

  return (
    <div className="container">
      <div className="row pt-5 pb-4 mb-2 border-bottom">
        <div className="col-sm-4">
          <h5>School Information</h5>
          <p className="text-muted">
            This information will be displayed publicly
          </p>
        </div>
        <div className="col-sm-8">
          <div className="card shadow-sm">
            <div className="card-body">
              {err.length > 1 && (
                <div className="alert alert-warning fade show" role="alert">
                  <strong>Oops!</strong> {err}.
                  <button
                    type="button"
                    className="close"
                    onClick={() => setErr("")}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              )}
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="email">Photo</label>
                  <div className="d-flex align-items-center">
                    <img
                      src="user.svg"
                      width="50"
                      alt="photo"
                      className="rounded-circle d-block"
                    />
                    <div className="position-relative">
                      <input
                        type="file"
                        className="position-relative"
                        style={{ zIndex: "3", opacity: 0 }}
                      />
                      <button
                        type="button"
                        className="btn btn-sm btn-primary position-absolute"
                        style={{ left: "1.6rem", zIndex: 0 }}
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="email">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder={usrInfo.username}
                        required
                        defaultValue={usrInfo.username}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="email">Phone</label>
                      <input
                        type="phone"
                        className="form-control"
                        id="phone"
                        name="phone"
                        pattern="^[0]\d{10}$"
                        placeholder={usrInfo.phone}
                        required
                        defaultValue={usrInfo.phone}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="schoolname">School Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="schoolname"
                        name="name"
                        required
                        defaultValue={usrInfo.name}
                        placeholder={usrInfo.name}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="term">Change Term</label>
                      <select
                        className="form-control"
                        required
                        onChange={(e) => handleChange(e)}
                        id="term"
                        name="term"
                      >
                        <option value="1st term" selected={usrInfo.term === 1}>
                          1st term
                        </option>
                        <option value="2nd term" selected={usrInfo.term === 2}>
                          2nd term
                        </option>
                        <option value="3rd term" selected={usrInfo.term === 3}>
                          3rd term
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  {btnText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
