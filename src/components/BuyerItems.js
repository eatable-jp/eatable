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
    <Row xs={1} md={2} className="g-4">
      {items.map((item, index) => {
        // checks if the item is in the cart
        const isInCart = cart.some((cartItem) => cartItem.id === item.id);
        return (
          <Col>
            <Card className="h-100" key={index}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {
                    sellers.find((seller) => seller.id === item.seller_id)[
                      "shop_name"
                    ]
                  }
                </Card.Text>
                <Card.Text>Best before {item.expiration_date}</Card.Text>
                <Card.Text>{item.note}</Card.Text>
                <Card.Text className="item-info-original-price">
                  {item.original_price} yen
                </Card.Text>
                <Card.Text className="item-info-current-price">
                  {item.price} yen
                </Card.Text>
                {isInCart ? (
                  <Button
                    variant="primary"
                    onClick={() => dispatch(removeFromCart(index))}
                  >
                    Remove from cart
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add to cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
