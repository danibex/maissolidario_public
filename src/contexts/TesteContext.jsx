import { createContext, useState } from "react";
import React from 'react'

export const TesteContext = createContext()

export const TesteProvider = ({children}) => {
    const [teste, setTeste] = useState("Valor do Teste")
    function mudarValorDoTeste (novo) {
        setTeste(novo)
    }
    return(
        <TesteContext.Provider value={{teste, mudarValorDoTeste}}>
           {children} 
        </TesteContext.Provider>
    )
}
