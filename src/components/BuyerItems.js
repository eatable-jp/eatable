// redux
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import { removeFromCart } from "../slice/cartSlice";
// bootstrap
import { Row, Col, Card, Button } from "react-bootstrap";
// dummy data
import { sellers } from "../data/sellers";

export default function BuyerItems() {
  // setup redux
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const cart = useSelector((state) => state.cart);

  return (
    <Row xs={1} md={3} className="g-4">
      {items.map((item, index) => {
        // checks if the item is in the cart
        const isInCart = cart.some((cartItem) => cartItem.id === item.id);
        return (
          <Col>
            <Card className="h-100" key={index}>
              <Card.Header className="d-flex justify-content-between">
                <p className="mb-0">{item.name}</p>
                <p className="mb-0">Price: {item.price}</p>
              </Card.Header>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                
                <Card.Text className="mb-1" >Best before {item.expiration_date}</Card.Text>
                
                <div className="d-flex justify-content-between">
                {cart.some((cartItem) => cartItem.id === item.id) ? (
                  <Button
                    variant="outline-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove from cart
                  </Button>
                ) : (
                  <Button
                    variant="outline-success"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add to cart
                  </Button>
                )}
                <Button variant="outline-info">More info

                </Button>
                </div>
                
                
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
