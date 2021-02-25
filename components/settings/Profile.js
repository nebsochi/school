import { useState, useContext, useEffect } from "react";
import { ApiContext } from "../../context/ApiContext";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const [inputValue, setInputValue] = useState({});
  const { updateProfile, updatePicture } = useContext(ApiContext).api;
  const { usrInfo } = useContext(AuthContext).authValue;
  const [btnText, setBtnText] = useState("Save");
  const [err, setErr] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

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

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setSuccessMsg("");
    }, 4000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [successMsg]);

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
    console.log(res);
    if (res === "school information updated!") {
      toggleBtn();
    } else {
      setBtnText("Save");
      setErr(res);
    }
  };

  const handlefileUpload = async (e) => {
    const picture = new FormData();
    picture.append("picture", e.target.files[0]);
    const res = await updatePicture(picture);
    if (res === "picture added!") {
      setSuccessMsg(res);
    } else {
      setErr(res);
    }
  };

  return (
    <div className="container">
      <div className="row pt-5 pb-4 mb-2 border-bottom">
        <div className="col-md-4">
          <h5>School Information</h5>
          <p className="text-muted">
            This information will be displayed publicly
          </p>
        </div>
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              {err?.length > 1 && (
                <div className="alert alert-danger fade show" role="alert">
                  {err}.
                  <button type="button" className="close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              )}
              {successMsg?.length > 1 && (
                <div className="alert alert-success fade show" role="alert">
                  {successMsg}.
                  <button
                    type="button"
                    onClick={(e) => setSuccessMsg("")}
                    className="close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              )}
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="email">Photo</label>
                  <div className="d-flex align-items-center">
                    {usrInfo?.picture ? (
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center position-relative"
                        style={{
                          height: "50px",
                          width: "50px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={usrInfo?.picture}
                          height="100%"
                          alt="photo"
                          className="rounded-circle d-block"
                        />
                      </div>
                    ) : (
                      <img
                        src="user.svg"
                        width="50"
                        alt="photo"
                        className="rounded-circle d-block"
                      />
                    )}

                    <div className="position-relative text-left  ml-3">
                      <input
                        type="file"
                        onChange={(e) => handlefileUpload(e)}
                        onClick={(e) => (e.target.value = null)}
                        className="position-relative d-inline position-absolute"
                        style={{ zIndex: "3", opacity: 0, width: "59px" }}
                        name="picture"
                        accept="image/*"
                      />
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        style={{ left: "1.6rem", zIndex: 0 }}
                        onClick={(e) => handleClick(e)}
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
                        placeholder={usrInfo?.username}
                        required
                        value={usrInfo?.username}
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
                        onChange={(e) => handleChange(e)}
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
