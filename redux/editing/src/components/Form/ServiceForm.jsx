import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSaveService, changeServiceField, resetFields, resetFilter } from "../../actions/actionsCreate";

export default function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addSaveService(item));
    dispatch(resetFields());
    if (!item.id) {
      dispatch(resetFilter());
    }
  }

  const handleCancel = e => {
    dispatch(resetFields());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Save</button>
      {item.id && <button onClick={handleCancel}>Cancel</button>}
    </form>
  )
}