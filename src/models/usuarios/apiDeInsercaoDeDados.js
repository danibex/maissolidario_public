export async function consumirAPIdeInsercaoDeDados(user) {
    fetch("/api/usuarios/usuariosDoGoogle", {
        method: 'POST',
        body: JSON.stringify(user) //JSON.string
      })
      .then((e) => console.log(e))
}