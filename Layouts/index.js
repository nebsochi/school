import { useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";

export default function IndexLayout({ children }) {
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

        <main className="container-fluid pt-4 pt-sm-5">
          <Menu />
          <div className="row pt-3 pt-md-0">
            <div
              className="col-12 p-0"
              style={{ background: "rgb(246 246 246)", minHeight: "100vh" }}
            >
              <NavBar />
              {children}
            </div>
          </div>
          {/* <div className="row align-items-stretch">Home</div> */}
        </main>
      </div>
    )
  );
}
