import '../index.css'

import React, { useState } from 'react'
import { Search, Award, Calendar, MoveRight, X, Bell, User, Lock, Mail, UserSearch } from 'lucide-react'
import { Link } from 'react-router-dom'



function PerfilSearch() {

    const [searchName, setSearchName] = useState('')
    const [selectedProfile, setSelectedProfile] = useState(null)
    const [showResults, setShowResults] = useState(false)



    // Dados de exemplo dos alunos
    const students = [
        {
            id: 1,
            name: 'João Silva',
            course: 'Informática de Gestão',
            turno: 'noite',
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
            calender: '10/03/2026',
            sale: 'pago',
            turma: 'infor3'


        },
        {
            id: 2,
            name: 'Maria Santos',
            course: 'Técnico de Saúde',
            turno: 'tarde',
            photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            calender: '10/03/2026',
            sale: 'pago',
            turma: 'infor5',
        },
        {
            id: 3,
            name: 'Pedro Costa',
            course: 'Contabilidade e Gestão',
            turno: 'tarde',
            photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
            calender: '10/03/2026',
            sale: 'pendente',
            turma: 'infor3',
        },
        {
            id: 4,
            name: 'Ana Ferreira',
            course: 'Enfermagem',
            turno: 'manha',
            photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
            calender: '10/03/2026',
            sale: 'pago',
            turma: 'infortec3',
        }
    ];

    // Filtrar alunos por nome
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchName.toLowerCase())
    )

    const handleSearch = () => {
        if (searchName.trim()) {
            setShowResults(true)
        }
    }

    const handleSelectProfile = (student) => {
        setSelectedProfile(student)
        setShowResults(false)
    }

    const handleCloseProfile = () => {
        setSelectedProfile(null)
        setSearchName('')
    }

    return (

        <>
            <div className="relative w-full min-h-screen overflow-x-hidden pt-30 bg-gradient-to-br from-yellow-400 to-yellow-600">




                <div className="relative z-900 flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-15">

                    <div className="w-full max-w-4xl pt-15">

                

                        {/* Profile Display - Só aparece quando um perfil é selecionado */}
                        {selectedProfile && (
                            <div className="fixed inset-0 h-full w-full  lg:w-full lg:h-full  flex items-center justify-center">

                                <div
                                    className="fixed inset-0 w-ful bg-black/50 backdrop-blur-sm"
                                    onClick={handleCloseProfile}
                                ></div>




                                {/* Close Button */}
                                <button
                                    onClick={handleCloseProfile}
                                    className="absolute -top-4 -right-4 z-50 w-14 h-14 bg-pink-800 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition"
                                >
                                    <X className="text-white" size={28} />
                                </button>

                                {/* Profile Card */}
                                <div className=" h-full bg-white w-[100vw] shadow-2xl relative lg:h-auto lg:w-[750px] lg:rounded-4xl overflow-hidden">

                                    {/* Top Section - Text */}
                                    <div className="bg-gradient-to-br from-pink-900 to-pink-800 px-8 py-12 text-center relative">
                                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-2">
                                            <span className="text-white font-bold font-mono">O FUTURO </span>
                                            <br />
                                            <span className="text-pink-700 font-bold font-mono">DO</span>
                                        </h1>
                                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono">
                                            AMANHA
                                        </h2>


                                        <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-black text-sm tracking-wider hover:scale-105 transition-transform shadow-lg">
                                            PERFIL DO ALUNO
                                        </button>
                                    </div>

                                    {/* Profile Image Section */}
                                    <div className="relative -mt-32 px-8 pb-8">
                                        <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72">
                                            {/* Profile Image Container */}
                                            <div className="w-full h-full rounded-full bg-gradient-to-b from-pink-900 to-pink-900 shadow-lg overflow-hidden  relative">
                                                <img
                                                    src={selectedProfile.photo}

                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/10"></div>
                                            </div>

                                            {/* Badge */}
                                            <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-pink-900 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                                                <Award className="text-white" size={28} />
                                            </div>
                                        </div>

                                        {/* User Info */}
                                        <div className="text-center mt-5">
                                            <h3 className="text-2xl font-bold font-mono text-pink-800">{selectedProfile.name}</h3>
                                            <p className=" font-semibold font-mono text-pink-800 mt-1 text-lg uppercase">{selectedProfile.course}</p>
                                            <p className="font-bold font-mono text-pink-800 text-2xl mt-2 uppercase">Turno:{selectedProfile.turno}</p>
                                            <p className="font-bold font-mono text-pink-800 text-2xl mt-2 uppercase">Turma:{selectedProfile.turma}</p>

                                        </div>

                                        {/* Stats Cards */}

                                        <div className="flex items-center justify-center flex-col gap-3 mt-1">
                                            <div className="bg-gradient-to-br from-pink-800 to-pink-500 rounded-full flex items-center justify-center gap-3 sm:gap-5 lg:gap-7 py-2 sm:py-3 lg:py-3 px-7 sm:px-4 lg:px-4 shadow-lg">
                                                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-pink-50 flex-shrink-0" />
                                                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-50 whitespace-nowrap w-full">
                                                    {selectedProfile.calender}
                                                </p>
                                                <p className="text-lg sm:text-lg lg:text-2xl font-bold text-pink-50 uppercase whitespace-nowrap w-full">
                                                    {selectedProfile.sale}
                                                </p>
                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>

                        )}
                    </div>


                </div>

            </div>











        </>
    )
}

export default PerfilSearch