import Image from "next/image";

function ShareComponent() {
  return (
    <div className="col-md-6">
      <div className="card" style={{ borderRadius: "7px" }}>
        <div className="card-body text-center">
          <Image src="/share-img.svg" alt="share" width={200} height={200} />
          <h6 className="pt-2 mb-3 title" style={{ fontSize: "1.3rem" }}>
            Copy and share your payment link
          </h6>
          <button
            className="btn btn-outline-primary"
            style={{
              minWidth: "200px",
            }}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareComponent;
