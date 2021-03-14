import Link from "next/link";
import isEmpty from "lodash/isEmpty";
import EmptyRequest from "./EmptyRequest";

function RecentRequest({ data, loading }) {
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "NGN",
    }).format(value);

  return (
    <div className="col-md-6 mb-3">
      <div style={{ borderRadius: "7px" }}>
        <div className="bg-white border-0 shadow-sm rounded-lg">
          <h6 className="mb-3 justify-content-between p-2 px-3 d-flex align-items-center border-bottom">
            <strong>Recent Request</strong>
            <Link href="/request">
              <a className="btn btn-sm btn-primary btn-primary--sh-none">
                View all
              </a>
            </Link>
          </h6>
          {isEmpty(data) ? (
            <div className="text-center pb-3">
              <EmptyRequest width={"155px"} />
              <h6>
                <strong>No recent request</strong>
              </h6>
              <p>Recent request will be listed here</p>
            </div>
          ) : (
            <div className="px-3 pb-2 table-responsive-xl">
              {loading ? (
                <div
                  className="d-flex align-items-center pb-2 justify-content-center"
                  style={{ minHeight: "250px" }}
                >
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <table className="table table-borderless">
                  <thead className="rounded border-bottom">
                    <tr>
                      <th scope="col" className="py-2">
                        Status
                      </th>
                      <th scope="col" className="py-2">
                        Name
                      </th>
                      <th scope="col" className="py-2">
                        Students
                      </th>
                      <th scope="col" className="py-2">
                        Amount
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.slice(0, 4).map((item, i) => (
                      <tr key={item.id}>
                        <td className="text-center text-muted text-capitalize py-3 pr-4">
                          {item.approved === 1 ? (
                            <span className="d-inline-block  p-1 rounded-circle bg-success"></span>
                          ) : (
                            <span className="d-inline-block mx-auto p-1 rounded-circle bg-warning"></span>
                          )}
                        </td>
                        <td className="py-3 text-muted text-capitalize text-truncate">
                          {item.parent.full_name.toLowerCase().substring(0, 16)}
                          {item.parent.full_name.length > 15 && "..."}
                        </td>
                        <td className="text-center text-muted text-capitalize pr-4 py-3">
                          {item.children.length}
                        </td>
                        <td className="py-3 text-muted text-capitalize">
                          {numberFormat(item.loan_amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentRequest;
