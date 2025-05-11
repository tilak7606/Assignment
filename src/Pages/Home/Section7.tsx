import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
            With our lightning-fast delivery service, your order will be at your doorstep in just 30 minutes! No more waiting around when hunger strikes. Order now and get ready to indulge in deliciousness without the long wait!"
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: 999-888-7777
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
