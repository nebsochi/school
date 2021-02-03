import IndexLayout from "../Layouts";
import InfoCards from "../components/InfoCards";
import RecentRequest from "../components/RecentRequest";

export default function Home() {
  return (
    <IndexLayout>
      <InfoCards />
      <RecentRequest />
    </IndexLayout>
  );
}
