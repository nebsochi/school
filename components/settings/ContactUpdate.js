function ContactUpdate() {
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
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
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

export default ContactUpdate;
