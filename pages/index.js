import IndexLayout from "../Layouts";
import InfoCards from "../components/InfoCards";

export default function Home() {
  return (
    <IndexLayout>
      <InfoCards />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="bg-white shadow-sm rounded">
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </IndexLayout>
  );
}
