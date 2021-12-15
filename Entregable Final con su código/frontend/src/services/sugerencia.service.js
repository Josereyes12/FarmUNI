import axios from "axios";

const API_URL = "http://localhost:8080/api/sugerencia";

class SugerenciaService {
  async enviarSugerencia(datos) {
    console.log(`datos`, datos)
    const response = await axios.post(API_URL, {datos});
    console.log("response", response);
    if (response.data) console.log("response.data", response.data);
    return response.data;
  }
}

export default new SugerenciaService();
