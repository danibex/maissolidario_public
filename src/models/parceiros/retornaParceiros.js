import pool from "../acess";
export async function listarParceiros() {
    try {
        const { rows: parceiros } = await pool.query('SELECT * FROM parceiros;');
        return(parceiros)    
    } catch (error) {
        return(console.log(error))
    }
}