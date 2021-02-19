import Link from "next/link";

function RecentRequest({ data }) {
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "NGN",
    }).format(value);

  console.log(data);

  return (
    <div className="col-lg-6 col-12 mb-4 mb-md-0">
      <div style={{ borderRadius: "7px" }}>
        <div className="bg-white border rounded-lg">
          <h6 className="mb-3 justify-content-between p-2 px-3 d-flex align-items-center border-bottom">
            <strong>Recent Request</strong>
            <Link href="/request">
              <a className="btn btn-sm text-primary">View All</a>
            </Link>
          </h6>
          <div className="px-3 pb-2 table-responsive-xl">
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
                    <td className="text-center text-capitalize py-3 pr-4">
                      {item.approved === 1 ? (
                        <span className="d-inline-block  p-1 rounded-circle bg-success"></span>
                      ) : (
                        <span className="d-inline-block mx-auto p-1 rounded-circle bg-warning"></span>
                      )}
                    </td>
                    <td className="py-3 text-capitalize">
                      {item.parent.full_name}
                    </td>
                    <td className="text-center text-capitalize pr-4 py-3">
                      {item.children.length}
                    </td>
                    <td className="py-3 text-capitalize">
                      {numberFormat(item.loan_amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentRequest;
