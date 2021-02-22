import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function SettingsPrompt() {
  const { usrInfo } = useContext(AuthContext).authValue;
  return (
    <div className="col-md-6 mb-3">
      <div className="card border-0 shadow-sm rounded-lg">
        <div className="card-body">
          {usrInfo?.settings_progress === 100 ? (
            <h6 style={{ fontWeight: "600" }}>Update your information</h6>
          ) : (
            <h6 style={{ fontWeight: "600" }}>Complete your information</h6>
          )}

          <span className="text-muted">
            Please take a few seconds to update your information
          </span>

          <div className="progress my-4">
            <div
              className={`progress-bar ${
                usrInfo?.settings_progress === 100 ? "bg-success" : "bg-warning"
              }`}
              role="progressbar"
              style={{ width: `${usrInfo?.settings_progress}%` }}
              aria-valuenow={usrInfo?.settings_progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {`${usrInfo?.settings_progress}%`}
            </div>
          </div>

          <div>
            <Link href="/settings">
              <a className="btn btn-primary btn-primary--sh-none">Update now</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPrompt;
