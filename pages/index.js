import { useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import NavBar from "../components/NavBar";

export default function Home() {
  const { signedIn, checkAuthState } = useContext(AuthContext).authValue;
  const router = useRouter();

  useEffect(() => {
    let loginStatus = checkAuthState();
    if (loginStatus === false) {
      router.push("/signin");
    }
  }, []);

  return (
    signedIn && (
      <div>
        <Head>
          <title>SchoolCredit</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container-fluid">
          <div className="row">
            <div
              className="col-12 p-0"
              style={{ background: "rgb(246 246 246)", minHeight: "100vh" }}
            >
              <NavBar />
              <div className="container py-4">
                <div className="row">
                  <div className="col-md-4">
                    <div className="shadow-sm bg-white border rounded p-3 position-relative">
                      <span className="text-muted">Total Registrations</span>
                      <div className="d-flex justify-content-between">
                        <span className="title title--large">433</span>
                        <img
                          src="caret-right.svg"
                          style={{ fontSize: "1rem" }}
                          alt="arrow"
                        />
                      </div>
                      <img
                        src="arr-up.svg"
                        alt="arrow"
                        className="mr-3 mt-3"
                        style={{ position: "absolute", right: 0, top: 0 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row align-items-stretch">Home</div> */}
        </main>
      </div>
    )
  );
}
