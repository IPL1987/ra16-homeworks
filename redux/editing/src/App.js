import { Container } from "react-bootstrap";
import ServiceAdd from "./components/Form/ServiceForm";
import ServiceList from "./components/List/ServiceList";
import ServiceFilter from "./components/Filter/ServiceFilter";

export default function App() {
  return (
    <Container className="App">
      <ServiceAdd />
      <ServiceList />
      <ServiceFilter />
    </Container>
  );
}