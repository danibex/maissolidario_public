# Cursos
## Fatecie
~~~ sql
INSERT INTO cursos (nome, valor_cheio, porcentagem_desconto, valor_com_desconto, economia_total, salario_medio, cidade, modalidade, sobre, localizacao, conheca, duracao, nivel, turno, urlImagem, parceiro_id)
VALUES
('ARQUITETURA E URBANISMO', 1500.00, 10.00, 1350.00, 150.00, 3000.00, 'ALAGOINHAS', 'NOITE', 'Descrição do curso de Arquitetura e Urbanismo.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Arquitetura e Urbanismo.', '4 anos', 'Graduação', 'Noite', 'imagem_arquitetura.jpg', 8),
('CONTABILIDADE', 1200.00, 15.00, 1020.00, 180.00, 2500.00, 'ALAGOINHAS', 'MANHA E NOITE', 'Descrição do curso de Contabilidade.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Contabilidade.', '3 anos', 'Graduação', 'Manhã e Noite', 'imagem_contabilidade.jpg', 8),
('DIREITO NOTURNO', 1800.00, 20.00, 1440.00, 360.00, 3500.00, 'ALAGOINHAS', 'NOITE', 'Descrição do curso de Direito.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Direito.', '5 anos', 'Graduação', 'Noite', 'imagem_direito.jpg', 8),
('DIRETO MATUTINO', 2000.00, 25.00, 1500.00, 500.00, 3800.00, 'ALAGOINHAS', 'MANHÃ', 'Descrição do curso de Direito.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Direito.', '5 anos', 'Graduação', 'Manhã', 'imagem_direito.jpg', 8),
('ENGENHARIA ELETRICA', 1600.00, 12.00, 1408.00, 192.00, 3200.00, 'ALAGOINHAS', 'NOITE', 'Descrição do curso de Engenharia Elétrica.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Engenharia Elétrica.', '4 anos', 'Graduação', 'Noite', 'imagem_engenharia.jpg', 8),
('ENFERMAGEM', 1400.00, 8.00, 1288.00, 112.00, 2800.00, 'ALAGOINHAS', 'MANHÃ', 'Descrição do curso de Enfermagem.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Enfermagem.', '4 anos', 'Graduação', 'Manhã', 'imagem_enfermagem.jpg', 8),
('ENFERMAGEM', 1400.00, 8.00, 1288.00, 112.00, 2800.00, 'ALAGOINHAS', 'NOITE', 'Descrição do curso de Enfermagem.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Enfermagem.', '4 anos', 'Graduação', 'Noite', 'imagem_enfermagem.jpg', 8),
('ENGENHARIA CIVIL', 1700.00, 18.00, 1394.00, 306.00, 3400.00, 'ALAGOINHAS', 'NOITE', 'Descrição do curso de Engenharia Civil.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Engenharia Civil.', '5 anos', 'Graduação', 'Noite', 'imagem_engenharia.jpg', 8),
('ENGENHARIA DE PRODUÇÃO', 1800.00, 20.00, 1440.00, 360.00, 3600.00, 'ALAGOINHAS', 'NOITE', 'Descrição do curso de Engenharia de Produção.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Engenharia de Produção.', '5 anos', 'Graduação', 'Noite', 'imagem_engenharia.jpg', 8),
('ENGENHARIA MECANICA', 1750.00, 18.00, 1435.00, 315.00, 3500.00, 'ALAGOINHAS', 'NOITE', 'Descrição do curso de Engenharia Mecânica.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Engenharia Mecânica.', '5 anos', 'Graduação', 'Noite', 'imagem_engenharia.jpg', 8),
('ODONTOLOGIA', 2500.00, 30.00, 1750.00, 750.00, 4500.00, 'ALAGOINHAS', 'INTEGRAL', 'Descrição do curso de Odontologia.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Odontologia.', '5 anos', 'Graduação', 'Integral', 'imagem_odontologia.jpg', 8),
('PETROLEO E GÁS', 1400.00, 8.00, 1288.00, 112.00, 2800.00, 'ALAGOINHAS', 'MANHA E NOITE', 'Descrição do curso de Petróleo e Gás.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Petróleo e Gás.', '3 anos', 'Graduação', 'Manhã e Noite', 'imagem_petroleo.jpg', 8),
('REDES DE COMPUTADORES', 1300.00, 5.00, 1235.00, 65.00, 2700.00, 'ALAGOINHAS', 'MANHA E NOITE', 'Descrição do curso de Redes de Computadores.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Redes de Computadores.', '3 anos', 'Graduação', 'Manhã e Noite', 'imagem_redes.jpg', 8),
('SEGURANÇA DO TRABALHO', 1200.00, 15.00, 1020.00, 180.00, 2500.00, 'ALAGOINHAS', 'MANHA E NOITE', 'Descrição do curso de Segurança do Trabalho.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Segurança do Trabalho.', '3 anos', 'Graduação', 'Manhã e Noite', 'imagem_seguranca.jpg', 8),
('Edificações', 1100.00, 10.00, 990.00, 110.00, 2300.00, 'SALVADOR', 'NOITE', 'Descrição do curso de Edificações.', 'SALVADOR - BA', 'Conheça mais sobre o curso de Edificações.', '2 anos', 'Técnico', 'Noite', 'imagem_edificacoes.jpg', 8),
('Análises Clínicas', 1300.00, 15.00, 1105.00, 195.00, 2700.00, 'SALVADOR', 'NOITE', 'Descrição do curso de Análises Clínicas.', 'SALVADOR - BA', 'Conheça mais sobre o curso de Análises Clínicas.', '2 anos', 'Técnico', 'Noite', 'imagem_analises.jpg', 8),
('Eletroeletrônica', 1200.00, 10.00, 1080.00, 120.00, 2500.00, 'SALVADOR', 'NOITE', 'Descrição do curso de Eletroeletrônica.', 'SALVADOR - BA', 'Conheça mais sobre o curso de Eletroeletrônica.', '2 anos', 'Técnico', 'Noite', 'imagem_eletroeletronica.jpg', 8),
('Eletromecânica', 1200.00, 10.00, 1080.00, 120.00, 2500.00, 'ALAGOINHAS', 'NOITE', 'Descrição do curso de Eletromecânica.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Eletromecânica.', '2 anos', 'Técnico', 'Noite', 'imagem_eletromecanica.jpg', 8),
('Automação', 1300.00, 12.00, 1144.00, 156.00, 2700.00, 'ALAGOINHAS', 'NOITE', 'Descrição do curso de Automação.', 'ALAGOINHAS - BA', 'Conheça mais sobre o curso de Automação.', '2 anos', 'Técnico', 'Noite', 'imagem_automacao.jpg', 8);
~~~

## Universo
~~~ sql
INSERT INTO cursos (nome, cidade, turno, nivel, duracao, parceiro_id, urlImagem)
VALUES
  ('Direito', 'Salvador', 'Noite', 'Graduação', '5 anos', 14, '/img/Cursos/administracao.png'),
  ('Enfermagem', 'Salvador', 'Noite', 'Graduação', '4 anos', 14, '/img/Cursos/administracao.png'),
  ('Odontologia', 'Salvador', 'Integral', 'Graduação', '5 anos', 14, '/img/Cursos/administracao.png'),
  ('Fisioterapia', 'Salvador', 'Noite', 'Graduação', '4 anos', 14, '/img/Cursos/administracao.png'),
  ('Psicologia', 'Salvador', 'Noite', 'Graduação', '5 anos', 14, '/img/Cursos/administracao.png');
~~~

## Santíssimo Sacramento
~~~ sql
INSERT INTO cursos (nome, cidade, turno, parceiro_id)
VALUES
  ('Administração', 'Alagoinhas', NULL, 9),
  ('Ciências Contábeis', 'Alagoinhas', NULL, 9),
  ('Direito', 'Alagoinhas', 'Manhã', 9),
  ('Direito', 'Alagoinhas', 'Noite', 9),
  ('Enfermagem', 'Alagoinhas', 'Manhã', 9),
  ('Enfermagem', 'Alagoinhas', 'Noite', 9),
  ('Eng. De Produção', 'Alagoinhas', 'Manhã', 9),
  ('Eng. De Produção', 'Alagoinhas', 'Noite', 9),
  ('Pedagogia', 'Alagoinhas', 'Noite', 9),
  ('Psicologia', 'Alagoinhas', 'Manhã', 9),
  ('Psicologia', 'Alagoinhas', 'Noite', 9),
  ('Serviço Social', 'Alagoinhas', 'Noite', 9),
  ('Sistema de Informação', 'Alagoinhas', 'Noite', 9);
~~~

## Atualiza
~~~ sql
INSERT INTO cursos (nome, cidade, turno, parceiro_id)
VALUES ('Enfermagem', 'Salvador', 'Manhã', 1);
~~~

## UNIESPG
~~~ sql
INSERT INTO cursos (nome, cidade, modalidade, duracao, turno, parceiro_id)
VALUES
  ('ADMINISTRAÇÃO', NULL, 'EAD', '6 meses', NULL, 11),
  ('CONTABILIDADE', NULL, 'EAD', '6 meses', NULL, 11),
  ('AGRONEGÓCIOS', NULL, 'EAD', '6 meses', NULL, 11),
  ('EDIFICAÇÕES', NULL, 'EAD', '6 meses', NULL, 11),
  ('MARKETING', NULL, 'EAD', '6 meses', NULL, 11),
  ('MEIO AMBIENTE', NULL, 'EAD', '6 meses', NULL, 11),
  ('TÉCNICO EM SECRETARIADO', NULL, 'EAD', '6 meses', NULL, 11),
  ('SEGURANÇA DO TRABALHO', NULL, 'EAD', '6 meses', NULL, 11),
  ('TRANSAÇÕES IMOBILIÁRIAS', NULL, 'EAD', '6 meses', NULL, 11);

~~~

## Colégio Acadêmico
~~~ sql
INSERT INTO cursos (nome, cidade, turno, parceiro_id)
VALUES ('E. Infantil - G03 ao G05', 'LAURO DE FREITAS - BA', 'MANHÃ', 4),
       ('1ª ao 5º ano Ens. Fud. I', 'LAURO DE FREITAS - BA', 'MANHÃ', 4),
       ('6º ano Ens. Fud. II', 'LAURO DE FREITAS - BA', 'MANHÃ', 4),
       ('7 ao 9º ano Ens. Fud. II', 'LAURO DE FREITAS - BA', 'MANHÃ', 4),
       ('1º e 2º Série Ens. Médio', 'LAURO DE FREITAS - BA', 'MANHÃ', 4),
       ('3º Série Ens. Médio', 'LAURO DE FREITAS - BA', 'MANHÃ', 4),
       ('E. Infantil - G03 ao G05', 'LAURO DE FREITAS - BA', 'TARDE', 4),
       ('1ª ao 5º ano Ens. Fud. I', 'LAURO DE FREITAS - BA', 'TARDE', 4),
       ('6º ano Ens. Fud. II', 'LAURO DE FREITAS - BA', 'TARDE', 4),
       ('7 ao 9º ano Ens. Fud. II', 'LAURO DE FREITAS - BA', 'TARDE', 4),
       ('1º e 2º Série Ens. Médio', 'LAURO DE FREITAS - BA', 'TARDE', 4),
       ('3º Série Ens. Médio', 'LAURO DE FREITAS - BA', 'TARDE', 4),
       ('1ª ao 5º ano Ens. Fud. I', 'SALVADOR - BA', 'MANHÃ', 4),
       ('6º ano Ens. Fud. II', 'SALVADOR - BA', 'MANHÃ', 4),
       ('7 ao 9º ano Ens. Fud. II', 'SALVADOR - BA', 'MANHÃ', 4),
       ('1º e 2º Série Ens. Médio', 'SALVADOR - BA', 'MANHÃ', 4),
       ('3º Série Ens. Médio', 'SALVADOR - BA', 'MANHÃ', 4),
       ('1ª ao 5º ano Ens. Fud. I', 'SALVADOR - BA', 'TARDE', 4),
       ('6º ano Ens. Fud. II', 'SALVADOR - BA', 'TARDE', 4),
       ('7 ao 9º ano Ens. Fud. II', 'SALVADOR - BA', 'TARDE', 4),
       ('1º e 2º Série Ens. Médio', 'SALVADOR - BA', 'MANHÃ', 4),
       ('3º Série Ens. Médio', 'SALVADOR - BA', 'TARDE', 4);

~~~