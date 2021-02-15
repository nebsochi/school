import { useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import Styles from "../styles/SideBar.module.css";

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

        <main className="container-fluid p-0">
          <div
            className="d-flex"
            style={{
              overflow: "hidden",
              height: "100vh",
              background: "#F0F5F9",
            }}
          >
            <Sidebar />
            <div className={`${Styles.SidebarRight} position-relative`}>
              {/* <NavBar /> */}
              {children}
            </div>
          </div>
        </main>
      </div>
    )
  );
}
