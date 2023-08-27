import React from 'react'

export default function lead() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='w-full'>
        <h2 className='m-4 text-right'>Versão Beta</h2>
      </div>
      <table className='border border-black rounded-lg'>
        <thead>
          <tr className='border border-black text-center'>
            <td className='border border-black'>Nome</td>
            <td className='border border-black'>E-mail</td>
            <td className='border border-black'>Telefone</td>
            <td className='border border-black'>Curso</td>
            <td className='border border-black'>Instituição</td>
            <td className='border border-black'>Cidade</td>
            <td className='border border-black'>Ações</td>
          </tr>
          <tr>
            <td className='border border-black px-2'>Daniel Ivan Medeiros Santana</td>
            <td className='border border-black px-2'>danielivam96@gmail.com</td>
            <td className='border border-black px-2'>71986384879</td>
            <td className='border border-black px-2'>Análise e Desenvolvimento de Sistemas</td>
            <td className='border border-black px-2'>Centro Universo Salvador</td>
            <td className='border border-black px-2'>Salvador</td>
            <td className='border border-black px-2'>
              <button>Alterar</button>
              <button>Excluir</button>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  )
}
