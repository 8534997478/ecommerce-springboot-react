// import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import OfferSection from "../components/home/OfferSection";
import  WhyChooseVastraa from "../components/home/WhyChooseVastraa";
import Testimonials from "../components/home/Testimonials";
import NewsletterSection from "../components/home/Newsletter";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
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
