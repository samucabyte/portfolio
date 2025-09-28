// Nome de usuário do GitHub
const username = "samucabyte";

// Seleciona o container onde os projetos vão aparecer
const projectList = document.getElementById("project-list");

// Função para buscar repositórios do GitHub
async function fetchProjects() {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated`
        );
        const repos = await response.json();

        // Filtra projetos que você não quer exibir (se precisar)
        const filteredRepos = repos.filter(
            (repo) => !repo.fork // remove forks
        );

        // Mostra apenas os 6 mais recentes (pode mudar)
        filteredRepos.slice(0, 6).forEach((repo) => {
            const div = document.createElement("div");
            div.classList.add("project");
            div.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Sem descrição disponível"}</p>
        <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
      `;
            projectList.appendChild(div);
        });
    } catch (error) {
        projectList.innerHTML = `<p>Erro ao carregar projetos.</p>`;
        console.error("Erro:", error);
    }
}

// Executa a função quando a página carregar
fetchProjects();
