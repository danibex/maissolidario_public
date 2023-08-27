import { createContext, useEffect, useState } from "react";
import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '@/services/firebase/firebaseConfig';
import { useRouter } from "next/router";
import { consumirAPIdeInsercaoDeDados } from "@/models/usuarios/apiDeInsercaoDeDados";
const provider = new GoogleAuthProvider();
export const AutenticacaoContext = createContext({})
export const AutenticacaoProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // Alterando ifromações do user (useState) (Google)
  useEffect(() => {
    const loadStorageAuth = () => {
      const sessionToken = sessionStorage.getItem("@AuthFirebase: token")
      const sessionUser = sessionStorage.getItem("@AuthFirebase: user")
      if (sessionToken && sessionUser) {
        setUser(JSON.parse(sessionUser))
      }
    }
    loadStorageAuth()
  }, [])

  const auth = getAuth(app);
  const router = useRouter();

  function logar() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user)
        sessionStorage.setItem("@AuthFirebase: token", token)
        sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user))

        consumirAPIdeInsercaoDeDados(user);
      })
      // Armazena informações google do usuário no banco de dados mais solidário 
      .then(() => {Integrar()})
      .catch((error) => {
        /*const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;*/
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  useEffect(() => { // utilizar para persistência no banco de dados
    console.log(user)
  }, [user])
  
  function Sair() {
    sessionStorage.clear()
    setUser("")
    router.push(`/`)
  }
  return (
    <AutenticacaoContext.Provider value={{ logar, signed: !!user.uid, user, Sair }}>
      {children}
    </AutenticacaoContext.Provider>
  )
}