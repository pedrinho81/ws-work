
# Ws Work
## Teste de front-end

#### Rodando localmente
### Clone o projeto
Clone o projeto

```bash
  $ git clone git@github.com:pedrinho81/ws-work.git
```


### Vá até o diretório onde o projeto se encontra e siga as seguintes instruções: 

1. Iniciar o database (json-server): 

```bash
  $ cd admin
  $ yarn install
  $ yarn db
```
2. Iniciar Admin Application
    Certifique-se de estar no repositório /admin e utilize os seguinte comandos:
```bash
  $ yarn install
  $ yarn dev
```
Após isto, a aplicação estará rodando localmente em: http://localhost:5173/ 

3. Iniciar Client Application
  Certifique-se de estar no repositório /client e utilize os seguintes comandos:
  
  ```bash
  $ yarn install
  $ yarn dev
```
Após isto, a aplicação estará rodando localmente em: http://localhost:3000/

Este README descreve a documentação do projeto de teste técnico de frontend React, que tem como objetivo desenvolver o teste técnico proposto. O projeto foi desenvolvido com base nas especificações fornecidas pela WS Work Sistemas.

## Descrição do Projeto:
A aplicação desenvolvida tem a seguinte estrutura:

##Admin:
   - Página inicial: exibe o layout proposto no teste juntamente com os produtos previamente cadastrados no database local, sendo possível adicionar novos produtos, editá-los e excluílos..
## Funcionalidades
- CRUD dos produtos;
- Validação dos inputs (todos obrigatórios)
- Máscara de input e textos relacionados aos preços.
- Responsividade;

## Tecnologias usadas
- Vite
- React-query
- Typescript

##Client:
   - Página inicial: exibe o layout proposto no teste juntamente com os produtos previamente cadastrados no database local.
## Funcionalidades
- Validação e filtro dos dados recebidos
- Cada 'seção' será renderizada de acordo com a disponibilidade e/ou ordem dos produtos cadastrados no admin
- Responsividade;

## Tecnologias usadas
- Next.js
- Styled Components
- React-query
- Typescript

### Considerações Finais: 
O projeto foi entregue com sucesso, de acordo com as metas propostas. A abordagem "pura" foi aplicada, reduzindo o uso de libs para que eu pudesse me desafiar mais, utilizando o conhecimento técnico de forma sólida. Enfrentei desafios, adquiri aprendizado e estou orgulhoso do resultado alcançado.
