import { Col, Row, Card } from "react-bootstrap";

const ItemsList = () => {
  return (
    <Row>
      <Col sm="12" className="mb-3">
        <Card
          className="d-flex flex-row"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <Card.Img className="img-item" variant="top" src="1.png" />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              <div className="item-title">وجبة فطار</div>
              <div className="item-price">50 جنيه</div>
            </Card.Title>
            <Card.Text className="py-2">
              <div className="item-description">
                {" "}
                وصف الوجبة وصف الوجبة وصف الوجبة وصف الوجبة وصف الوجبة وصف
                الوجبة وصف الوجبة وصف الوجبة
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemsList;
