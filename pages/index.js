import { useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import SignUpForm from "../components/SignUpForm";
import { AuthContext } from "../context/AuthContext";

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
          <div className="row align-items-stretch">Home</div>
        </main>
      </div>
    )
  );
}
