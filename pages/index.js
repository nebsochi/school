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
            <div className="col-12 p-0">
              <NavBar />
            </div>
          </div>
          {/* <div className="row align-items-stretch">Home</div> */}
        </main>
      </div>
    )
  );
}
