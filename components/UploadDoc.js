export default function UploadDoc() {
  return (
    <div className="col-md-6 mb-3 position-relative">
      <div
        className="card border-0 py-3 shadow-sm d-flex align-items-center justify-content-center"
        style={{ borderRadius: "7px", height: "100%" }}
      >
        <div>
          <div
            className="bg-light mb-4 d-flex align-items-center justify-content-center"
            style={{
              height: "170px",
              width: "280px",
              border: "1px dashed #ccc",
            }}
          >
            <span
              className="text-secondary"
              style={{ fontSize: "5rem", fontWeight: "300" }}
            >
              +
            </span>
          </div>
          <div className="text-center">
            <h6>Click below to upload a file</h6>
            <button className="btn btn-primary btn-primary--sh-none">
              Choose file
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
