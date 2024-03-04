import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Helmet } from "react-helmet";
import HomeImage from "../../assets/img/laptop-image.jpeg";

const Home = () => {
  const navigate = useNavigate();
  const navigateToExplore = () => {
    navigate("/explore");
  };
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Homepage " />
      </Helmet>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <div className="left">
                <h2>Explore the AI Frontier: Your Passport to Innovation.</h2>
                <p>
                  Unleash the Future: A Symphony of Intelligent Minds! Explore
                  Our AI Galaxy Featuring Cutting-Edge Models That Redefine
                  Possibilities.
                </p>
                <button className="tagline" onClick={navigateToExplore}>
                  Get Started <ArrowRightCircle size={25} loading="lazy" />
                </button>
              </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div className="imagehome">
                <img
                  src={HomeImage}
                  alt="Header Img"
                  loading="lazy"
                  style={{
                    maxWidth: "200px",
                    height: "200px",
                    marginTop: "40px",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Home;
