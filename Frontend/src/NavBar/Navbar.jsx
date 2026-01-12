import React, { useState, useEffect, useRef } from 'react'
import { GraduationCap, Bell, User, X, Lock, Mail, UserSearch, PartyPopper, Download, FileText, AlertCircle, CheckCircle, Info, Trash2, Volume2, VolumeX } from 'lucide-react'
import '../index.css'
import '../App.css'
import loopone from '../assets/LogoNH.png'
import { Link } from 'react-router-dom'
import papel from '../assets/18647.jpg'

function Navbar() {

  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const [isNotifOpen, setIsNotifOpen] = useState(false)



  const [filter, setFilter] = useState('all')
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [pushEnabled, setPushEnabled] = useState(false)
  const audioRef = useRef(null)

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'download',
      title: 'Material de Estudo Disponível',
      message: 'O material de Matemática da 10ª classe já está disponível para download',
      file: 'matematica_10classe.pdf',
      fileSize: '2.5 MB',
      time: '5 min atrás',
      isRead: false,
      icon: Download,
      color: 'emerald'
    },
    {
      id: 2,
      type: 'message',
      title: 'Nova Mensagem da Administração',
      message: 'Informamos que as inscrições para o próximo período letivo estão abertas até dia 30 de Janeiro',
      time: '1 hora atrás',
      isRead: false,
      icon: FileText,
      color: 'blue'
    },
    {
      id: 3,
      type: 'download',
      title: 'Calendário Escolar 2026',
      message: 'O calendário escolar atualizado está disponível',
      file: 'calendario_2026.pdf',
      fileSize: '1.2 MB',
      time: '3 horas atrás',
      isRead: true,
      icon: Download,
      color: 'emerald'
    },
    {
      id: 4,
      type: 'alert',
      title: 'Aviso Importante',
      message: 'Lembre-se: Pagamento das propinas vence dia 15 de cada mês',
      time: '1 dia atrás',
      isRead: false,
      icon: AlertCircle,
      color: 'orange'
    },
    {
      id: 5,
      type: 'message',
      title: 'Parabéns pela sua conquista!',
      message: 'Você completou 90% das atividades do curso de Informática. Continue assim!',
      time: '2 dias atrás',
      isRead: true,
      icon: CheckCircle,
      color: 'purple'
    },
    {
      id: 6,
      type: 'download',
      title: 'Guia de Preparação para Exames',
      message: 'Material de apoio para os exames finais disponível',
      file: 'guia_exames.pdf',
      fileSize: '4.8 MB',
      time: '3 dias atrás',
      isRead: true,
      icon: Download,
      color: 'emerald'
    },
    {
      id: 7,
      type: 'message',
      title: 'Atualização do Sistema',
      message: 'O sistema será atualizado dia 20/01 às 22h. Pode haver indisponibilidade temporária',
      time: '1 semana atrás',
      isRead: true,
      icon: Info,
      color: 'blue'
    }
  ])


  // Request Push Notification Permission
  useEffect(() => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        setPushEnabled(true)
      }
    }
  }, [])


  const requestPushPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        setPushEnabled(true)
        showBrowserNotification({
          title: '🎉 Notificações Ativadas!',
          message: 'Você receberá alertas de novas notificações',
          type: 'message'
        })
      }
    } else {
      alert('Seu navegador não suporta notificações push')
    }
  }


  // Play Notification Sound
  const playNotificationSound = () => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(err => console.log('Erro ao tocar som:', err))
    }
  }



  // Show Browser Push Notification
  const showBrowserNotification = (notif) => {
    if (pushEnabled && Notification.permission === 'granted') {
      const notification = new Notification(notif.title, {
        body: notif.message,
        icon: '🔔',
        badge: '🔔',
        tag: `notif-${notif.id || Date.now()}`,
        requireInteraction: false,
        silent: !soundEnabled
      })

      notification.onclick = () => {
        window.focus()
        notification.close()
      }

      // Auto close after 5 seconds
      setTimeout(() => notification.close(), 3000)
    }
  }


  // Simulate receiving new notification (para demonstração)
  const simulateNewNotification = () => {
    const newNotif = {
      id: Date.toString(),
      type: 'message',
      title: 'Nova Notificação de Teste',
      message: 'Esta é uma notificação de demonstração com som e push!',
      time: 'Agora',
      isRead: false,
      icon: Info,
      color: 'blue'
    }

    setNotifications([newNotif, ...notifications])
    playNotificationSound()
    showBrowserNotification(newNotif)
  }



  const colorSchemes = {
    purple: 'from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200',
    emerald: 'from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-600 border-emerald-200',
    blue: 'from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200',
    orange: 'from-orange-500 to-orange-600 bg-orange-50 text-orange-600 border-orange-200',
  }


  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notif.isRead;
    return notif.type === filter;
  })


  const unreadCount = notifications.filter(n => !n.isRead).length

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, isRead: true } : notif
    ))
  }



  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id))
  }


  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isRead: true })))
  }


  const downloadFile = (fileName) => {
    alert(`Baixando arquivo: ${fileName}`)
    // Aqui você colocaria a lógica real de download
  }













  return (


    <>





      <header className=" fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-5  lg:px-8 ">
        <div className=" max-w-7xl mx-auto flex flex-col items-center justify-between gap-3  ">

          {/* LOGO - Always visible */}
          <Link to='/' className="flex items-center justify-center py-2 px-2 rounded-full border-2 border-pink-800  bg-white lg:justify-start gap-3 cursor-pointer duration-700 ease-in-out active:scale-70">
            <div className="w-12 h-12 sm:w-14 sm:h-14  rounded-full flex items-center justify-center shadow-lg ">
              <div className="w-15 h-15 sm:w-15 sm:h-15 bg-white rounded-full flex items-center justify-center ">
                <img className='rounded-full' src={loopone} width={90} />
              </div>
            </div>
            <h1 className="text-pink-700 font-bold text-base sm:text-lg lg:text-xl whitespace-nowrap font-mono">
              NOVOS HORIZONTES
            </h1>
          </Link>

          {/* NAVIGATION - Responsive */}
          <nav className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 lg:gap-4 ">

            {/* CURSOS Button */}
            <Link to='/cursos' className="flex items-center gap-2 bg-pink-700 hover:bg-pink-800 text-white px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70">
              <GraduationCap size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline font-mono font-medium">CURSOS</span>
            </Link>


            <Link to='/perfilsearch' className="flex items-center gap-2 bg-pink-700 hover:bg-pink-800 text-white px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70">
              <UserSearch size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline font-mono font-medium">PERFIL</span>
            </Link>



            {/* ATIVIDADES Button */}
            <Link to='/eventos' className="flex items-center gap-2 bg-pink-700 hover:bg-pink-800 text-white px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70">
              <PartyPopper size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline font-mono font-medium">EVENTOS</span>
            </Link>

            {/* NOTIFICAÇÕES Button */}
            <button
              onClick={() => setIsNotifOpen(true)}
              className="flex items-center gap-2 bg-pink-700 hover:bg-pink-800 text-white px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg relative cursor-pointer duration-700 ease-in-out active:scale-70">
              <Bell size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline font-mono font-medium">NOTIFICAÇÕES</span>
              {/* Badge de notificação */}
              {unreadCount > 0 && (
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white text-xs font-black rounded-full flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* LOGIN Button */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center gap-2 bg-amber-700  text-white px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-bold text-sm transition-all shadow-lg cursor-pointer duration-700 ease-in-out active:scale-70"
            >
              <User size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline font-mono font-bold">Login</span>
            </button>
          </nav>
        </div>
      </header>

      {/* LOGIN MODAL - Responsivo */}
      {
        isLoginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop - Só aparece no desktop */}
            <div
              className="hidden lg:block absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsLoginOpen(false)}
            ></div>

            {/* Modal Container - Fullscreen em mobile, card em desktop */}
            <div className="relative w-full h-full lg:h-auto lg:w-[450px] bg-amber-800 lg:rounded-3xl shadow-2xl flex flex-col">

              {/* Close Button - Só no desktop */}
              <button
                onClick={() => setIsLoginOpen(false)}
                className="hidden lg:flex absolute -top-4 -right-4 w-12 h-12 bg-amber-700 rounded-full items-center justify-center shadow-lg  transition cursor-pointer duration-700 ease-in-out active:scale-70"
              >
                <X className="text-orange-50" size={30} />
              </button>

              {/* Header do Modal */}
              <div className=" px-6 py-8 lg:rounded-t-3xl flex items-center justify-between lg:justify-center">
                <h2 className="text-white font-medium text-2xl lg:text-3xl font-mono">LOGIN</h2>
                {/* Close Button Mobile */}
                <button
                  onClick={() => setIsLoginOpen(false)}
                  className="lg:hidden w-10 h-10 bg-amber-900 shadow-lg rounded-full flex items-center justify-center duration-700 ease-in-out active:scale-70"
                >
                  <X className="text-white" size={30} />
                </button>
              </div>

              {/* Form Container */}
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 lg:py-12 gap-6">




                {/* Email Input */}
                <div className="w-full max-w-sm">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-50" size={20} />
                    <input
                      type="email"
                      placeholder="Seu email"
                      className="w-full bg-pink-800 text-white placeholder:text-pink-200 px-12 py-4 rounded-full font-semibold text-base focus:outline-none shadow-lg transition"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="w-full max-w-sm">
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-50" size={20} />
                    <input
                      type="password"
                      placeholder="Sua senha"
                      className="w-full bg-pink-800 text-white placeholder:text-pink-200 px-12 py-4 rounded-full font-semibold text-base focus:outline-none shadow-lg transition"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full max-w-sm bg-pink-800 text-white px-8 py-4 rounded-full text-lg shadow-lg transition mt-4 cursor-pointer duration-700 ease-in-out active:scale-70 font-bold font-mono">
                  Aceder ao Painel
                </button>

              </div>
            </div>
          </div>
        )
      }





      {/* NOTIFICACAO MODAL - Responsivo */}
      {
        isNotifOpen && (

          <div className="fixed inset-0  z-50 flex items-center justify-center p-4 ">


            <div
              className="hidden lg:block absolute inset-0  bg-black/70 backdrop-blur-md"
              onClick={() => setIsNotifOpen(false)}
            ></div>



            {/* Modal Container - Responsivo e Confortável */}
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden  overflow-x-hidden flex flex-col">
            
              <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                <img className="w-full h-full object-cover" src={papel} alt="Fundo" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
              </div>


              {/* Close Button - Sempre Visível */}
              <button
                onClick={() => setIsNotifOpen(false)}
                className="absolute top-4 right-4 z-50 w-12 h-12 bg-white hover:bg-gray-100 rounded-full shadow-lg flex items-center justify-center transition group"
              >
                <X className="text-gray-700 group-hover:text-pink-600" size={24} />
              </button>

              {/* Header Fixo */}
              <div className="bg-white/20  backdrop-blur-lg shadow-md px-6 py-5 flex-shrink-0">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center relative">
                      <Bell className="text-white" size={26} />
                      {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-black rounded-full flex items-center justify-center">
                          {unreadCount}
                        </span>
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-sans text-white">Notificações</h2>
                      <p className="text-sm text-white font-bold font-sans">
                        {unreadCount} não lida{unreadCount !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="hidden sm:flex items-center gap-2">
                    <button
                      onClick={() => setSoundEnabled(!soundEnabled)}
                      className={`p-2.5 rounded-full transition ${soundEnabled ? 'bg-amber-700 text-white' : 'bg-amber-500 text-white'
                        }`}
                      title={soundEnabled ? 'Som ativo' : 'Som inativo'}
                    >
                      {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                    </button>

                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="px-4 py-2 bg-pink-800 hover:bg-pink-700 text-white rounded-full font-bold text-sm transition"
                      >
                        Marcar todas
                      </button>
                    )}
                  </div>
                </div>

                {/* Filters - Compactos */}
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-full text-gray-700 font-bold font-sans whitespace-nowrap transition ${filter === 'all'
                      ? 'bg-pink-800 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    Todas
                  </button>
                  <button
                    onClick={() => setFilter('unread')}
                    className={`px-4 py-2 rounded-full text-gray-700 font-bold font-sans whitespace-nowrap transition ${filter === 'unread'
                      ? 'bg-pink-800 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    Não Lidas ({unreadCount})
                  </button>
                  <button
                    onClick={() => setFilter('download')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-gray-700 font-bold font-sans whitespace-nowrap transition ${filter === 'download'
                      ? 'bg-pink-800 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    <Download size={14} />
                    Downloads
                  </button>
                  <button
                    onClick={() => setFilter('message')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-gray-700 font-bold font-sans whitespace-nowrap transition ${filter === 'message'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    <FileText size={14} />
                    Mensagens
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 z-50">
                {filteredNotifications.length === 0 ? (
                  <div className="bg-white rounded-2xl shadow-md p-12 text-center">
                    <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-xl font-bold text-gray-600">Nenhuma notificação</p>
                    <p className="text-sm text-gray-500 mt-2">Você está em dia!</p>
                  </div>
                ) : (
                  filteredNotifications.map((notif) => {
                    const Icon = notif.icon;

                    return (
                      <div
                        key={notif.id}
                        className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-all ${!notif.isRead ? 'border-l-4 border-pink-500' : ''
                          }`}
                      >
                        <div className="p-5">
                          <div className="flex gap-4">
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorSchemes[notif.color]} flex items-center justify-center flex-shrink-0`}>
                              <Icon className="text-white" size={22} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="text-base font-bold text-black flex items-center gap-2">
                                  {notif.title}
                                  {!notif.isRead && (
                                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                  )}
                                </h3>
                                <button
                                  onClick={() => deleteNotification(notif.id)}
                                  className="p-1.5 hover:bg-red-50 rounded-lg transition"
                                >
                                  <Trash2 className="text-gray-400 hover:text-red-500" size={16} />
                                </button>
                              </div>

                              <p className="text-sm text-gray-700 font-bold font-sans leading-relaxed mb-3">
                                {notif.message}
                              </p>

                              {/* Download Section */}
                              {notif.type === 'download' && (
                                <div className="bg-emerald-50 rounded-xl p-3 flex items-center justify-between gap-3 border border-emerald-100">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <FileText className="text-emerald-600 flex-shrink-0" size={20} />
                                    <div className="min-w-0">
                                      <p className="font-bold text-gray-900 text-sm truncate">
                                        {notif.file}
                                      </p>
                                      <p className="text-xs text-gray-500">{notif.fileSize}</p>
                                    </div>
                                  </div>
                                  <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs transition flex items-center gap-1.5">
                                    <Download size={14} />
                                    Baixar
                                  </button>
                                </div>
                              )}

                              {/* Footer */}
                              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                                <span className="text-xs font-semibold text-gray-500">
                                  {notif.time}
                                </span>
                                {!notif.isRead && (
                                  <button
                                    onClick={() => markAsRead(notif.id)}
                                    className="text-xs font-bold text-pink-600 hover:text-pink-700 transition"
                                  >
                                    Marcar lida
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Mobile Action Button */}
              <div className="sm:hidden bg-white border-t border-gray-200 p-4 flex gap-2">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className={`flex-1 py-3 rounded-xl font-bold text-sm transition ${soundEnabled ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'
                    }`}
                >
                  {soundEnabled ? '🔊 Som' : '🔇 Som'}
                </button>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="flex-1 py-3 bg-pink-600 text-white rounded-xl font-bold text-sm"
                  >
                    Marcar Todas
                  </button>
                )}
              </div>
            </div>
          </div>

        )
      }


    </>










  )
}
export default Navbar