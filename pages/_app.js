import { SignupStateContextProvider } from '../context/SignupState'
import Head from 'next/head'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

import "../assets/css/argon-design-system-react.css";
import "../assets/directory/css/custom.css"
import "../assets/directory/css/style.default.min.css"
import "../assets/directory/icons/styles.css"
import "../assets/css/main.css";

import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo'

import Header from "../components/header/header"
import Whatsapp from "../components/whatsapp/whatsapp"
import Footer from "../components/footer/footer"
import { useRouter } from 'next/router'


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const isCommingSoon = router.route === '/'
    return (
      <ApolloProvider client={client}>
      <SignupStateContextProvider>
        <Head>
          <title>mascotapack</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-171124637-1"
          />

<link rel="icon" 
      type="image/png" 
      href="logo_black.png" />

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
        {!isCommingSoon && <Header />}
        <Component {...pageProps} />
        <Whatsapp />
        {!isCommingSoon && <Footer />}
      </SignupStateContextProvider>
      </ApolloProvider>
    )
  }