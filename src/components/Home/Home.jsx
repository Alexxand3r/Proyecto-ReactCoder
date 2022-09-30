import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <div className="hero">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={120}
              src="../../assets/venum.webp"
              alt="foto hero prueba"
            />
            <Carousel.Caption>
              <h3 className="text-info">Titulo 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              height={120}
              src="../../assets/venum.webp"
              alt="foto hero prueba"
            />
            <Carousel.Caption>
              <h3 className="text-info">Titulo 2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../assets/venum.webp"
              alt="foto hero"
              height={120}
            />

            <Carousel.Caption>
              <h3 className="text-info">Titulo 3</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
