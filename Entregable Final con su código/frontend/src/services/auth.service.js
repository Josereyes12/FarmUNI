import axios from "axios";

const API_URL = "http://localhost:8080/api/cliente/";

class AuthService {
    login(nombreUsuario, clave) {
        return axios
            .post(API_URL + "login", { nombreUsuario, clave })
            .then(response => {
                if (response.data.accessToken)
                    localStorage.setItem("user", JSON.stringify(response.data)); 
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(nombre, apellido, correo, telefono, dni, direccion, nombreUsuario, email, clave) {
        return axios.post(API_URL + "registro", {
            nombre,
            apellido,
            correo,
            telefono,
            dni,
            direccion,
            nombreUsuario,
            email,
            clave
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }

    listarProductos(etiquetas) {
        return axios.post("http://localhost:8080/producto/buscar", {
            etiquetas
        });
    }
}

export default new AuthService();