import { createContext, useState } from "react";
import React from 'react';

export const CompraContext = createContext({})

export const CompraProvider = ({ children }) => {
    let compraPadrao = {
      customer: "{CUSTOMER_ID}", 
      billingType: "BOLETO", // BOLETO | CREDIT_CARD | PIX
      dueDate: "2017-06-10", // Data(string)
      value: 0, // preço
      description: "Odontologia na Universo",
      externalReference: "",
      discount: {
        value: 0,
        dueDateLimitDays: 0
      },
      fine: { // juros
        value: 0
      },
      interest: {
        value: 0
      },
      postalService: false
    }
    const [compra, setCompra] = useState(compraPadrao)
    function atualizarCompra(compra) {
      setCompra(compra)
    }
    function finalizarCompra() {
      // compra
    }
    return (
      <CompraContext.Provider value={{ compra,  atualizarCompra, finalizarCompra }}>
        {children}
      </CompraContext.Provider>
    )
  }