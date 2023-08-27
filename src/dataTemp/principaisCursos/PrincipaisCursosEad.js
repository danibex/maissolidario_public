import Curso from "./PricipaisCursosConstrutor";
const pedagogia = require("@/assets/img/Cursos/pedagogia.png");
const administracao = require("@/assets/img/Cursos/administracao.png");
const logistica = require("@/assets/img/Cursos/logistica.png");
const assistenteSocial = require("@/assets/img/Cursos/assistenteSocial.png");
const gastronomia = require("@/assets/img/Cursos/gastronomia.png");
const marketing = require("@/assets/img/Cursos/marketing.png");  
export const PrincipaisCursosEad = [
  new Curso(1, "Pedagogia", 1223, 80, 763, 4537, pedagogia),
  new Curso(2, "Administração", 1223, 80, 763, 4537, administracao),
  new Curso(3, "Logística", 1223, 80, 763, 4537, logistica),
  new Curso(4, "Serviço Social", 1223, 80, 763, 4537, assistenteSocial),
  new Curso(5, "Gastronomia", 1223, 80, 763, 4537, gastronomia),
  new Curso(6, "Marketing", 1223, 80, 763, 4537, marketing)
];