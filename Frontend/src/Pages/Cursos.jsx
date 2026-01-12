import '../index.css'
import '../App.css'
import papel from '../assets/18647.jpg'
import tarefas from '../assets/gestaotarefas.webp'





import React, { useState } from 'react'
import { Plus, ArrowRight, LayoutGrid, Monitor, BarChart, Landmark } from 'lucide-react'

const ItemCard = ({ title, category, price, image }) => (
    <div className={`relative w-full min-h-28 overflow-x-hidden p-4 rounded-[2.5rem] backdrop-blur-md shadow-lg flex flex-col justify-between h-48 transition-transform hover:scale-95 cursor-pointer border border-white/20`}>
        <div className="flex justify-between items-start  z-10">
            <span className="text-[10px] font-bold uppercase opacity-70 tracking-wider text-white">{category}</span>
            <div className="w-5 h-5 rounded-full border border-black/10 flex items-center justify-center">
                <div className="w-2 h-2 bg-black/20 rounded-full"></div>
            </div>
        </div>
        <div className="fixed inset-0 z-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative right-8 z-10 p-6 font-sans pt-12">
            <h3 className="text-sm font-bold text-pink-50 leading-tight">{title}</h3>
            <p className="text-xs font-bold text-pink-50">{price}kz</p>
        </div>
    </div>
);

function Cursos() {
    // 1. Estado para controlar a categoria selecionada
    const [categoriaAtiva, setCategoriaAtiva] = useState('Todos Polos');

    // 2. Lista de Categorias com Ícones
    const categorias = [
        { id: 1, nome: 'Todos Polos', icon: <LayoutGrid size={18} /> },
        { id: 2, nome: 'Técnico Polo ||', icon: <Monitor size={18} /> },
        { id: 3, nome: 'Gestão Polo |', icon: <BarChart size={18} /> },
        { id: 4, nome: 'Administração Polo |', icon: <Landmark size={18} /> },
    ];

    // 3. Base de dados dos Cursos
    const todosCursos = [
        { id: 1, titulo: "Informática de Gestão", cat: "Técnico Polo ||", preco: "15.000", img: tarefas },
        { id: 2, titulo: "Contabilidade", cat: "Administração Polo |", preco: "12.500", img: tarefas },
        { id: 3, titulo: "Recursos Humanos", cat: "Gestão Polo |", preco: "12.500", img: tarefas },
        { id: 4, titulo: "Eletricidade", cat: "Técnico Polo ||", preco: "14.000", img: tarefas },
    ];

    // 4. Lógica de Filtragem
    const cursosFiltrados = categoriaAtiva === 'Todos Polos'
        ? todosCursos
        : todosCursos.filter(curso => curso.cat === categoriaAtiva);

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden pt-35 ">
            {/* IMAGEM DE FUNDO FIXA */}
            <div className="fixed inset-0 z-0">
                <img className="w-full h-full object-cover" src={papel} alt="Fundo" />
                <div className="absolute inset-0 bg-[#0f0f0f]/50 backdrop-blur-lg "></div>
            </div>

            {/* CONTEÚDO */}
            <div className="relative z-10 p-6 font-sans pt-12  ">



                {/* CARROSSEL DE CATEGORIAS (O NOVO DESIGN) */}
                <div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar pl-2">
                    {categorias.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setCategoriaAtiva(cat.nome)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 font-bold shadow-lg border
                                ${categoriaAtiva === cat.nome
                                    ? 'bg-pink-800 text-white border-pink-500 scale-105'
                                    : 'bg-white/10 backdrop-blur-md text-white/70 border-white/10 hover:bg-white/20'}`}
                        >
                            <span>{cat.icon}</span>
                            <span className="text-sm uppercase tracking-wider font-mono">{cat.nome}</span>
                        </button>
                    ))}
                </div>

                {/* GRID DE CARDS FILTRADOS */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-32">
                    {cursosFiltrados.length > 0 ? (
                        cursosFiltrados.map((curso) => (
                            <ItemCard
                                key={curso.id}
                                title={curso.titulo}
                                category={curso.cat}
                                price={curso.preco}
                                image={curso.img}
                                bgColor={curso.cor}
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-white/50 py-10">Nenhum curso nesta categoria.</p>
                    )}
                </div>

                {/* BARRA FLUTUANTE INFERIOR */}
                <div className="fixed bottom-10 left-6 right-6 bg-white/10 backdrop-blur-2xl h-16 rounded-[2.5rem] shadow-2xl flex items-center px-2 border border-white/20 z-50 transform active:scale-90 transition-transform cursor-pointer">
                    <div className="bg-pink-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                        <Plus size={24} className="text-white" />
                    </div>
                    <span className="flex-1 text-center font-bold text-white text-sm uppercase tracking-widest italic">
                        Inscrever-me
                    </span>
                    <div className="w-10 flex justify-center text-white">
                        <ArrowRight size={18} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cursos