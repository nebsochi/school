import Image from "next/image";

function ShareComponent() {
  return (
    <div className="col-md-6 position-relative">
      <div className="card" style={{ borderRadius: "7px", height: "100%" }}>
        <div className="card-body text-center d-flex align-items-center justify-content-center">
          <div className="text-center">
            <Image src="/ss.svg" alt="share" width={300} height={"auto"} />
            <h6 className="pt-2 mb-3 mt-4">Copy and share your payment link</h6>
            <button className="btn btn-md btn-primary">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareComponent;
