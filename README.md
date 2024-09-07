# Livros de gestão de projetos
## Introdução :page_facing_up:
Esse projeto foi desenvolvido durante a imersão 'Dev com o Google Gemini' organizado pelas empresas Alura e Google, com o intuito de aplicar conhecimentos relacionados ao desenvolvimento web apoiado por inteligência artificial, o que resultou em um programa capaz de pesquisar informações em uma base de dados, que nesse caso é um conjunto de livros relacionados a gestão de projetos.

## Descrição :notebook:
A principal funcionalidade do projeto é permitir que o usuário encontre livros específicos dentro de uma base de dados, através da inserção de palavras-chave ou outras informações relevantes em um campo de pesquisa.

Do ponto de vista técnico, a aplicação é estruturada em quatro arquivos:

* index.html: Serve como a base da página web, definindo a estrutura HTML e a interação com os outros arquivos.
* style.css: É responsável por estilizar visualmente a página, garantindo uma interface atraente e fácil de usar.
* app.js: Contém a lógica principal da aplicação, realizando as operações de busca na base de dados e atualizando a interface com os resultados encontrados.
* dados.js: Armazena a base de dados de livros, que é consultada pelo arquivo app.js durante as buscas.
  
A integração entre esses arquivos é fundamental para o funcionamento da aplicação. O arquivo index.html chama as funções definidas em app.js quando o usuário realiza uma busca, e este, por sua vez, acessa os dados em dados.js para encontrar os livros correspondentes. A interface é então atualizada para exibir os resultados da busca.

## Código :computer:
### HTML a base para o projeto
O código HTML apresentado define uma página web simples com as seguintes seções:

* Cabeçalho (head): Contém metadados sobre a página, como o conjunto de caracteres (UTF-8), a configuração da viewport para adaptação a diferentes dispositivos, o link para o arquivo CSS (styles.css) responsável pelo estilo visual da página e o título da página ("Livros Gestão").
* Corpo (body): Contém o conteúdo visível da página, organizado em:
Cabeçalho (header): Contém o título principal da página.
Seção principal (main): Contém a seção de pesquisa, com um campo de entrada para o usuário digitar o termo de busca, botões para limpar e realizar a pesquisa, e uma seção para exibir os resultados da pesquisa.
Rodapé (footer): Contém informações de copyright e um e-mail de contato.

**Funcionalidades:**
* Pesquisa: A página possui um campo de pesquisa que permite ao usuário buscar por livros de gestão. Ao clicar no botão "Pesquisar", uma função JavaScript (pesquisar()) é chamada, presumivelmente para filtrar os dados e exibir os resultados na seção "resultados-pesquisa".
* Limpar pesquisa: O botão "Limpar" chama uma função JavaScript (limpar()) para limpar o campo de pesquisa e, possivelmente, os resultados da pesquisa.
* Carregamento de scripts: A página carrega dois arquivos JavaScript:
dados.js: Provavelmente contém um array ou objeto JavaScript com os dados dos livros, que serão usados para a pesquisa.
app.js: Contém a lógica principal da aplicação, incluindo as funções pesquisar() e limpar().

**Elementos HTML Relevantes:**
* section: Define seções distintas dentro da página (pesquisa e resultados).
* input: Cria um campo de entrada para o usuário digitar o termo de pesquisa.
* button: Cria botões para interagir com a página.
* div: Define uma divisão genérica para agrupar outros elementos.
* id: Atributo usado para identificar elementos HTML de forma única, permitindo manipulá-los com JavaScript.
* class: Atributo usado para aplicar estilos CSS a grupos de elementos.
* onclick: Atributo que associa um evento de clique a uma função JavaScript.
  
### Estilização com o CSS
Já o código CSS apresentado tem como objetivo estilizar uma página web, definindo a aparência visual de todos os elementos HTML, desde a fonte e cores até o layout e o posicionamento dos elementos na página.

**Estrutura e Organização:**

O código está organizado em seções que correspondem aos diferentes elementos HTML da página, facilitando a leitura e a manutenção. Cada seção contém um conjunto de regras CSS que definem as propriedades visuais para aquele elemento.

**Principais Estilos:**

* Tipografia: Define a fonte padrão como "Chakra Petch" e customiza o tamanho, cor e espaçamento das fontes para os títulos, textos e botões.
* Layout: Utiliza o Flexbox para criar um layout responsivo e centralizado, adaptando-se a diferentes tamanhos de tela. Define margens, paddings e espaçamentos entre os elementos para criar uma aparência organizada.
* Cores: Utiliza uma paleta de cores consistente em toda a página, definindo as cores de fundo, texto e elementos interativos.
* Background: Define uma imagem de fundo para o corpo da página e configura as propriedades de repetição e tamanho da imagem.
* Botões: Cria botões personalizados com bordas arredondadas, cores e efeitos de hover.
* Formulários: Estiliza os inputs e botões dos formulários, definindo largura, altura, bordas e espaçamentos.
* Caixa de resultados: Cria uma caixa com rolagem vertical para exibir os resultados da pesquisa, com estilo personalizado para os itens da lista.
* Responsividade: Utiliza as media queries @media para ajustar o layout e os estilos da página para diferentes tamanhos de tela, garantindo uma boa experiência do usuário em dispositivos móveis e tablets.
  
**Destaques:**

* Uso de Flexbox: O Flexbox é utilizado extensivamente para criar layouts flexíveis e responsivos.
Personalização de fontes: A fonte "Chakra Petch" é personalizada para criar uma identidade visual única para a página.
* Efeito hover: Os botões possuem efeitos de hover para indicar interatividade.
* Responsividade: O código é otimizado para diferentes tamanhos de tela, garantindo uma boa experiência do usuário em dispositivos móveis.
* Semântica: Os nomes das classes e IDs são escolhidos de forma a refletir a função dos elementos, facilitando a compreensão do código.


### Lógica do app.js
O código JavaScript apresentado tem como objetivo principal implementar a funcionalidade de pesquisa em uma página web, permitindo que o usuário encontre livros de gestão de projetos com base em termos digitados em um campo de pesquisa. A busca é realizada em um conjunto de dados pré-definido armazenado em um array JavaScript, no arquivo dados.js.

**Funcionamento:**
1. Função pesquisar():

* Seleção de elementos: A função obtém referências aos elementos HTML do campo de pesquisa e da seção onde os resultados serão exibidos.
* Normalização: O termo de pesquisa digitado pelo usuário é convertido para letras minúsculas, a fim de realizar uma comparação case-insensitive com os dados.
* Iteração sobre os dados: A função percorre cada elemento do array dados, comparando o termo de pesquisa com o título, descrição, tags e autor de cada livro.
* Construção dos resultados: Se houver correspondência, a função constrói uma string de HTML com a estrutura de cada resultado, incluindo título, autor, descrição, imagem e link para mais informações. Essa string é concatenada à variável resultado.
* Exibição dos resultados: Ao final da iteração, a string resultado é atribuída ao conteúdo HTML da seção de resultados, atualizando a página com os livros encontrados.
* Mensagem de não encontrado: Caso nenhum resultado seja encontrado, uma mensagem informativa é exibida.

2. Função limpar():
* Limpeza do campo de pesquisa: O valor do campo de pesquisa é definido como uma string vazia, limpando o campo.
* Limpeza da seção de resultados: O conteúdo HTML da seção de resultados é definido como uma string vazia, removendo os resultados anteriores.
  
**Características Técnicas:**
* Manipulação do DOM: O código interage com o Document Object Model (DOM) para selecionar elementos HTML, modificar seus conteúdos e adicionar novos elementos.
* Strings e concatenação: Utiliza strings para construir o HTML dos resultados da pesquisa, concatenando as diferentes partes da estrutura HTML.
* Condicionais: Emprega a estrutura condicional if para verificar se o termo de pesquisa está presente nos dados e para decidir se os resultados devem ser exibidos ou se uma mensagem de não encontrado deve ser mostrada.
* Laços: Utiliza o laço for...of para iterar sobre os elementos do array dados.
* Métodos de string: Utiliza os métodos toLowerCase(), includes() e indexOf() para manipular strings e realizar as comparações.
* Template literals: Emprega template literals para construir strings de HTML de forma mais legível e concisa.
  
**Considerações:**
* Eficiência: Para conjuntos de dados muito grandes, pode ser interessante explorar técnicas de otimização, como indexação dos dados ou algoritmos de busca mais eficientes.
* Acessibilidade: A estrutura HTML gerada pela função pesquisar() deve seguir as diretrizes de acessibilidade, garantindo que a aplicação seja utilizável por pessoas com deficiência.
* Experiência do usuário: A interface do usuário poderia ser aprimorada com recursos como destaque dos termos pesquisados nos resultados, paginação para resultados extensos e filtros adicionais.
* Escalabilidade: Se a aplicação for expandida para incluir mais funcionalidades ou um conjunto de dados maior, o código pode precisar ser refatorado para melhor organização e manutenção.
## Site :mag_right:
Esse projeto pode ser melhor visualizado pelo seguinte link: https://projeto-livros-de-gestao-de-projetos.vercel.app/
