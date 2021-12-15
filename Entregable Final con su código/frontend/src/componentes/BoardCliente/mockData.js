// Mock Data
import faker from "faker";

export const mockData = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    // Datos
    const mockProducto = {
      descripcion: faker.commerce.productDescription(),
      nombreProducto: faker.commerce.productName(),
      stock: faker.datatype.number(1000),
      etiquetas: faker.lorem.text(),
      precio: faker.commerce.price(1.5, 1000, 2, "S/ "),
      tipoProducto: faker.lorem.text(10),
      requiereReceta: faker.lorem.text(5),
      imgSrc: `/assets/images/productos/${i + 1}.jpg`,
      idCategoria: faker.random.alphaNumeric(),
    };

    result.push(mockProducto);
  }

  return result;
};
