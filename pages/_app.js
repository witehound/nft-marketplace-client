import "../styles/globals.css";

//internal import
import { Navbar, Footer } from "../components";

const App = ({ Component, pageProps }) => (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
