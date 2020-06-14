import { SignupStateContextProvider } from '../context/SignupState'
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/css/argon-design-system-react.css";
import "../assets/css/main.css";

export default function MyApp({ Component, pageProps }) {
    return (
      <SignupStateContextProvider>
        <Component {...pageProps} />
      </SignupStateContextProvider>
    )
  }