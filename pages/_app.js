import { SignupStateContextProvider } from '../context/SignupState'
import Head from 'next/head'

import "../assets/css/argon-design-system-react.css";
import "../assets/directory/css/custom.css"
import "../assets/directory/css/style.default.min.css"
import "../assets/directory/icons/styles.css"
import "../assets/css/main.css";


import Header from "../components/header/header"
import Whatsapp from "../components/whatsapp/whatsapp"
import Footer from "../components/footer/footer"


export default function MyApp({ Component, pageProps }) {
    return (
      <SignupStateContextProvider>
        <Head>
          <title>mascotapack</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-171124637-1"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-171124637-1');
                `,
            }}
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Whatsapp />
        <Footer />
      </SignupStateContextProvider>
    )
  }