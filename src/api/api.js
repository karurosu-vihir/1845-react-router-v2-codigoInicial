import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001"
})

export const buscar = async (url, setdata) =>{
    const respuesta = await api.get(url)
    setdata(respuesta.data)
}