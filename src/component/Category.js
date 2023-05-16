import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const Category = ({ filterByCategory, allCategory }) => {
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allCategory.length >= 1
          ? allCategory.map((cat, index) => {
              return (
                <motion.div style={{ x: 1000 }} animate={{ x: 0 }} key={index}>
                  <button onClick={() => onFilter(cat)} className="btn-c mx-2">
                    {cat}
                  </button>
                </motion.div>
              );
            })
          : null}
      </Col>
    </Row>
  );
};
export default Category;
