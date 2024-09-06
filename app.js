function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Convertemos para minúsculo para uma comparação mais precisa

    if (campoPesquisa === "") {
        section.innerHTML = "<p>Nenhum resultado foi encontrado para sua pesquisa, querida.</p>";
        return;
    }

    let resultados = "";

    for (let dado of dados) {
        // Condição para verificar se o termo de pesquisa está presente no título ou na descrição
        if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Marca que uso</a>
                </div>
            `;
        }
    }

    // Verifica se foram encontrados resultados antes de atualizar o HTML
    if (resultados === "") {
        section.innerHTML = "<p>Nenhum resultado encontrado para algo sem relacionamento com o site, querida.</p>";
    } else {
        section.innerHTML = resultados;
    }
}