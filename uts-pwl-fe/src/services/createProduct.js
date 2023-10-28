import axios from 'axios';

const url = 'https://653d476ff52310ee6a9a116e.mockapi.io/api/v1/products/';

export default async function createProduct(product) {
  try {
    const response = await axios.post(url, product);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}