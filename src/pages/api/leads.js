import pool from '@/models/acess';

export default async function handler(req, res) {
const metodo = req.method; 
const paginacao = req.query.graduacao - 1;
switch (metodo) {
  case "GET":
   const { rows: leads } = await pool.query(`SELECT * FROM leads;`)
   res.status(200).send({leads: leads}); 
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
