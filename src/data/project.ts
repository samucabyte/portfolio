type Data = {
    title: string,
    description: string,
    stack: string[],
    github: string
}
export const projects: Data[] = [
    {
        title: "EcoGestor Back-End",
        description: "API REST de gestão financeira — receitas, despesas, roles, endpoints seguros.",
        stack: ["PHP", "MVC", "API"],
        github: "https://github.com/samucabyte/EcoGestor-backAnd"
    },
    {
        title: "EcoGestor Front-End",
        description: "Interface em TypeScript que consome a API de EcoGestor-backAnd.",
        stack: ["TypeScript", "React (se for) ou outra lib", "Fetch / Axios"],
        github: "https://github.com/samucabyte/EcoGestor-front-end"
    },
    {
        title: "API Blog",
        description: "API para sistema de blog com CRUD de posts e comentários.",
        stack: ["PHP", "Blade ou PHP puro"],
        github: "https://github.com/samucabyte/api-blog-"
    },
    {
        title: "Estrutura MVC",
        description: "Projeto exemplo de estrutura MVC em PHP para organização do código.",
        stack: ["PHP", "MVC"],
        github: "https://github.com/samucabyte/estrutura-MVC"
    },
    {
        title: "Padaria",
        description: "Projeto “padaria” com Blade como template engine",
        stack: ["PHP", "Blade", "Templates"],
        github: "https://github.com/samucabyte/padaria"
    }
]
