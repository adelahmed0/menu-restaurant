import { Col, Row } from "react-bootstrap";

const Category = () => {
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          <button className="btn-c mx-2">الكل</button>
          <button className="btn-c mx-2">فطار</button>
          <button className="btn-c mx-2">غداء</button>
          <button className="btn-c mx-2">عشاء</button>
        </div>
      </Col>
    </Row>
  );
};
export default Category;
