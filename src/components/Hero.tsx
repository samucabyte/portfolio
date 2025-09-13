export default function Hero() {
    return (
        <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Olá, eu sou Samuel 👋</h1>
            <p className="mt-4 text-lg text-gray-600">Desenvolvedor Fullstack focado em Back-end</p>
            <a href="#projects" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                Ver Projetos
            </a>
        </section>
    )
}
