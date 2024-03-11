import { Fragment } from "react";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import FaqsSection from "../../components/FaqsSection";

export default function Home() {
  return (
    <Fragment>
      <FaqsSection />
      <CallToAction />
      <Footer />
    </Fragment>
  );
}
