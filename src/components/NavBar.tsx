export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white fixed w-full top-0 shadow-md z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Samuel Dev</h1>
                <ul className="flex gap-6">
                    <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-400">Sobre</a></li>
                    <li><a href="#projects" className="hover:text-blue-400">Projetos</a></li>
                    <li><a href="#contact" className="hover:text-blue-400">Contato</a></li>
                </ul>
            </div>
        </nav>
    )
}
