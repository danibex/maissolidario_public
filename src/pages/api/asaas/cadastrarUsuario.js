import bodyParser from "body-parser";
export default async function criarUsuarioAsaas(req, res) {
  const token = process.env.TOKEN
  const urlCriar = process.env.API_CREATE_CUSTOMER
  const urlConsultar = process.env.API_LIST_CUSTOMER_CPF
  
  bodyParser.json()(req, res, async () => {
    const novoUsuario = req.body;
    const usuarioObjeto = JSON.parse(novoUsuario)
    try {
      const consultar = await fetch(`${urlConsultar}${usuarioObjeto.cpfCnpj}`, {
        method: 'GET',
        headers: {
          'access_token': `$${token}`
        }
      })
      const dadosConsulta = await consultar.json();

      if(dadosConsulta.totalCount >= 1) {
        res.status(200).json({ resposta: "Usuário existente", usuario: true });
      } else {
        const criar = await fetch(urlCriar, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          'access_token': `$${token}`
        },
        body: novoUsuario
      });
      const data = await criar.json();    
      res.status(200).json({ resposta: data });
    }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}
