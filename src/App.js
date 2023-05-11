import { Container } from "react-bootstrap";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Category from "./component/Category";
import ItemsList from "./component/ItemsList";

function App() {
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category />
        <ItemsList />
      </Container>
    </div>
  );
}

export default App;
