![Curseduca](https://curseduca.com/application/images/logo-250px.png)

# Teste de Dev FrontEnd

## 📚 Introdução
Este é um repositório com projeto para o processo seletivo da Curseduca. Nele era necessário construir uma mini rede social com algumas ações pré-determinadas.

OBS: Ilustrações feitas por mim mesmo no Adobe Illustrato

## 🖨 Screenshots

![Login](https://user-images.githubusercontent.com/60680170/87716866-d79a1a80-c785-11ea-9c9f-40bc211350fa.PNG)

---

![Home](https://user-images.githubusercontent.com/60680170/87716929-f9939d00-c785-11ea-9eb8-ee4d8c7b6111.png)

---

![Adicionar Post](https://user-images.githubusercontent.com/60680170/87716892-e5e83680-c785-11ea-89d0-16fbe975464f.png)

## 🎸 Tecnologias utilizadas:

### - Linguagem: TypeScript

- React (Bibliteca para criação de interfaces)
    - React Router DOM (Biblioteca para gerenciamento de rotas no React)
    - React Draft WYSIWYG (Editor WYSIWYG para React utilizando DraftJS)
        - HTML to Draft/Draft to HTMl (Biblioteca para manipulação de tipos dentro do editor WYSIWYG)
    - React Icons (Biblioteca de ícones para React)
- Redux (Gerenciador de estados para aplicações JS/TS)
    - React Redux (Integração Redux com React) 
- Styled Components (Biblioteca para estilização em escopo local/global com JS/TS)
- Axios (Biblioteca para realização de chamadas HTTP)

## 💾 Começando

### Antes de prosseguir, certifique-se que possui o NodeJS e NPM/Yarn instalados em sua máquina

Primeiro passo para testar o projeto é clonando-o na máquina local com o seguinte comando: 

```
$ git clone https://github.com/RafaLopesMelo/Curseduca-Frontend-Test.git
```

Após isto, acesse a pasta "backend", instale todas as dependências e inicie o servidor na porta 3333 com os comandos:

```
$ yarn install
$ yarn serve
// ou
$ npm install
$ npm run serve
```

Depois adentre a pasta "frontend", instale as dependências e inicie o projeto React:

```
$ yarn install
$ yarn start
```

Note que é preferível rodar o projeto com Yarn por conta do arquivo yarn.lock, caso prefira utilizar npm, apague o yarn.lock e rode os comandos:

```
$ npm intall
$ npm run start
```

Tudo pronto para testar!

OBS: O E-mail e a senha possíveis para Login estão no Placeholder dos inputs 
