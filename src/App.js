import { Container } from "react-bootstrap";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Category from "./component/Category";
import ItemsList from "./component/ItemsList";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];

  // Filter by category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };
  const filterBySearch = (word) => {
    if (word !== "الكل") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };
  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category
          filterByCategory={filterByCategory}
          allCategory={allCategory}
        />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
