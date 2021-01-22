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
            <div className="pt-2 mb-4 d-flex align-items-bottom justify-content-between">
              {/* <h6 className="m-0 title title--sm">Request</h6> */}
              <input
                type="search"
                className="form-control"
                placeholder="search list"
                style={{ height: "45px", maxWidth: "150px" }}
              />
              <div class="form-group d-flex align-items-center">
                <label
                  for="exampleFormControlSelect1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Filter By:&nbsp;
                </label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  style={{ width: "100px" }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="row">
              <RequestCard />
            </div>
            <div className="d-flex justify-content-end">
              <nav aria-label="Page navigation mt-3">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </IndexLayout>
  );
}
