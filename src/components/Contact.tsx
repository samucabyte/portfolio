export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white text-center">
            <h2 className="text-3xl font-bold text-gray-900">Contato</h2>
            <p className="mt-4 text-gray-600">Me encontre no GitHub ou envie um e-mail 📩</p>
            <div className="mt-6 flex justify-center gap-6">
                <a href="https://github.com/samucabyte" target="_blank" className="text-blue-600 hover:underline">
                    GitHub
                </a>
                <a href="mailto:seuemail@gmail.com" className="text-blue-600 hover:underline">
                    E-mail
                </a>
                <a href="https://linkedin.com/in/seulinkedin" target="_blank" className="text-blue-600 hover:underline">
                    LinkedIn
                </a>
            </div>
        </section>
    )
}
