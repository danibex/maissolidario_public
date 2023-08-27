import pool from '@/models/acess';
export default async function handler(req, res) {
const metodo = req.method; 
switch (metodo) {
  case "GET":
   const { rows: parceiros } = await pool.query(`SELECT id, nome, urlimagem FROM parceiros;`)
   res.status(200).send({parceiros: parceiros}); 
    break;
  case "POST": 
    res.status(200).json("Funciona Também!!!")
    break;
  case "PUT":
    res.status(200).json("Funciona Também!!!")

    break;
  case "DELETE":
    res.status(200).json("Funciona Também!!!")

    break;
  default:
    res.status(200).json("Método HTTP desconhecido");

    break;
}
}
