function Profile() {
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
              <form>
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
                        placeholder="Enter username"
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

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="schoolname">School Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="schoolname"
                        aria-describedby="emailHelp"
                        placeholder="Enter school name"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="term">Change Term</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1st term</option>
                        <option>2nd term</option>
                        <option>3rd term</option>
                      </select>
                    </div>
                  </div>
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

export default Profile;
