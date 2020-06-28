import { SignupStateContextProvider } from '../context/SignupState'
import "../assets/css/argon-design-system-react.css";
import "../assets/directory/css/custom.css"
import "../assets/directory/css/style.default.min.css"
import "../assets/directory/icons/styles.css"
import "../assets/css/main.css";


import Header from "../components/header/header"
import Whatsapp from "../components/whatsapp/whatsapp"

export default function MyApp({ Component, pageProps }) {
    return (
      <SignupStateContextProvider>
        <Header />
        <Component {...pageProps} />
        <Whatsapp />
      </SignupStateContextProvider>
    )
  }