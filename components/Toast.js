import { useEffect } from "react";

function Toast({ toastTitle, toastMsg, setToastOpen, toastOpen }) {
  //   const [toastOpen, setToastOpen] = useState(true);

  useEffect(() => {
    const effect = setTimeout(() => {
      setToastOpen(false);
    }, 3000);
    return () => {
      clearTimeout(effect);
    };
  }, [toastOpen]);

  return (
    toastOpen && (
      <div
        className="toast modal-toast show fade"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="mr-auto">{toastTitle}</strong>

          <button
            type="button"
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="toast-body">{toastMsg}</div>
      </div>
    )
  );
}

export default Toast;
