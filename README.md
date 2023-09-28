* [Título](#Título) <h1 align="center">Aplicação - uClimate (Front-End)</h1>

* [Status do Projeto](#Status-do-Projeto)

<p align="center">
<img src="https://img.shields.io/badge/Status-Em%20desenvolvimento-green">
</p>
<br>

* [Ferramentas utilizadas](#Ferramentas-utilizadas)

 `React.js: para componentização e organização das telas.`

 `Styled-Component: biblioteca do React para estilizar os componentes em escopo fechado com o intuito de não vazar as classes e estilos para outros componentes.`
 
 `JavaScript ES6 (puro)`

 `API ViaCEP`: <a href="https://viacep.com.br/"> Acesso</a>
 
* [Introdução](#Introducao)

O presente projeto foi realizado tendo como objetivo o desenvolvimento de uma aplicação que permita ao usuário consultar um número de CEP e lhe retorne as principais informações do CEP inserido.

* [Descrição do projeto](#Descriçao-do-projeto)

<p>A aplicação foi projetada visando simular um site institucional da empresa Correios a fim de contextualizar a funcionalidade de consultar o CEP para agregar valor à experiência do usuário. 

Das páginas:

>A página 'Homepage' foi idealizada para ser propositalmente isenta de informações e interações dinâmicas com o usuário, com exceção do título da empresa que serve como link para a seção própria de consultar CEP.

>A página 'Consulta CEP', foco central deste projeto, emprega a API ViaCEP para retornar ao usuário a localidade, bairro, rua, complemento e UF. No JavaScript, foi implementada a máscara para o input, bem como a validação do número inserido para informar ao usuáio se o mesmo digitou uma entrada diferente de 8 números. Foi possivel fazer isso pelo fato da API ViaCEP retornar um .json entitulado 'erro' e o mesmo foi utilizado para tratamento de erros. Em alguns casos, a API não conseguirá retornar valor para a propriedade 'Complemento' e, quando isso acontecer, o site informará "Complemento não informado".

>A página 'Comemoração' foi idealizada como agradecimento e congratulações do aniversário de 25 anos da empresa, com um vídeo para o usuário e uma carta aos colaboradores.

>A página 'Sobre' foi idealizada para valorizar as conquistas alcançadas pela empresa ao longo dos 25 anos de prestatividade, bem como reforçar o valor de seu serviço aos clientes.

A organização do código buscou empregar boas práticas, como a identificação de classes e suas respectivas classes filhas ser feita com o uso de __ no CSS. Quanto aos atributos das classes, os mesmos foram ordenados em ordem alfabética para facilitar a manutenção futura. No JavaScript, foram empregados separadores de regiões do código utilizando //#region para delimitar os códigos correlacionados.

</p>

* [Desenvolvedor](#Desenvolvedor)
<h4>Eike Hirsch ✒️ LinkedIn: https://www.linkedin.com/in/eike-hirsch-b311541a5/</h4>
