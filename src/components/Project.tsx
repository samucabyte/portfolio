import { projects } from "@/data/project";

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-gray-900">Projetos</h2>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {projects.map((proj, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800">{proj.title}</h3>
                        <p className="mt-3 text-gray-600">{proj.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {proj.stack.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">{tech}</span>
                            ))}
                        </div>
                        <a href={proj.github} target="_blank" className="mt-4 inline-block text-blue-600 hover:underline">
                            Ver no GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
