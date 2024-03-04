import { Fragment } from "react";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import Subscription from "../../components/Subscription";
import Hero from "../../components/HeroSection";
import { Testimonials } from "../../components/testimonials";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Subscription />
      <Testimonials />
      <CallToAction />
      <Footer />
    </Fragment>
  );
}
