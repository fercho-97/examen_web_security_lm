import axios from "axios"


const obtenerToken = async (usuario) => {
    const data = axios.post(`http://localhost:8082/API/v1.0/seguridad/autorizaciones/jwt/obtener`,usuario).then(r => r.data);
    return data;
}

export const obtenerTokenFachada = async (usuario) => {
    return await obtenerToken(usuario);
}
