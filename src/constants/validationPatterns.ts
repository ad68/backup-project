export const patterns = {
  mobile: new RegExp(/^[0][9][0-9][0-9]{8}$/),
  nationalCode: new RegExp(/^([0-9]){10}$/),
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
  name: new RegExp(/^[A-Za-zآ-ی\s\-]+$/),
  text: new RegExp(/^[\u0600-\u06FFa-zA-Z0-9\s]+$/),
  number: new RegExp(/^\d+$/),
}
