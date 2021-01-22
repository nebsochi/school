import IndexLayout from "../Layouts";
import RequestCard from "../components/RequestCard";

export default function Request() {
  return (
    <IndexLayout>
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-12">
            <h6 className="content__header position-relative border-bottom pb-2">
              Request
            </h6>
            <div className="pt-2 mb-4" style={{ borderRadius: "8px" }}>
              {/* <h6 className="m-0 title title--sm">Request</h6> */}
              <input type="search" placeholder="search list" />
              <div>
                <span>Filter By:</span>
              </div>
            </div>
            <div className="row">
              <RequestCard />
            </div>
          </div>
        </div>
      </div>
    </IndexLayout>
  );
}
