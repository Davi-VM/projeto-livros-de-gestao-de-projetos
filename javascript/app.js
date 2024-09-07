// Funções
function pesquisar(){
    // Seleciona a seção HTML com o ID "resultados-pesquisa" para inserir os resultados
    let section = document.getElementById("resultados-pesquisa");

    //Seleciona o campo HTML com o ID "campo-pesquisa" para a comparação
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Transformando o texto em letras minusculas
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa as strings com valor vazio para armazenar os resultados da pesquisa
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let autor = ""
  
    // Itera sobre cada dado no array 'dados'
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        autor = dado.autor.toLowerCase();

        // Compara o que foi digitado no campo pesquisa com os valores presentes em dados.js
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ||tags.includes(campoPesquisa) || autor.includes(campoPesquisa)){
            // Impreme um elemento em específico
            resultado += `
                            <div class="item-resultado">
                                <div class="imagem">
                                    <a href="${dado.link}" target="_blank"><img src="${dado.imagem}" alt=""></a>
                                </div>
                                <div>
                                    <h2>
                                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                                    </h2>
                                    <h3>
                                        <p>Autor: ${dado.autor}</p>
                                    </h3>
                                        <p class="descricao-meta">${dado.descricao}</p>
                                        <a href="${dado.link}" target="_blank">Mais informações</a>
                                </div>
                            </div>
                        `;
        }
    }

    // Se o resultado for vazio impreme a mensagem
    if(!resultado){
        resultado = `<p style="color: white;">Nada foi encontrado.</p>`;
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultado;
}

function limpar(){
    // Seleciona o campo HTML com o ID "campo-pesquisa" e o limpa
    let campoPesquisa = document.getElementById("campo-pesquisa").value = ""

    // Seleciona a seção HTML com o ID "resultados-pesquisa" e a limpa
    let section = document.getElementById("resultados-pesquisa")
    section.innerHTML = " "
}