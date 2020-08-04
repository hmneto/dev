import Axios from "axios";

let url = window.location.origin
if(process.env['REACT_APP_BASE_URL']==="dev")
url = "http://192.168.99.100";

if(process.env['REACT_APP_BASE_URL']==="linux-dev")
url = "http://localhost";

const api = Axios.create({
  baseURL: url,
});
console.log(process.env['REACT_APP_BASE_URL'])
export const fullpage_index = (value, user) =>
  api.get("/FullpageController.php?v=" + value + "&&" + "u=" + user);
