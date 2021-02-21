import { useState, useContext, useEffect } from "react";
import { ApiContext } from "../../context/ApiContext";
import { AuthContext } from "../../context/AuthContext";

function AccountInformation() {
  const { banks, validate, updateAccount } = useContext(ApiContext).api;
  const { usrInfo } = useContext(AuthContext).authValue;
  const [inputValue, setInputValue] = useState({});
  const [touchedAccnum, setTouchedAccnum] = useState(false);
  const [btnText, setBtnText] = useState("Save");
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect(() => {
    const bank = findItem(inputValue?.bank_name);
    setInputValue({ ...inputValue, bank_code: bank?.bank_code });
    if (touchedAccnum) {
      checkAccount(inputValue.account_number);
    }
  }, [inputValue.bank_name]);

  const findItem = (value) => {
    return banks.find((bank) => {
      return bank.name === value;
    });
  };

  const checkAccount = async (e) => {
    if (inputValue?.account_number?.length === 10) {
      const res = await validate({
        account_number: inputValue.account_number,
        bank_code: inputValue.bank_code,
      });
      setTouchedAccnum(true);
      if (res) {
        setInputValue({ ...inputValue, account_name: res });
      } else {
        setErr("Invalid Account Number");
      }
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

  useEffect(() => {
    setInputValue({
      ...inputValue,
      bank_name: usrInfo?.bankname,
      bank_code: usrInfo?.bank_code,
      account_name: usrInfo?.account_name,
      account_number: usrInfo?.account_number,
    });
  }, [usrInfo]);

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
    const res = await updateAccount({
      bank_code: inputValue.bank_code,
      account_number: inputValue.account_number,
      account_name: inputValue.account_name,
    });
    if (res === "Account information updated!") {
      toggleBtn();
    } else {
      setBtnText("Save");
      setErr(res);
    }
  };

  return (
    <div className="container">
      <div className="row pt-3 border-bottom mb-3 pb-3">
        <div className="col-sm-4">
          <h5>Account Details</h5>
          <p className="text-muted">
            This information will be displayed publicly
          </p>
        </div>
        <div className="col-sm-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              {err?.length > 1 && (
                <div className="alert alert-danger fade show" role="alert">
                  {err}.
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
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="bankname">Bank Name</label>

                      <select
                        className="form-control"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="bank_name"
                        id="bankname"
                        required
                      >
                        {banks?.map(({ name, id, bank_code }) => (
                          <option
                            key={id}
                            selected={usrInfo?.bank_code === bank_code}
                            value={name}
                          >
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account_number">Account Number</label>
                      <input
                        type="number"
                        className="form-control"
                        id="account_number"
                        name="account_number"
                        required
                        minLength="11"
                        maxLength="11"
                        name="account_number"
                        placeholder={usrInfo.account_number}
                        value={usrInfo.account_number}
                        onChange={(e) => handleChange(e)}
                        onKeyUp={(e) => checkAccount(e)}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="account_number">Account Name</label>
                  <input
                    text="text"
                    className="form-control"
                    id="bankname"
                    name="account_number"
                    placeholder={usrInfo.account_name}
                    value={inputValue?.account_name}
                    readOnly
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

export default AccountInformation;
