import FirstSection from "../components/main/firstSection/firstSection";
import VideoSection from "../components/main/videoSection/VideoSection";
import Services from "../components/main/services/Services";
import PopularOffers from "../components/main/popularOffers/PopularOffers";
import Blogs from "../components/main/Blogs/Blogs";
import BookingSection from "../components/main/bookingSection/BookingSection";

function Main() {
  return (
    <>
      <FirstSection />
      <Services />
      <VideoSection />
      <PopularOffers />
      <Blogs />
      <BookingSection />
    </>
  );
}

export default Main;
