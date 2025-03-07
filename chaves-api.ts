// Importar a biblioteca CryptoJS para gerar o hash MD5
const CryptoJS = require("crypto-js");

// Definir os valores
const ts = new Date().getTime().toString();  // Timestamp atual
const publicKey = '13ce570bc84e76c954ef2fd871c128c7';    
const privateKey = '731f52ce96634a1f4aa9025fe2d9c9cbb7653f5d';  // Sua chave privada

// Concatenar ts + privateKey + publicKey
const toHash = ts + privateKey + publicKey;

// Gerar o hash MD5
const hash = CryptoJS.MD5(toHash).toString();

// Exibir os valores
console.log("Timestamp:", ts);
console.log("Hash:", hash);
console.log("API Key:", publicKey);

// Criar um objeto para armazenar as variáveis caso queira usá-las em uma requisição
const authParams = {
    ts: ts,
    hash: hash,
    apikey: publicKey
};

export default authParams