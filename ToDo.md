> Atualizar filtros seguintes

> armazenar valores do filtro em um estado e passar como parametro atraves da url para uma requisição no backend do tipo GET








# DEFINIR INTERAÇÕES DO USUÁRIO COM A APLICAÇÃO PARA CRIAR FUNÇOES NO BACKEND

# Usuário:
## Google Auth:
	displayName
	email
	uid
## Asaas:
	address
	addressNumber
	cpfCnpj
	email
	id
	mobilePhone
	name
	postalCode
	province //bairro
	state //estado
## Mais Solidário
	curso
	
# Cobrança:
id cobrança (criada automaticamente)
id chave estrangeira (id cliente)(customer id)
billingType (string) // BOLETO, PIX, CREDIT_CARD
value (string) // Valor
dueDate (string) // Data de Vencimento
description (string) // nome do curso

# Curso
nome
valor cheio
porcentagem desconto
valor com desconto
economia total 
salario medio
parceiro
id
cidade
modalidade
sobre
localizacao
conheca
duracao
nivel
turno


# Entidades
* Parceiros
    * ID
    * Nome
* Bolsas
    * ID
    * Nome ou Curso
    * Parceiro
    * Cidado
    * Estado
    * Modalidade
    * Nível
    * Preço cheio
    * Porcentagem desconto
    * Valor com desconto
    * Duração
    * Sobre
    * Localização
    * Turno
* Usuários
    * ID externo
    * ID interno PostgreSQL
    * Nome Completo
    * Email
    * Telefone
    * Cidade
    * Estado
    * Rua
    * Bairro 
    * Numero casa
    * CPF
    * CEP
    * Curso (Quando Comprado)
    * Boletos
* Compra
    * ID
    * Usuário 
    * Bolsa
    * Data



# Refatorar
    1. mais procurados


# Backend

# Usuários
## GET
* /usuarios = criar
* /usuarios/[id] = recuperar
* /usuarios?nome=daniel&email=danielivam96@gmail = listar com filtro

## POST
* /usuarios/[id] = atualizar

## DELETE
* /usuarios/[id] = deletar

# Pagamentos
## POST
* /pagamentos
    * body (olhar documentação)





# (Done) Toggle Menu Responsive Mobile (pegar de ecommerceburguer) 
# (Done) Atualizar preço/porcentagem parceiros
# (Done)Função Map consumir dados ficticios principais cursos
# (Done)Swiper condicional Responsive Mobile Principais Cursos
# (Done)Swiper automático infinito parceiros

# (Done)Botão zap fixo
# (Done)Atualizar nome/imagem/desconto... principais cursos

# (Done)Criar banco de dados fictios para notícias
# (Done)Card Notícias fazer
# (Done)Card notícias Swiper automático infinito
# (Done)Botão para acessar blog através das notícias (embaixo no meio)
# (Done)Função map para rederizar notícias
# (Done)Depoimentos card com foto redonda e texto simples educamaisbrasil chatgpt
# (Done)Footer (pegar de site principal)