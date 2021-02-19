import Link from "next/link";

function SettingsPrompt() {
  return (
    <div className="col-md-6">
      <div className="card rounded-lg">
        <div className="card-body">
          <h6>Complete your information</h6>
          <span className="text-muted">
            Please take a few seconds to update your information
          </span>

          <div className="progress my-4">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              25%
            </div>
          </div>

          <div>
            <Link href="/settings">
              <a className="btn btn-primary">Update now</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPrompt;
