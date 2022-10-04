import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <div className="hero">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={360}
              src="../../assets/banner3.webp"
              alt="foto hero prueba"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={360}
              src="../../assets/banner2.webp"
              alt="foto hero prueba"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../assets/banner.webp"
              alt="foto hero"
              height={360}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
