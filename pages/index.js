import { useContext, useEffect, useState } from "react";
import IndexLayout from "../Layouts";
import InfoCards from "../components/InfoCards";
import RecentRequest from "../components/RecentRequest";
import { ApiContext } from "../context/ApiContext";
import ShareComponent from "../components/ShareComponent";

export default function Home() {
  const [data, setData] = useState([]);
  const [applications, setApplications] = useState("");
  const { getRequest } = useContext(ApiContext).api;

  useEffect(() => {
    getRequest(1).then((res) => {
      setData([...res.data]);
      setApplications(res.total_results_count);
    });
  }, []);

  return (
    <IndexLayout>
      <InfoCards applications={applications} />

      <div className="container py-3">
        <div className="row">
          <RecentRequest data={data} />
          <ShareComponent />
        </div>
      </div>
    </IndexLayout>
  );
}
