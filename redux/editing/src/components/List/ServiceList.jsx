import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editService, removeService, resetFields } from "../../actions/actionsCreate";

export default function ServiceList() {
  const filter = useSelector(state => state.serviceFilter);
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(resetFields());
  };

  const handleEdit = item => {
    dispatch(editService(item));
  }

  return (
    <ul>
      {items.filter(o => o.name.toLowerCase().includes(filter.toLowerCase())).map(o => <li key={o.id}>
        {o.name} {o.price}
        <button onClick={() => handleEdit(o)}>Edit</button>
        <button onClick={() => handleRemove(o.id)}>X</button>
      </li>)}
    </ul>
  );
}