function RepaymentCard() {
  return (
    <div className="col-lg-3 col-xl-3 col-md-4  mb-4">
      <div
        className="p-3 border bg-white position-relative"
        style={{ borderRadius: "16px" }}
      >
        <div
          className="position-absolute"
          style={{ top: ".0rem", right: ".3rem" }}
        >
          <span className="badge badge-pill badge-danger">3</span>
        </div>
        <div
          className="d-flex py-1 align-items-center"
          style={{ minHeight: "36px" }}
        >
          <div className="square__avatar">
            <img src="user.svg" height="40" alt="user" />
          </div>
          <div className="info__avatar pl-2">
            <span className="profile__title d-block">John Doe</span>
            <span
              style={{ textTransform: "lowercase" }}
              className="d-block profile__status"
            >
              1 of 4
            </span>
          </div>
        </div>

        <div>
          <div className="pt-3 pb-3 border-top mt-4 mb-3 border-bottom position-relative">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                25%
              </div>
            </div>
          </div>
        </div>

        <a
          className="btn btn-outline btn-primary btn-primary--sh-none  btn-block btn-md "
          style={{
            minWidth: "100%",

            fontSize: ".8rem",
            color: "#ffffff",
            marginTop: "1.7rem",
            marginBottom: "1rem",
          }}
        >
          View details
        </a>
      </div>
    </div>
  );
}

export default RepaymentCard;
