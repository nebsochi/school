import Link from "next/link";

function RecentRequest({ data }) {
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "NGN",
    }).format(value);

  console.log(data);

  return (
    <div className="col-md-6 mb-4 mb-md-0">
      <div className="card" style={{ borderRadius: "7px" }}>
        <div className="card-header">
          <strong>Recent Request</strong>
        </div>
        <div className="card-body">
          <div className="table-responsive-lg">
            <table className="table">
              <thead>
                <tr>
                  <th className="tth" scope="col">
                    Status
                  </th>
                  <th className="tth" scope="col">
                    Name
                  </th>
                  <th className="tth" scope="col">
                    Students
                  </th>
                  <th className="tth" scope="col">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.slice(0, 4).map((item, i) => (
                  <tr key={item.id}>
                    <td className="text-center" scope="row">
                      {item.approved === 1 ? (
                        <span className="d-inline-block  p-1 rounded-circle bg-success"></span>
                      ) : (
                        <span className="d-inline-block mx-auto p-1 rounded-circle bg-warning"></span>
                      )}
                    </td>
                    <td>{item.parent.full_name}</td>
                    <td className="text-center">{item.children.length}</td>
                    <td>{numberFormat(item.loan_amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-top pt-3 text-center">
            <Link href="/request">
              <a
                className="btn btn-outline-primary btn-block"
                style={{
                  minWidth: "200px",
                  boxShadow: "none",
                }}
              >
                View more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentRequest;
