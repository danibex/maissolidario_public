import { UsuariosTemporarios } from "@/dataTemp/usuarios/UsuariosTemp";
export default async function handler(req, res) { 
   res.status(200).json(UsuariosTemporarios); 
}