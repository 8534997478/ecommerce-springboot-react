import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import OfferSection from "../components/OfferSection";
import  WhyChooseVastraa from "../components/WhyChooseVastraa";
import Testimonials from "../components/Testimonials";
import NewsletterSection from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <OfferSection />
      <WhyChooseVastraa/>
      <Testimonials/>
      <NewsletterSection/>
      <Footer/>

    </>
  );
};

export default Home;
