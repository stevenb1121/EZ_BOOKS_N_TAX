// Custom Components
import PageHeader from "./HeaderFooter/PageHeader";
import Divider from "./Body/Divider";
import SectionTemplate from "./Body/SectionTemplate";
import Carousel from "./Body/Carousel";
import ScheduleRequest from "./Body/ScheduleRequest";
import PageFooter from "./HeaderFooter/PageFooter";
// Images
import HeaderImage from "/HeaderBackground.jpg?url";
import Img1 from "/Img1.jpg?url";
import Img2 from "/Img2.jpg?url";
import TaxBlocks from "/TaxBlocks.jpg?url";
import AboutUs from "/AboutUs.png?url";
// Constants
import { PRIMARY, SECONDARY } from "./Constants";
// MUI Icons
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
// React Functions
import { useEffect } from "react";

const Home = () => {
  // When the page is load, scroll the hash into view
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const slides = [
    {
      header: "Bookkeeping",
      description:
        "Many business decisions rely on a clean and organized set of books. Ez Books N Tax has tailored bookkeeping solutions whether one would need services monthly, quarterly, or annually all at price that can meet almost anyone’s budget.",
      img: Img1,
      icon: <BookOutlinedIcon />,
    },
    {
      header: "Tax Services",
      description:
        "Tax season can be a daunting task even for the most organized individual.  At Ez Books N Tax, we strive to prepare clients year-round by educating taxpayers on decisions such as making estimated taxes and other tax planning measures to minimize one’s annual tax liability.",
      img: TaxBlocks,
      icon: <CalculateOutlinedIcon />,
    },
    {
      header: "Business Consulting",
      description:
        "Running a business doesn’t have to be as complicated as some make it out to be.  However, sometimes small businesses need some additional resources or a second set of eyes to ensure they achieve success. Ez Books N Tax has many years of experience in customized spreadsheet applications, software implementation, project management, data analysis, and other data management skills.  Our main goal is to set one’s business up for success whether it is from the ground up or is simply to optimize your current business model to generate sustained success over time.",
      img: Img2,
      icon: <BusinessCenterOutlinedIcon />,
    },
  ];

  return (
    <>
      <PageHeader
        longHeading="Affordable Professional Services to Help you Succeed"
        description="We offer tailored solutions for success from personalized bookkeeping, tax preparation, software implementation, spreadsheet applications, & more at a price you can afford."
        pictureLocation={HeaderImage}
      />
      <Divider reverse />
      <SectionTemplate
        id="about"
        textColor={PRIMARY}
        backgroundColor={SECONDARY}
        description="Ez Books N Tax was founded on the core principles of offering a quick and easy solution to small businesses and individuals at an affordable price.  Our founder, Johnathon Burford, has an MBA with a focus in accounting and has over a decade of experience in many facets of the accounting industry.  Johnathon has a strong passion for thinking outside the box and customizing spreadsheet applications and other solutions to streamline business processes.  Johnathon also has niche experience in the tax realm and soon plans to continue his education to pursue his Enrolled Agent (EA) credentialing to aid more clientele with time-sensitive tax matters."
        img={AboutUs}
      />
      <Divider />
      <Carousel id="services" slides={slides} />
      <ScheduleRequest />
      <PageFooter />
    </>
  );
};

export default Home;
