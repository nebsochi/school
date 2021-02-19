function AccountInformation() {
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
          <div className="card shadow-sm">
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="bankname">Bank Name</label>

                      <select className="form-control" id="bankname">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Account Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone"
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
                    placeholder="Enter school address"
                    required
                    name="address"
                    defaultValue={""}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
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
