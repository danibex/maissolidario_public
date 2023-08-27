// Configuração de variavel de acesso(configuração do app no console) ++++ Função de login(documentacao)
import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyA9jbyGzfA2EUnXXzw3ug-GOCoPg8iVmBI",
  authDomain: "mais-sol.firebaseapp.com",
  projectId: "mais-sol",
  storageBucket: "mais-sol.appspot.com",
  messagingSenderId: "235631388184",
  appId: "1:235631388184:web:0b28b511711f2867b1856d",
  measurementId: "G-E2PJ1RN193"
};

export const app = initializeApp(firebaseConfig);
