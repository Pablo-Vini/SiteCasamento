import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:8080/Item",
})

const teste = axios.get('http://localhost:8080/Item/presente')
console.log(teste)

console.log(api)
export default api;