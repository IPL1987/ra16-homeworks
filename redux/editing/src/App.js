import { Container } from "react-bootstrap";
import ServiceAdd from "./components/Form/ServiceForm";
import ServiceList from "./components/List/ServiceList";

export default function App() {
  return (
    <Container className="App">
      <ServiceAdd />
      <ServiceList />
    </Container>
  );
}