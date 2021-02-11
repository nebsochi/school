import Image from "next/image";

function PublishList() {
  return (
    <div className="PublistList">
      <div className="PublishItem d-flex justify-content-between py-3 border-bottom">
        <div className="d-flex">
          <Image src="/user.svg" alt="logo" height={50} width={50} />
          <div className="pl-3">
            <h5 className="m-0">Literamed Publications Nigeria Limited</h5>
            <span>Lorem Ipsum</span>
          </div>
        </div>

        <button
          style={{
            background: "rgb(0, 98, 204)",
            borderColor: "rgb(0, 98, 204)",
            height: "40px",
          }}
          className="btn btn-sm btn-primary px-3 btn-primary--sh-none"
        >
          View
        </button>
      </div>
    </div>
  );
}

export default PublishList;
