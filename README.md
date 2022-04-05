# Projeto iniciado com CRA

Este projeto tem o intuito de organizar o estoque de produtos consumíveis como papel A4, canetas, lápis, tintas, etc.

## Front-End

Está sendo usado React como biblioteca de criação de interface, no método functional components. Ultilização da contextAPI para gerenciamento de estados na aplicação.

## Estilização

Para estilização foi usado styled-components, que é uma espécie de "css in js", themeProvider para padronização das cores.

## React Portals

Estou ultilizando o React Portals para renderização de loaders e modals da aplicação. O intuito de utilizar essa lib é não ter que ficar mudando toda a estrutura da aplicação devido a regras de css, mais especificamente o "position: absolute" que contém em cada um dos modals ou loaders. Então, cria-se uma nova div de rederização além da <div id="root" /> (que encontra-se no arquivo index.js da aplicação) no próprio componente como por exemplo <div id="loader-root" para ficar responsável apenas pela renderização daquele componente, sem interferir na estilização dos outros.

### Projeto ainda em andamento. 

