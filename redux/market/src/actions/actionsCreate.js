import { ADD_PRODUCT, CHANGE_PRODUCT_FORM, RESET_PRODUCT_FORM } from "./actionsType";

export function addProduct(title, price, discount, image) {
  return {
    type: ADD_PRODUCT,
    payload: {
      title,
      price,
      discount,
      image,
    },
  };
}

export function changeProductForm(name, value) {
  return {
    type: CHANGE_PRODUCT_FORM,
    payload: {
      name,
      value,
    },
  };
}

export function resetProductForm() {
  return {
    type: RESET_PRODUCT_FORM,
  }
}