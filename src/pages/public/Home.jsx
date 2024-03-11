import { Fragment } from "react";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import Subscription from "../../components/Subscription";
import Hero from "../../components/HeroSection";
import { Testimonials } from "../../components/testimonials";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Subscription />
      <Testimonials />
      <CallToAction />
      <Footer />
    </Fragment>
  );
}
