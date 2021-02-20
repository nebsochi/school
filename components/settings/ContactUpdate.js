import { useState, useContext, useEffect } from "react";
import { ApiContext } from "../../context/ApiContext";
import { AuthContext } from "../../context/AuthContext";

function ContactUpdate() {
  const [inputValue, setInputValue] = useState({});
  const { updateContactInfo } = useContext(ApiContext).api;
  const { usrInfo } = useContext(AuthContext).authValue;
  const [btnText, setBtnText] = useState("Save");
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect(() => {
    setInputValue({
      ...inputValue,
      phone: usrInfo?.phone,
      email: usrInfo?.email,
      address: usrInfo?.address,
    });
  }, [usrInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    const res = await updateContactInfo(inputValue);
    setBtnText("Saving...");
    if (res === "contact information updated!") {
      toggleBtn();
    } else {
      setBtnText("Save");
      setErr(res);
    }
  };

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

  return (
    <div className="container">
      <div className="row pt-4 border-bottom mb-3 pb-4">
        <div className="col-sm-4">
          <h5>Contact Details</h5>
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
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder={usrInfo.email}
                        defaultValue={usrInfo.email}
                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        required
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
                        required
                        id="phone"
                        pattern="^[0]\d{10}$"
                        placeholder={usrInfo.phone}
                        defaultValue={usrInfo.phone}
                        name="phone"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    rows={3}
                    name="address"
                    defaultValue={usrInfo.address}
                    placeholder={usrInfo.address}
                    required
                    onChange={(e) => handleChange(e)}
                  />
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

export default ContactUpdate;
