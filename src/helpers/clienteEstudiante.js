import axios from "axios"


const insertarEstudiante = async (body,token) => {

    const valortoken = "Bearer " + token;

    const headers = {
        "Authorization": valortoken,
    }

    const data = await axios.post("http://localhost:8080/API/v1.0/Inscripcion/estudiantes", body, { headers: headers }).then(r => r.data);

    return data;
}

export const insertarEstudianteFachada = async (body, token) => {

    return await insertarEstudiante(body, token);

}



const mostrarEstudiante = async (token) => {

    const valortoken = "Bearer " + token;

    const headers = {
        "Authorization": valortoken,
    }

    const data = axios.get(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes`, { headers: headers }).then(r => r.data);
    console.log('se ejecutoi');
    console.log(data);
    return data;
}

export const mostrarEstudianteFachada = async (token) => {

    return await mostrarEstudiante(token);

}