import { Dalle } from "dalle-node"
import { saveAs } from 'file-saver';

export default async function handler(req, res) {
  //const dalle = new Dalle(req.path);
  const token = "sess-u5OiOtl27T0qbIg0XaGTkq2yiuJSVVtaoneqbS6l";
  const newData = req.query;
  fetch(newData, {
    method: "post",
    headers: new Headers({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    })})
   .then(resp => resp.json())
   .then(json => console.log(json))
}