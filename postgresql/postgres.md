# Principais Ubuntu
~~~ cmd
sudo -u postgres psql -d mais_solidario
ou
psql -U nome_de_usuario -d nome_do_banco
~~~
~~~ sql
--Criar usuário
CREATE USER nome_de_usuario WITH PASSWORD 'senha';
-- Garantir privilégios
ALTER USER nome_de_usuario WITH SUPERUSER;
~~~

~~~ sql
-- Criando Banco
CREATE DATABASE mais_solidario;
-- Acessar
psql -d mais_solidario
~~~

~~~ sql
-- Criar tabela parceiros
CREATE TABLE parceiros (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  urlImagem VARCHAR(100)
);


-- Criar tabela cursos
CREATE TABLE cursos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  valor_cheio DECIMAL(10, 2),
  porcentagem_desconto DECIMAL(5, 2),
  valor_com_desconto DECIMAL(10, 2),
  economia_total DECIMAL(10, 2),
  salario_medio DECIMAL(10, 2),
  cidade VARCHAR(100),
  modalidade VARCHAR(50),
  sobre TEXT,
  localizacao VARCHAR(200),
  conheca TEXT,
  duracao VARCHAR(50),
  nivel VARCHAR(50),
  turno VARCHAR(50),
  urlImagem VARCHAR(100),
  parceiro_id INTEGER REFERENCES parceiros (id)
);

-- Criar tabela usuarios
CREATE TABLE usuarios (
    id VARCHAR(100), -- Asaas 
    -- Google
    displayName VARCHAR(100),
    email VARCHAR(100),
    uid VARCHAR(100),
    -- Asaas (compra)
    address VARCHAR(200),
    addressNumber VARCHAR(10),
    cpfCnpj VARCHAR(20),
    mobilePhone VARCHAR(20),
    name VARCHAR(100),
    postalCode VARCHAR(20),
    province VARCHAR(50),
    state VARCHAR(50),
    -- Mais Solidário
    curso VARCHAR(100)
);

-- Criar tabela compra
CREATE TABLE compra (
  id SERIAL PRIMARY KEY,
  customer VARCHAR(100),
  billingType VARCHAR(20),
  dueDate VARCHAR(15),
  value DECIMAL(10, 2),
  description VARCHAR(100),
  usuario_id VARCHAR(100) REFERENCES usuarios(id)
);
~~~
~~~ sql
-- JOIN CURSOS / PARCEIROS
SELECT c.id, c.nome, p.nome AS parceiro_id
FROM cursos AS c
JOIN parceiros AS p ON c.parceiro_id = p.id;

~~~

~~~ json
{
  "customer": "{CUSTOMER_ID}",
  "billingType": "BOLETO",
  "dueDate": "2017-06-10",
  "value": 100,
  "description": "Pedido 056984",
  "externalReference": "056984",
  "discount": {
    "value": 10,
    "dueDateLimitDays": 0
  },
  "fine": {
    "value": 1
  },
  "interest": {
    "value": 2
  },
  "postalService": false
}
~~~

~~~ sql
-- Todos os valores no arquivo valoresPareiros.md ou valoresCursos.md
-- Inserir valores na tabela parceiros
INSERT INTO parceiros (
  nome,
  urlImagem
) VALUES 
('Universo', '/images/Parceiros/Universo.png');


-- Inserir valores na tabela cursos
INSERT INTO cursos (
  nome, 
  valor_cheio, 
  porcentagem_desconto, 
  valor_com_desconto, 
  economia_total, 
  salario_medio, 
  cidade, 
  modalidade, 
  sobre, 
  localizacao, 
  conheca, 
  duracao, 
  nivel, 
  turno, 
  urlImagem, 
  parceiro_id
) 
VALUES (
  'Nome do Curso', 
  100.00, 
  20.00, 
  80.00, 
  20.00, 
  5000.00, 
  'Cidade', 
  'Presencial', 
  'Sobre o curso', 
  'Localização', 
  'Conheça mais', 
  '3 meses', 
  'Intermediário', 
  'Noturno', 
  'url_imagem.jpg', 
  1
);
~~~

## Atualizar valor na tabela
~~~ sql
UPDATE cursos
SET urlImagem = '/images/direito.png'
WHERE nome = 'Curso qualquer';

UPDATE cursos
SET urlImagem = '/images/Cursos/direito.png'
WHERE id>= 1;
~~~




## Compra schema
~~~ json
{
  "customer": "{CUSTOMER_ID}",
  "billingType": "BOLETO",
  "dueDate": "2017-06-10",
  "value": 100,
  "description": "Pedido 056984",
  "externalReference": "056984",
  "discount": {
    "value": 10,
    "dueDateLimitDays": 0
  },
  "fine": {
    "value": 1
  },
  "interest": {
    "value": 2
  },
  "postalService": false
}
~~~