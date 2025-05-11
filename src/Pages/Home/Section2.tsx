import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";


// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Savor the taste of original, quality food delivered straight to your doorstep with lightning speed. At our kitchen, we meticulously craft each dish using only the freshest ingredients, ensuring every bite is a culinary delight.`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: ` From our signature burgers to gourmet salads and sides, we guarantee a dining experience that excites the palate. `,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `And with our commitment to the fastest delivery, you'll never have to wait long to indulge in your favorite flavors. Discover the perfect combination of taste and convenience with us today.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
    
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
              Explore our menu to discover juicy patties piled high with fresh toppings, nestled between soft, toasted buns. Whether you prefer savory beef, tender chicken, or plant-based alternatives, we cater to all tastes and dietary preferences.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
