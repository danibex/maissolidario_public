import { ParceirosTemporarios } from "@/dataTemp/parceiros/ParceirosTemp";
export default async function handler(req, res) { 
   res.status(200).json(ParceirosTemporarios); 
}