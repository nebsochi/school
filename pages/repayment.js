import RepaymentCard from "../components/RepaymentCard";
import IndexLayout from "../Layouts/index";

function repayment() {
  return (
    <IndexLayout>
      <div className="container positioin-relative pt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="pt-2 mb-4 border-bottom d-flex align-items-bottom justify-content-between">
              {/* <h6 className="m-0 title title--sm">Request</h6> */}

              <div className="form-group d-flex align-items-center">
                <label
                  htmlFor="exampleFormControlSelect1"
                  className="pt-1"
                  style={{
                    whiteSpace: "nowrap",
                    fontSize: ".9rem",
                    fontWeight: "600",
                  }}
                >
                  Filter By:&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  style={{ height: "45px" }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <input
                type="search"
                className="form-control"
                placeholder="search list"
                style={{ height: "45px", maxWidth: "200px" }}
              />
            </div>

            <div className="row">
              <RepaymentCard />
            </div>
          </div>
        </div>
      </div>
    </IndexLayout>
  );
}

export default repayment;
