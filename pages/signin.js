import { useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ImgContainer from "../components/ImgContainer";
import SignInform from "../components/SignInform";
import { AuthContext } from "../context/AuthContext";

function signin() {
  const { signedIn, checkAuthState } = useContext(AuthContext).authValue;
  const router = useRouter();

  useEffect(() => {
    let loginStatus = checkAuthState();
    if (loginStatus === false) {
      router.push("/signin");
    }
  }, []);

  return (
    !signedIn && (
      <div>
        <Head>
          <title>SchoolCredit</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container-fluid">
          <div className="row align-items-stretch">
            <div
              className="col-md-7 position-relative p-0"
              style={{
                backgroundImage: `url(/bg.png)`,
                backgroundSize: "cover",
                background: "#0000a6",
              }}
            >
              <ImgContainer />
            </div>
            <div
              className="col-md-5 d-flex align-items-center justify-content-center p-0"
              style={{ minHeight: "100vh" }}
            >
              <SignInform />
            </div>
          </div>
        </main>
      </div>
    )
  );
}

export default signin;
