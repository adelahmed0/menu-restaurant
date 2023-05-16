import { Col, Row, Card } from "react-bootstrap";
import { useAnimation, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ItemsList = ({ itemsData }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <Row>
      {itemsData.length >= 1 ? (
        itemsData.map((item, index) => {
          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Col sm="12" className="mb-3">
                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: "#f8f8f8" }}
                >
                  <Card.Img
                    className="img-item"
                    variant="top"
                    src={item.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">{item.title}</div>
                      <div className="item-price">{item.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">{item.description}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </motion.div>
          );
        })
      ) : (
        <h2 className="text-center">لا يوجد اصناف</h2>
      )}
    </Row>
  );
};

export default ItemsList;
