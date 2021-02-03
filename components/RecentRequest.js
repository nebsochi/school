import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";

function RecentRequest() {
  const [data, setData] = useState([]);

  const { getRequest } = useContext(ApiContext).api;
  useEffect(() => {
    getRequest(1).then((res) => setData([...res.data]));
  }, []);

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "NGN",
    }).format(value);

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm" style={{ borderRadius: "7px" }}>
            <div className="card-header">
              <h6 className="mb-0">Recent request</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="tth" scope="col">
                        #
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
                        <th scope="row">{i + 1}</th>
                        <td>{item.parent.full_name}</td>
                        <td>{item.children.length}</td>
                        <td>{numberFormat(item.loan_amount)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer py-1 text-center">
              <button
                className="btn px-5 btn-outline btn-primary btn-primary--sh-none btn-sm"
                style={{
                  color: "rgb(255, 255, 255)",
                  background: "rgb(0, 98, 204)",
                  marginTop: ".9rem",
                  marginBottom: "1rem",
                  borderColor: "rgb(0, 98, 204)",
                }}
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentRequest;
