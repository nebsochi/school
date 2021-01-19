import Head from "next/head";
import "../styles/globals.css";
import { SignUpProvider } from "../context/SignUpContext";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <SignUpProvider>
      <AuthProvider>
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            crossOrigin="anonymous"
          />
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </SignUpProvider>
  );
}

export default MyApp;
