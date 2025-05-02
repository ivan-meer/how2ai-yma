import React, { useState, useEffect } from 'react';
import { Brain, Target, Users, Zap, ArrowRight, PlayCircle, BarChart2, MessageSquare, Settings, PenTool, Award, Clock, CheckCircle, BookOpen, ChevronDown, Info } from 'lucide-react';

const DarkCourseIntro = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [glowElements, setGlowElements] = useState({
    heroBtn: false,
    actionBtn: false
  });
  
  // Animation for gradual reveal of elements
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen pb-16">
      {/* Telegram header - fixed with glass effect */}
      <div className="backdrop-blur-md bg-gray-900/80 text-white py-3 px-4 sticky top-0 z-10 shadow-md border-b border-white/10">
        <div className="flex items-center">
          <button className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="text-lg font-medium tracking-wide">ИИ-агенты в маркетинге</h1>
        </div>
      </div>

      {/* Hero banner with advanced gradient and animation */}
      <div className={`relative overflow-hidden transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute -top-40 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
        
        <div className="bg-gradient-to-r from-gray-800/80 via-gray-800/90 to-gray-800/80 backdrop-blur-sm border border-white/5 rounded-b-2xl shadow-2xl text-white px-4 py-6 relative z-0">
          <div className="mb-4 relative z-10">
            <h2 className="text-3xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              ИИ-агенты в маркетинге
            </h2>
            <p className="text-lg opacity-90 mb-4 font-light">Полный курс по автоматизации маркетинговых задач</p>
            
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm flex items-center shadow-lg">
                <Clock size={14} className="mr-1 text-blue-400" /> 7 часов контента
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm flex items-center shadow-lg">
                <BookOpen size={14} className="mr-1 text-purple-400" /> 5 модулей
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm flex items-center shadow-lg">
                <Award size={14} className="mr-1 text-amber-400" /> Сертификат
              </div>
            </div>
            
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-3 mt-4 flex items-center justify-between border border-white/10 transition-all duration-300 hover:bg-white/15">
              <div className="flex items-center">
                <div className="relative">
                  <div className="bg-blue-500 rounded-full p-1 mr-3 text-white">
                    <PlayCircle size={24} />
                  </div>
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 -z-10 animate-pulse"></div>
                </div>
                <div>
                  <div className="text-sm font-medium">Вводное видео</div>
                  <div className="text-xs opacity-80">3:45</div>
                </div>
              </div>
              <button 
                className={`relative bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 ${glowElements.heroBtn ? 'scale-110' : 'scale-100'}`}
                onMouseEnter={() => setGlowElements({...glowElements, heroBtn: true})}
                onMouseLeave={() => setGlowElements({...glowElements, heroBtn: false})}
              >
                <PlayCircle size={20} />
                {glowElements.heroBtn && (
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 -z-10 animate-pulse"></div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab navigation - glassmorphism */}
      <div className="backdrop-blur-md bg-gray-800/50 border-b border-white/10 sticky top-12 z-10 shadow-lg">
        <div className="flex">
          <button 
            className={`px-4 py-3 text-sm font-medium transition-all duration-300 ${activeTab === 'overview' ? 'text-blue-400 border-b-2 border-blue-500 relative' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab('overview')}
          >
            Обзор курса
            {activeTab === 'overview' && (
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            )}
          </button>
          <button 
            className={`px-4 py-3 text-sm font-medium transition-all duration-300 ${activeTab === 'benefits' ? 'text-blue-400 border-b-2 border-blue-500 relative' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab('benefits')}
          >
            Что вы узнаете
            {activeTab === 'benefits' && (
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            )}
          </button>
          <button 
            className={`px-4 py-3 text-sm font-medium transition-all duration-300 ${activeTab === 'audience' ? 'text-blue-400 border-b-2 border-blue-500 relative' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab('audience')}
          >
            Для кого
            {activeTab === 'audience' && (
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            )}
          </button>
        </div>
      </div>

      {/* Main content with animation */}
      <div className="px-4 py-6">
        <div className={`transition-all duration-500 ease-out ${activeTab === 'overview' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute'}`}>
          {activeTab === 'overview' && (
            <>
              <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 mb-6">
                <h3 className="font-bold text-lg mb-3 text-white">О курсе</h3>
                <p className="text-gray-300 mb-3">
                  Курс "ИИ-агенты в маркетинге" погружает вас в мир автоматизации маркетинговых задач с помощью искусственного интеллекта. Вы изучите теорию и практику применения ИИ-агентов для анализа данных, создания контента, управления рекламными кампаниями и персонализации взаимодействия с клиентами.
                </p>
                <p className="text-gray-300">
                  От понимания базовых технологий до реальных кейсов внедрения — этот курс даст вам все необходимые знания для трансформации вашего маркетинга с помощью ИИ-агентов.
                </p>
              </div>

              <h3 className="font-bold text-lg mb-4 text-white">Ключевые возможности ИИ-агентов</h3>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-blue-900/30 hover:bg-gray-800/40">
                  <div className="flex items-center mb-3">
                    <div className="relative">
                      <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                        <Brain size={20} />
                      </div>
                      <div className="absolute inset-0 bg-blue-600 blur-md opacity-30 -z-10"></div>
                    </div>
                    <h4 className="font-bold text-white">Автоматизация рутины</h4>
                  </div>
                  <p className="text-gray-300 text-sm">ИИ-агенты могут взять на себя до 80% повторяющихся задач в маркетинге, освобождая время для стратегической работы.</p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-green-900/30 hover:bg-gray-800/40">
                  <div className="flex items-center mb-3">
                    <div className="relative">
                      <div className="bg-green-600 text-white p-2 rounded-lg mr-3">
                        <BarChart2 size={20} />
                      </div>
                      <div className="absolute inset-0 bg-green-600 blur-md opacity-30 -z-10"></div>
                    </div>
                    <h4 className="font-bold text-white">Аналитика и прогнозы</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Системы анализируют 120+ параметров, предсказывая тренды с точностью до 93% — намного выше человеческих возможностей.</p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-purple-900/30 hover:bg-gray-800/40">
                  <div className="flex items-center mb-3">
                    <div className="relative">
                      <div className="bg-purple-600 text-white p-2 rounded-lg mr-3">
                        <PenTool size={20} />
                      </div>
                      <div className="absolute inset-0 bg-purple-600 blur-md opacity-30 -z-10"></div>
                    </div>
                    <h4 className="font-bold text-white">Генерация контента</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Создание текстов, изображений и креативов на 10x быстрее традиционных методов при сохранении качества.</p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-amber-900/30 hover:bg-gray-800/40">
                  <div className="flex items-center mb-3">
                    <div className="relative">
                      <div className="bg-amber-600 text-white p-2 rounded-lg mr-3">
                        <Target size={20} />
                      </div>
                      <div className="absolute inset-0 bg-amber-600 blur-md opacity-30 -z-10"></div>
                    </div>
                    <h4 className="font-bold text-white">Оптимизация кампаний</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Непрерывный мониторинг и корректировка рекламных кампаний, снижающие стоимость привлечения на 15-22%.</p>
                </div>
              </div>

              <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 mb-6">
                <h3 className="font-bold text-lg mb-3 text-white">Программа обучения</h3>
                
                <div className="space-y-3">
                  <div className="border border-white/10 backdrop-blur-md bg-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10">
                    <button className="flex items-center justify-between w-full p-3 text-left">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="bg-blue-900/60 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                            1
                          </div>
                          <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 -z-10"></div>
                        </div>
                        <span className="font-medium text-white">Введение в ИИ-агентов</span>
                      </div>
                      <ChevronDown size={18} className="text-blue-400" />
                    </button>
                  </div>
                  
                  <div className="border border-white/10 backdrop-blur-md bg-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10">
                    <button className="flex items-center justify-between w-full p-3 text-left">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="bg-blue-900/60 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                            2
                          </div>
                          <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 -z-10"></div>
                        </div>
                        <span className="font-medium text-white">Анализ данных и прогнозная аналитика</span>
                      </div>
                      <ChevronDown size={18} className="text-blue-400" />
                    </button>
                  </div>
                  
                  <div className="border border-white/10 backdrop-blur-md bg-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10">
                    <button className="flex items-center justify-between w-full p-3 text-left">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="bg-blue-900/60 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                            3
                          </div>
                          <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 -z-10"></div>
                        </div>
                        <span className="font-medium text-white">Генерация и оптимизация контента</span>
                      </div>
                      <ChevronDown size={18} className="text-blue-400" />
                    </button>
                  </div>
                  
                  <div className="border border-white/10 backdrop-blur-md bg-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10">
                    <button className="flex items-center justify-between w-full p-3 text-left">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="bg-blue-900/60 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                            4
                          </div>
                          <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 -z-10"></div>
                        </div>
                        <span className="font-medium text-white">Управление рекламными кампаниями</span>
                      </div>
                      <ChevronDown size={18} className="text-blue-400" />
                    </button>
                  </div>
                  
                  <div className="border border-white/10 backdrop-blur-md bg-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10">
                    <button className="flex items-center justify-between w-full p-3 text-left">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="bg-blue-900/60 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                            5
                          </div>
                          <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 -z-10"></div>
                        </div>
                        <span className="font-medium text-white">Персонализация взаимодействий</span>
                      </div>
                      <ChevronDown size={18} className="text-blue-400" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className={`transition-all duration-500 ease-out ${activeTab === 'benefits' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute'}`}>
          {activeTab === 'benefits' && (
            <>
              <h3 className="font-bold text-lg mb-4 text-white">Чему вы научитесь</h3>
              
              <div className="space-y-3 mb-6">
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 flex items-start transition-all duration-300 hover:bg-gray-800/40">
                  <div className="relative">
                    <div className="bg-green-600 text-white p-1 rounded-full mr-3 mt-0.5">
                      <CheckCircle size={16} />
                    </div>
                    <div className="absolute inset-0 bg-green-600 blur-md opacity-20 -z-10"></div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Понимание принципов работы ИИ-агентов и их типов</div>
                    <div className="text-xs text-blue-400 mt-1">Модуль 1</div>
                  </div>
                </div>
                
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 flex items-start transition-all duration-300 hover:bg-gray-800/40">
                  <div className="relative">
                    <div className="bg-green-600 text-white p-1 rounded-full mr-3 mt-0.5">
                      <CheckCircle size={16} />
                    </div>
                    <div className="absolute inset-0 bg-green-600 blur-md opacity-20 -z-10"></div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Навыки применения ИИ для анализа данных и прогнозирования трендов</div>
                    <div className="text-xs text-blue-400 mt-1">Модуль 2</div>
                  </div>
                </div>
                
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 flex items-start transition-all duration-300 hover:bg-gray-800/40">
                  <div className="relative">
                    <div className="bg-green-600 text-white p-1 rounded-full mr-3 mt-0.5">
                      <CheckCircle size={16} />
                    </div>
                    <div className="absolute inset-0 bg-green-600 blur-md opacity-20 -z-10"></div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Умение настраивать автоматизацию генерации контента</div>
                    <div className="text-xs text-blue-400 mt-1">Модуль 3</div>
                  </div>
                </div>
                
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 flex items-start transition-all duration-300 hover:bg-gray-800/40">
                  <div className="relative">
                    <div className="bg-green-600 text-white p-1 rounded-full mr-3 mt-0.5">
                      <CheckCircle size={16} />
                    </div>
                    <div className="absolute inset-0 bg-green-600 blur-md opacity-20 -z-10"></div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Управление рекламными кампаниями с помощью ИИ-систем</div>
                    <div className="text-xs text-blue-400 mt-1">Модуль 4</div>
                  </div>
                </div>
                
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 flex items-start transition-all duration-300 hover:bg-gray-800/40">
                  <div className="relative">
                    <div className="bg-green-600 text-white p-1 rounded-full mr-3 mt-0.5">
                      <CheckCircle size={16} />
                    </div>
                    <div className="absolute inset-0 bg-green-600 blur-md opacity-20 -z-10"></div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Создание персонализированного взаимодействия с клиентами</div>
                    <div className="text-xs text-blue-400 mt-1">Модуль 5</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/10 rounded-xl shadow-lg text-white p-4 mb-6">
                <h4 className="font-bold flex items-center mb-3">
                  <div className="relative mr-2">
                    <Zap size={18} className="text-yellow-400" />
                    <div className="absolute inset-0 bg-yellow-400 blur-md opacity-30 -z-10"></div>
                  </div>
                  По окончании курса вы сможете:
                </h4>
                <div className="space-y-3">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center transition-all duration-300 hover:bg-white/10">
                    <div className="relative mr-2.5">
                      <div className="bg-blue-900/60 p-1.5 rounded-full">
                        <Brain size={14} className="text-blue-400" />
                      </div>
                      <div className="absolute inset-0 bg-blue-400 blur-md opacity-20 -z-10"></div>
                    </div>
                    <div className="text-sm">Создавать собственных ИИ-агентов для маркетинговых задач</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center transition-all duration-300 hover:bg-white/10">
                    <div className="relative mr-2.5">
                      <div className="bg-green-900/60 p-1.5 rounded-full">
                        <BarChart2 size={14} className="text-green-400" />
                      </div>
                      <div className="absolute inset-0 bg-green-400 blur-md opacity-20 -z-10"></div>
                    </div>
                    <div className="text-sm">Повысить эффективность маркетинга на 30-55%</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center transition-all duration-300 hover:bg-white/10">
                    <div className="relative mr-2.5">
                      <div className="bg-amber-900/60 p-1.5 rounded-full">
                        <Clock size={14} className="text-amber-400" />
                      </div>
                      <div className="absolute inset-0 bg-amber-400 blur-md opacity-20 -z-10"></div>
                    </div>
                    <div className="text-sm">Автоматизировать до 80% рутинных задач</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className={`transition-all duration-500 ease-out ${activeTab === 'audience' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute'}`}>
          {activeTab === 'audience' && (
            <>
              <h3 className="font-bold text-lg mb-4 text-white">Для кого этот курс</h3>
              
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 transition-all duration-300 hover:bg-gray-800/40">
                  <div className="flex items-center mb-2">
                    <div className="relative">
                      <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                        <Target size={18} />
                      </div>
                      <div className="absolute inset-0 bg-blue-600 blur-md opacity-30 -z-10"></div>
                    </div>
                    <h4 className="font-bold text-white">Маркетологи и SMM-специалисты</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Которые хотят автоматизировать рутинные задачи и повысить эффективность маркетинговых кампаний</p>
                </div>
                
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 transition-all duration-300 hover:bg-gray-800/40">
                  <div className="flex items-center mb-2">
                    <div className="relative">
                      <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                        <Settings size={18} />
                      </div>
                      <div className="absolute inset-0 bg-blue-600 blur-md opacity-30 -z-10"></div>
                    </div>
                    <h4 className="font-bold text-white">Предприниматели и руководители</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Заинтересованные в оптимизации маркетинговых процессов и сокращении расходов на привлечение клиентов</p>
                </div>
                
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 transition-all duration-300 hover:bg-gray-800/40">
                  <div className="flex items-center mb-2">
                    <div className="relative">
                      <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                        <Brain size={18} />
                      </div>
                      <div className="absolute inset-0 bg-blue-600 blur-md opacity-30 -z-10"></div>
                    </div>
                    <h4 className="font-bold text-white">Специалисты по цифровым технологиям</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Желающие расширить свои навыки в области применения искусственного интеллекта</p>
                </div>
                
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 transition-all duration-300 hover:bg-gray-800/40">
                  <div className="flex items-center mb-2">
                    <div className="relative">
                      <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                        <PenTool size={18} />
                      </div>
                      <div className="absolute inset-0 bg-blue-600 blur-md opacity-30 -z-10"></div>
                    </div>
                    <h4 className="font-bold text-white">Контент-менеджеры и копирайтеры</h4>
                  </div>
                  <p className="text-gray-300 text-sm">Стремящиеся повысить продуктивность и качество создаваемого контента</p>
                </div>
              </div>
              
              <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 mb-6">
                <h4 className="font-bold flex items-center mb-3 text-white">
                  <div className="relative mr-2">
                    <Info size={18} className="text-blue-400" />
                    <div className="absolute inset-0 bg-blue-400 blur-md opacity-20 -z-10"></div>
                  </div>
                  Необходимые навыки
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2 relative">
                      <div className="absolute inset-0 bg-green-500 blur-md opacity-50 -z-10 animate-pulse"></div>
                    </div>
                    <div className="text-gray-300">Базовое понимание маркетинга и рекламы</div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2 relative">
                      <div className="absolute inset-0 bg-green-500 blur-md opacity-50 -z-10 animate-pulse"></div>
                    </div>
                    <div className="text-gray-300">Опыт работы с цифровыми маркетинговыми инструментами</div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                    <div className="text-gray-300">Навыки программирования не требуются, но будут полезны</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Start learning button */}
        <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                  <Users size={20} />
                </div>
                <div className="absolute inset-0 bg-blue-600 blur-md opacity-30 -z-10"></div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Уже обучаются</div>
                <div className="font-bold text-white">1,245+ человек</div>
              </div>
            </div>
            
            <button 
              className={`relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg flex items-center shadow-lg transition-all duration-300 ${glowElements.actionBtn ? 'shadow-[0_0_15px_rgba(139,92,246,0.3)]' : ''}`}
              onMouseEnter={() => setGlowElements({...glowElements, actionBtn: true})}
              onMouseLeave={() => setGlowElements({...glowElements, actionBtn: false})}
            >
              Начать обучение <ArrowRight size={16} className="ml-2" />
              {glowElements.actionBtn && (
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-purple-600 rounded-lg blur-xl opacity-40 animate-pulse"></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom navigation bar for Telegram Mini App */}
      <div className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-gray-900/80 border-t border-white/10 px-2 py-2 z-20">
        <div className="flex justify-around">
          <button className="flex flex-col items-center relative">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <div className="absolute inset-0 bg-blue-400 blur-md opacity-20 -z-10"></div>
            </div>
            <span className="text-xs mt-1 text-blue-400">Главная</span>
          </button>
          
          <button className="flex flex-col items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <span className="text-xs mt-1">Модули</span>
          </button>
          
          <button className="flex flex-col items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            <span className="text-xs mt-1">Практика</span>
          </button>
          
          <button className="flex flex-col items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="text-xs mt-1">Профиль</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarkCourseIntro;
