import School from "../components/School";
import Head from "next/head";
import Populations from "../components/Populations";
import ImgContainer from "../components/ImgContainer";
import ContactDetails from "../components/ContactDetails";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container-fluid">
        <div className="row align-items-stretch">
          <div
            className="col-md-6 d-flex align-items-center justify-content-center p-0"
            style={{ minHeight: "100vh" }}
          >
            <School />
            <Populations />
            <ContactDetails />
          </div>
          <div
            className="col-md-6 position-relative p-0"
            style={{ backgroundImage: `url(/bg.png)`, backgroundSize: "cover" }}
          >
            <ImgContainer />
          </div>
        </div>
      </main>
    </div>
  );
}
