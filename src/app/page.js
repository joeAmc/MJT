import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import AboutHome from "../components/AboutHome/AboutHome";
import Collections from "../components/Collections/Collections";
// import classes from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutHome />
      <Collections />
      <Footer />
    </div>
  );
}
