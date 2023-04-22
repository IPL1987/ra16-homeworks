import { useDispatch, useSelector } from "react-redux";
import {
  changeServiceField,
  addService,
  clearService,
} from "../../actions/actionsCreate";
import { Form, Button } from "react-bootstrap";

export default function ServiceAdd(props) {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price));
    dispatch(clearService());
  };

  const handleClear = (evt) => {
    evt.preventDefault();
    dispatch(clearService());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="note">
        <Form.Control name="name" onChange={handleChange} value={item.name} />
        <Form.Control name="price" onChange={handleChange} value={item.price} />
        <Button type="submit">Save</Button>
        <Button onClick={handleClear}>Clear</Button>
      </Form.Group>
    </Form>
  );
}