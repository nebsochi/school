import React from "react";
import ImgContainer from "../components/ImgContainer";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function ImgLayOut(props) {
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
            {props.children}
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

export default ImgLayOut;
