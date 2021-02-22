import { useContext, useEffect, useState } from "react";
import IndexLayout from "../Layouts";
import InfoCards from "../components/InfoCards";
import RecentRequest from "../components/RecentRequest";
import { ApiContext } from "../context/ApiContext";
import ShareComponent from "../components/ShareComponent";
import SettingsPrompt from "../components/SettingsPrompt";
import UploadDoc from "../components/UploadDoc";
import { AuthContext } from "../context/AuthContext";
import NavBar from "../components/NavBar";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState("0");
  const { usrInfo } = useContext(AuthContext).authValue;
  const { getRequest } = useContext(ApiContext).api;

  useEffect(async () => {
    setLoading(true);
    const res = await getRequest(1);
    setLoading(false);
    setData([...res?.data]);
  }, []);

  return (
    <IndexLayout>
      <NavBar page={"Dashboard"} />
      <InfoCards applications={applications} />

      <div className="container-fluid py-3 px-md-5">
        <div className="row align-items-stretch">
          <RecentRequest loading={loading} data={data} />
          <UploadDoc />
        </div>
        <div className="row align-items-stretch py-2">
          <SettingsPrompt />
          <ShareComponent link={usrInfo?.payment_link?.substring(8)} />
        </div>
      </div>
    </IndexLayout>
  );
}
