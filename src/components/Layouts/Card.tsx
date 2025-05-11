import { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {CircleCheck} from "lucide-react"


interface props {
    key : number;
    image : string;
    rating : number;
    title : string;
    paragraph : string;
    renderRatingIcons: (rating: number) => React.ReactNode;
    price : number;
}


function Cards({ image, rating, title, paragraph, price, renderRatingIcons } : props ) {
  const [isLiked, setIsLiked] = useState(false); 
  const [addedToCart, setAddedToCart] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
  };
  
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist" onClick={handleLikeClick}>
            <i className={`bi bi-heart${isLiked ? "-fill" : ""}`}></i>
            </div>
          </div>

          <Card.Title className="title-card">{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <div className="add_to_card">
              {addedToCart ? (
                <div className="added-text">
                 <CircleCheck size={20} className="addIcon"/> Added
                </div>
              ) : (
                <Link to="/" onClick={handleAddToCart}>
                  <i className="bi bi-bag me-2"></i>
                  Add To Cart
                </Link>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
