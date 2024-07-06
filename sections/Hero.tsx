// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import Link from "next/link";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <Container className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5 my-5 bg-silver">
//       <div className="font-inter" data-aos="fade-right">
//         <h1 className="text-gray-900 fw-semibold">
//           Lessons and insights&nbsp; <br />
//           <span className="text-primary">from 8 years</span>
//         </h1>
//         <p className="text-gray-200 fw-light fs-6">
//           Where to grow your business as a photographer: site or social media?
//         </p>
//         <Button variant="primary text-white mt-4" size="lg">
//           Register
//         </Button>
//       </div>
//       <Image
//         src="/HeroImg.svg"
//         alt="Hero"
//         height={0}
//         width={0}
//         className=" h-auto w-auto mb-2 px-2"
//         priority={true}
//         data-aos="fade-left"
//       />
//     </Container>
//   );
// };

// export default Hero;

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const Hero = () => {
  return (
    <Container className="my-5 bg-silver">
      <Carousel>
        <Carousel.Item>
          <div className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5">
            <div className="font-inter" data-aos="fade-right">
              <h1 className="text-gray-900 fw-semibold">
                Lessons and insights&nbsp; <br />
                <span className="text-primary">from 8 years</span>
              </h1>
              <p className="text-gray-200 fw-light fs-6">
                Where to grow your business as a photographer: site or social media?
              </p>
              <Button variant="primary text-white mt-4" size="lg">
                Register
              </Button>
            </div>
            <Image
              src="/HeroImg.svg"
              alt="Hero"
              height={0}
              width={0}
              className="h-auto w-auto mb-2 px-2"
              priority={true}
              data-aos="fade-left"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5">
            <div className="font-inter" data-aos="fade-right">
              <h1 className="text-gray-900 fw-semibold">
                Insights and strategies&nbsp; <br />
                <span className="text-primary">from industry leaders</span>
              </h1>
              <p className="text-gray-200 fw-light fs-6">
                Learn the best practices for growing your business.
              </p>
              <Button variant="primary text-white mt-4" size="lg">
                Discover More
              </Button>
            </div>
            <Image
              src="/HeroImg2.svg"
              alt="Hero"
              height={0}
              width={0}
              className="h-auto w-auto mb-2 px-2"
              priority={true}
              data-aos="fade-left"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5">
            <div className="font-inter" data-aos="fade-right">
              <h1 className="text-gray-900 fw-semibold">
                Discover new techniques&nbsp; <br />
                <span className="text-primary">and technologies</span>
              </h1>
              <p className="text-gray-200 fw-light fs-6">
                Stay ahead of the curve with the latest trends.
              </p>
              <Button variant="primary text-white mt-4" size="lg">
                Learn More
              </Button>
            </div>
            <Image
              src="/HeroImg3.svg"
              alt="Hero"
              height={0}
              width={0}
              className="h-auto w-auto mb-2 px-2"
              priority={true}
              data-aos="fade-left"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Hero;
