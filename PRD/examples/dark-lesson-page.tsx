import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  PlayCircle, 
  PauseCircle,
  CheckCircle, 
  Clock, 
  LightbulbIcon,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Share2,
  Info,
  FileText,
  Download,
  Zap
} from 'lucide-react';

const DarkLessonPage = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [completedSections, setCompletedSections] = useState([0]);
  const [activeTab, setActiveTab] = useState('content');
  const [hoveredElements, setHoveredElements] = useState({});
  
  // Animation for gradual reveal of elements
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };
  
  const handleHover = (element, state) => {
    setHoveredElements(prev => ({...prev, [element]: state}));
  };
  
  const markSectionComplete = (index) => {
    if (!completedSections.includes(index)) {
      setCompletedSections([...completedSections, index]);
    }
  };
  
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen pb-16">
      {/* Telegram header - glassmorphism */}
      <div className="backdrop-blur-md bg-gray-900/80 text-white py-3 px-4 sticky top-0 z-20 shadow-md border-b border-white/10">
        <div className="flex items-center">
          <button className="mr-2">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-medium tracking-wide">Построение прогнозных моделей</h1>
        </div>
      </div>
      
      {/* Video player with glowing effects */}
      <div className={`relative aspect-video bg-black transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-purple-900/20 mix-blend-overlay"></div>
        <img 
          src="/api/placeholder/640/360" 
          alt="Видео урока" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={toggleVideo}
            className={`relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 
              ${hoveredElements.playBtn ? 'scale-110' : 'scale-100'}`}
            onMouseEnter={() => handleHover('playBtn', true)}
            onMouseLeave={() => handleHover('playBtn', false)}
          >
            {videoPlaying ? <PauseCircle size={32} /> : <PlayCircle size={32} />}
            {hoveredElements.playBtn && (
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
              </div>
            )}
          </button>
        </div>
        
        {/* Video controls overlay with glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent text-white p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-medium">Урок 3: Построение прогнозных моделей</div>
            <div className="text-sm">12:45 / 32:10</div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1.5 relative overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full relative" style={{ width: '40%' }}>
              <div className="absolute top-0 bottom-0 left-[95%] w-3 h-3 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)] -translate-y-1/4"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lesson navigation tabs - glassmorphism */}
      <div className="backdrop-blur-md bg-gray-900/70 border-b border-white/10 sticky top-12 z-10 shadow-md">
        <div className="flex">
          <button 
            className={`px-4 py-3 text-sm font-medium transition-all duration-300 ${activeTab === 'content' ? 'text-blue-400 border-b-2 border-blue-500 relative' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab('content')}
          >
            Содержание
            {activeTab === 'content' && (
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            )}
          </button>
          <button 
            className={`px-4 py-3 text-sm font-medium transition-all duration-300 ${activeTab === 'materials' ? 'text-blue-400 border-b-2 border-blue-500 relative' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab('materials')}
          >
            Материалы
            {activeTab === 'materials' && (
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            )}
          </button>
          <button 
            className={`px-4 py-3 text-sm font-medium transition-all duration-300 ${activeTab === 'discussion' ? 'text-blue-400 border-b-2 border-blue-500 relative' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveTab('discussion')}
          >
            Обсуждение
            {activeTab === 'discussion' && (
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            )}
          </button>
        </div>
      </div>
      
      {/* Main content with animations and transitions */}
      <div className="px-4 py-5">
        <div className={`transition-all duration-500 ease-out ${activeTab === 'content' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute pointer-events-none'}`}>
          {activeTab === 'content' && (
            <>
              {/* Lesson meta */}
              <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-white">Построение прогнозных моделей</h2>
                  <div className="flex items-center text-gray-300">
                    <Clock size={16} className="mr-1 text-blue-400" />
                    <span className="text-sm">32 мин</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  В этом уроке вы научитесь создавать и настраивать модели машинного обучения для прогнозирования ключевых маркетинговых показателей — от конверсии и удержания до пожизненной ценности клиента (LTV).
                </p>
                
                <div className="flex flex-wrap items-center gap-2">
                  <div className="bg-blue-900/50 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20 shadow-sm shadow-blue-500/10">
                    Модуль 2
                  </div>
                  <div className="bg-blue-900/50 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20 shadow-sm shadow-blue-500/10">
                    Урок 3 из 5
                  </div>
                  <div className="bg-amber-900/50 text-amber-400 px-3 py-1 rounded-full text-sm border border-amber-500/20 shadow-sm shadow-amber-500/10">
                    Средний уровень
                  </div>
                </div>
              </div>
              
              {/* Lesson content sections with glassmorphism */}
              <div className="space-y-6 mb-6">
                {/* Section 1 - Completed */}
                <div className={`backdrop-blur-md border rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                  completedSections.includes(0) ? 'bg-green-900/10 border-green-500/30' : 'bg-gray-800/30 border-white/10'
                }`}>
                  <div className="p-4">
                    <div className="flex items-start mb-3">
                      <div className={`relative rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 ${
                        completedSections.includes(0) ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'
                      }`}>
                        {completedSections.includes(0) ? (
                          <CheckCircle size={16} />
                        ) : (
                          <span className="text-sm font-medium">1</span>
                        )}
                        {completedSections.includes(0) && (
                          <div className="absolute inset-0 -z-10">
                            <div className="absolute inset-0 bg-green-500 rounded-full blur-sm opacity-40"></div>
                          </div>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white">Типы прогнозных моделей в маркетинге</h3>
                    </div>
                    
                    <div className="ml-9">
                      <p className="text-gray-300 mb-3">
                        Системы искусственного интеллекта предлагают несколько типов прогнозных моделей, каждая из которых оптимизирована для решения конкретных маркетинговых задач:
                      </p>
                      
                      <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                        <li><strong className="text-white">Модели конверсии</strong> — предсказывают вероятность совершения целевого действия пользователем</li>
                        <li><strong className="text-white">Модели LTV</strong> — прогнозируют пожизненную ценность клиента на основе паттернов поведения</li>
                        <li><strong className="text-white">Модели оттока</strong> — определяют риск ухода клиента и возможные меры удержания</li>
                        <li><strong className="text-white">Сегментационные модели</strong> — группируют пользователей по поведенческим и демографическим признакам</li>
                      </ul>
                      
                      {/* Key insight box with glow */}
                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 flex items-start">
                        <div className="relative mr-2 mt-0.5">
                          <Info size={16} className="text-blue-400" />
                          <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-30 -z-10"></div>
                        </div>
                        <div className="text-sm text-blue-300">
                          <span className="font-medium text-blue-400 block mb-1">Ключевой инсайт:</span>
                          Согласно исследованиям, на практике наилучшие результаты показывает комбинация нескольких моделей, дополняющих друг друга.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Section 2 - Current active section */}
                <div className="backdrop-blur-md bg-gray-800/30 border border-blue-500/30 rounded-xl overflow-hidden shadow-lg relative">
                  {/* Subtle glow effect on the border */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 rounded-xl border border-blue-500 blur-sm opacity-50"></div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start mb-3">
                      <div className="relative rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 bg-blue-600 text-white">
                        <span className="text-sm font-medium">2</span>
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-40 -z-10 animate-pulse"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-white">Сбор и подготовка данных для ИИ-аналитики</h3>
                    </div>
                    
                    <div className="ml-9">
                      <p className="text-gray-300 mb-3">
                        Эффективность прогнозных моделей напрямую зависит от качества данных, на которых они обучаются. ИИ-агенты способны работать с разнообразными источниками:
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-700/30 backdrop-blur-sm border border-white/10 rounded-lg p-3 transition-all duration-300 hover:bg-gray-700/50">
                          <div className="font-medium text-white mb-1">Поведенческие данные</div>
                          <div className="text-sm text-gray-300">История покупок, просмотры страниц, время на сайте, путь пользователя</div>
                        </div>
                        
                        <div className="bg-gray-700/30 backdrop-blur-sm border border-white/10 rounded-lg p-3 transition-all duration-300 hover:bg-gray-700/50">
                          <div className="font-medium text-white mb-1">Демографические данные</div>
                          <div className="text-sm text-gray-300">Возраст, пол, география, уровень дохода, семейное положение</div>
                        </div>
                        
                        <div className="bg-gray-700/30 backdrop-blur-sm border border-white/10 rounded-lg p-3 transition-all duration-300 hover:bg-gray-700/50">
                          <div className="font-medium text-white mb-1">Данные взаимодействия</div>
                          <div className="text-sm text-gray-300">Отклики на email-рассылки, активность в соцсетях, обращения в поддержку</div>
                        </div>
                        
                        <div className="bg-gray-700/30 backdrop-blur-sm border border-white/10 rounded-lg p-3 transition-all duration-300 hover:bg-gray-700/50">
                          <div className="font-medium text-white mb-1">Контекстуальные данные</div>
                          <div className="text-sm text-gray-300">Сезон, праздники, экономические индикаторы, конкурентная активность</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-3">
                        Перед использованием данных ИИ-агенты выполняют ряд подготовительных операций:
                      </p>
                      
                      <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-4">
                        <li>Очистка от выбросов и некорректных значений</li>
                        <li>Нормализация и стандартизация числовых параметров</li>
                        <li>Кодирование категориальных признаков</li>
                        <li>Заполнение пропущенных значений</li>
                        <li>Выделение ключевых признаков (feature selection)</li>
                      </ul>
                      
                      {/* Interactive example with shimmering effect */}
                      <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-white/10 rounded-lg p-3 mb-4 group">
                        <div className="font-medium text-white mb-2 flex items-center">
                          <div className="relative mr-2">
                            <Zap size={16} className="text-yellow-400" />
                            <div className="absolute inset-0 bg-yellow-400 blur-sm opacity-30 -z-10"></div>
                          </div>
                          Интерактивный пример:
                        </div>
                        <div className="bg-black/30 rounded-lg border border-white/5 p-3 overflow-x-auto">
                          <pre className="text-xs text-gray-300"><code>
{`# Псевдокод для предобработки данных
import pandas as pd
from sklearn.preprocessing import StandardScaler

# Загрузка данных
data = pd.read_csv('customer_data.csv')

# Очистка выбросов
data = data[(data['session_duration'] < data['session_duration'].quantile(0.99)) &
            (data['order_value'] < data['order_value'].quantile(0.99))]

# Заполнение пропусков
data['age'].fillna(data['age'].median(), inplace=True)

# Нормализация числовых данных
scaler = StandardScaler()
data[['session_duration', 'order_value', 'visits_count']] = scaler.fit_transform(
    data[['session_duration', 'order_value', 'visits_count']]
)

# Кодирование категорий
data = pd.get_dummies(data, columns=['device_type', 'traffic_source'])

print(f"Данные готовы. Форма: {data.shape}")`}
                          </code></pre>
                        </div>
                        <div className="mt-2 text-center">
                          <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                            Попробовать в интерактивном редакторе →
                          </button>
                        </div>
                      </div>
                      
                      {/* Continue button with glow effect */}
                      <button 
                        className={`relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg shadow-lg transition-all duration-300 w-full
                          ${hoveredElements.continueBtn ? 'shadow-[0_0_15px_rgba(139,92,246,0.3)]' : ''}`}
                        onMouseEnter={() => handleHover('continueBtn', true)}
                        onMouseLeave={() => handleHover('continueBtn', false)}
                        onClick={() => markSectionComplete(1)}
                      >
                        Продолжить урок
                        {hoveredElements.continueBtn && (
                          <div className="absolute inset-0 -z-10">
                            <div className="absolute inset-0 bg-purple-600 rounded-lg blur-xl opacity-40 animate-pulse"></div>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Section 3 - Locked */}
                <div className="backdrop-blur-md bg-gray-800/20 border border-white/5 rounded-xl overflow-hidden shadow-lg opacity-70">
                  <div className="p-4">
                    <div className="flex items-start mb-3">
                      <div className="rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 bg-gray-700 text-gray-400">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-400">Обучение и оптимизация моделей</h3>
                    </div>
                    
                    <div className="ml-9">
                      <p className="text-gray-500 mb-1">
                        Методы обучения прогнозных моделей и оптимизации их производительности для достижения максимальной точности прогнозов.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Section 4 - Locked */}
                <div className="backdrop-blur-md bg-gray-800/20 border border-white/5 rounded-xl overflow-hidden shadow-lg opacity-70">
                  <div className="p-4">
                    <div className="flex items-start mb-3">
                      <div className="rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 bg-gray-700 text-gray-400">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-400">Интеграция с маркетинговыми платформами</h3>
                    </div>
                    
                    <div className="ml-9">
                      <p className="text-gray-500 mb-1">
                        Способы подключения прогнозных моделей к рекламным платформам и CRM-системам для автоматизации принятия решений.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                <button className="backdrop-blur-md bg-white/5 border border-white/10 text-white py-2 px-4 rounded-lg flex items-center transition-all duration-300 hover:bg-white/10">
                  <ChevronLeft size={16} className="mr-1" /> Предыдущий урок
                </button>
                
                <button className="backdrop-blur-md bg-white/5 border border-white/10 text-white py-2 px-4 rounded-lg flex items-center transition-all duration-300 hover:bg-white/10">
                  Следующий урок <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </>
          )}
        </div>

        <div className={`transition-all duration-500 ease-out ${activeTab === 'materials' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute pointer-events-none'}`}>
          {activeTab === 'materials' && (
            <>
              <h3 className="text-xl font-bold mb-4 text-white">Дополнительные материалы</h3>
              
              <div className="space-y-4 mb-6">
                {/* Material 1 with glow effect */}
                <div 
                  className={`backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl p-4 flex items-center justify-between transition-all duration-300 
                  ${hoveredElements.material1 ? 'bg-gray-800/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : ''}`}
                  onMouseEnter={() => handleHover('material1', true)}
                  onMouseLeave={() => handleHover('material1', false)}
                >
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="bg-blue-900/60 p-2 rounded-lg">
                        <FileText size={20} className="text-blue-400" />
                      </div>
                      <div className="absolute inset-0 bg-blue-500 blur-md opacity-20 -z-10"></div>
                    </div>
                    <div>
                      <div className="font-medium text-white">Руководство по прогнозным моделям</div>
                      <div className="text-xs text-gray-400">PDF, 2.4 MB • 12 страниц</div>
                    </div>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Download size={18} />
                  </button>
                </div>
                
                {/* Material 2 with glow effect */}
                <div 
                  className={`backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl p-4 flex items-center justify-between transition-all duration-300 
                  ${hoveredElements.material2 ? 'bg-gray-800/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : ''}`}
                  onMouseEnter={() => handleHover('material2', true)}
                  onMouseLeave={() => handleHover('material2', false)}
                >
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="bg-green-900/60 p-2 rounded-lg">
                        <FileText size={20} className="text-green-400" />
                      </div>
                      <div className="absolute inset-0 bg-green-500 blur-md opacity-20 -z-10"></div>
                    </div>
                    <div>
                      <div className="font-medium text-white">Датасет для практики</div>
                      <div className="text-xs text-gray-400">CSV, 1.8 MB • 5,000 записей</div>
                    </div>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Download size={18} />
                  </button>
                </div>
                
                {/* Material 3 with glow effect */}
                <div 
                  className={`backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl p-4 flex items-center justify-between transition-all duration-300 
                  ${hoveredElements.material3 ? 'bg-gray-800/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : ''}`}
                  onMouseEnter={() => handleHover('material3', true)}
                  onMouseLeave={() => handleHover('material3', false)}
                >
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="bg-purple-900/60 p-2 rounded-lg">
                        <FileText size={20} className="text-purple-400" />
                      </div>
                      <div className="absolute inset-0 bg-purple-500 blur-md opacity-20 -z-10"></div>
                    </div>
                    <div>
                      <div className="font-medium text-white">Notebook с примерами кода</div>
                      <div className="text-xs text-gray-400">Jupyter Notebook, 450 KB</div>
                    </div>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Download size={18} />
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-white">Полезные ссылки</h3>
              <div className="space-y-3 mb-6">
                <a 
                  href="#" 
                  className={`backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-lg p-3 flex items-center text-blue-400 transition-all duration-300 
                  ${hoveredElements.link1 ? 'bg-gray-800/50 text-blue-300' : ''}`}
                  onMouseEnter={() => handleHover('link1', true)}
                  onMouseLeave={() => handleHover('link1', false)}
                >
                  <ExternalLink size={16} className="mr-2" />
                  <span>Документация по библиотеке scikit-learn</span>
                </a>
                
                <a 
                  href="#" 
                  className={`backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-lg p-3 flex items-center text-blue-400 transition-all duration-300 
                  ${hoveredElements.link2 ? 'bg-gray-800/50 text-blue-300' : ''}`}
                  onMouseEnter={() => handleHover('link2', true)}
                  onMouseLeave={() => handleHover('link2', false)}
                >
                  <ExternalLink size={16} className="mr-2" />
                  <span>Блог по прогнозной аналитике в маркетинге</span>
                </a>
                
                <a 
                  href="#" 
                  className={`backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-lg p-3 flex items-center text-blue-400 transition-all duration-300 
                  ${hoveredElements.link3 ? 'bg-gray-800/50 text-blue-300' : ''}`}
                  onMouseEnter={() => handleHover('link3', true)}
                  onMouseLeave={() => handleHover('link3', false)}
                >
                  <ExternalLink size={16} className="mr-2" />
                  <span>Видеокурс по подготовке данных для ML-моделей</span>
                </a>
              </div>
            </>
          )}
        </div>

        <div className={`transition-all duration-500 ease-out ${activeTab === 'discussion' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute pointer-events-none'}`}>
          {activeTab === 'discussion' && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Обсуждение урока</h3>
                <div className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full text-sm border border-blue-500/20">
                  42 комментария
                </div>
              </div>
              
              {/* Comment form with glassmorphism */}
              <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4 mb-6">
                <div className="mb-3">
                  <label htmlFor="comment" className="block text-gray-300 text-sm font-medium mb-2">Ваш комментарий</label>
                  <textarea 
                    id="comment" 
                    rows="3" 
                    className="w-full rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 text-white p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none placeholder-gray-500"
                    placeholder="Поделитесь своими мыслями или задайте вопрос..."
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button 
                    className={`relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg shadow-lg transition-all duration-300
                    ${hoveredElements.commentBtn ? 'shadow-[0_0_15px_rgba(139,92,246,0.3)]' : ''}`}
                    onMouseEnter={() => handleHover('commentBtn', true)}
                    onMouseLeave={() => handleHover('commentBtn', false)}
                  >
                    Отправить
                    {hoveredElements.commentBtn && (
                      <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-purple-600 rounded-lg blur-xl opacity-40 animate-pulse"></div>
                      </div>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Comments list with glassmorphism */}
              <div className="space-y-4">
                {/* Comment 1 */}
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-2"></div>
                      <div>
                        <div className="font-medium text-white">Александр К.</div>
                        <div className="text-xs text-gray-400">2 часа назад</div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                      Преподаватель
                    </div>
                  </div>
                  <div className="text-gray-300 mb-3">
                    Отличный вопрос от Марии! Да, для e-commerce действительно лучше всего работают ансамблевые модели. В таких случаях я рекомендую комбинировать модели конверсии и LTV для получения более полной картины.
                  </div>
                  <div className="flex items-center text-sm">
                    <button className="text-gray-400 hover:text-blue-400 transition-colors flex items-center mr-4">
                      <ThumbsUp size={14} className="mr-1" /> 12
                    </button>
                    <button className="text-gray-400 hover:text-blue-400 transition-colors flex items-center mr-4">
                      <ThumbsDown size={14} className="mr-1" /> 0
                    </button>
                    <button className="text-gray-400 hover:text-blue-400 transition-colors">
                      Ответить
                    </button>
                  </div>
                </div>
                
                {/* Comment 2 */}
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 mr-2"></div>
                      <div>
                        <div className="font-medium text-white">Мария С.</div>
                        <div className="text-xs text-gray-400">5 часов назад</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-300 mb-3">
                    Подскажите, для e-commerce какие модели обычно дают лучший результат? У меня интернет-магазин косметики, и я хочу применить прогнозную аналитику для повышения конверсии.
                  </div>
                  <div className="flex items-center text-sm">
                    <button className="text-gray-400 hover:text-blue-400 transition-colors flex items-center mr-4">
                      <ThumbsUp size={14} className="mr-1" /> 8
                    </button>
                    <button className="text-gray-400 hover:text-blue-400 transition-colors flex items-center mr-4">
                      <ThumbsDown size={14} className="mr-1" /> 0
                    </button>
                    <button className="text-gray-400 hover:text-blue-400 transition-colors">
                      Ответить
                    </button>
                  </div>
                </div>
                
                {/* Comment 3 */}
                <div className="backdrop-blur-md bg-gray-800/30 border border-white/10 rounded-xl shadow-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mr-2"></div>
                      <div>
                        <div className="font-medium text-white">Дмитрий В.</div>
                        <div className="text-xs text-gray-400">вчера</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-300 mb-3">
                    В примере с псевдокодом есть небольшая ошибка. Для нормализации числовых данных лучше использовать MinMaxScaler, если параметры имеют разные шкалы. StandardScaler больше подходит для нормального распределения.
                  </div>
                  <div className="flex items-center text-sm">
                    <button className="text-gray-400 hover:text-blue-400 transition-colors flex items-center mr-4">
                      <ThumbsUp size={14} className="mr-1" /> 15
                    </button>
                    <button className="text-gray-400 hover:text-blue-400 transition-colors flex items-center mr-4">
                      <ThumbsDown size={14} className="mr-1" /> 2
                    </button>
                    <button className="text-gray-400 hover:text-blue-400 transition-colors">
                      Ответить
                    </button>
                  </div>
                </div>
                
                {/* Show more button */}
                <button className="backdrop-blur-md bg-gray-800/50 border border-white/10 rounded-lg p-3 text-blue-400 w-full hover:bg-gray-800/70 transition-all duration-300">
                  Показать больше комментариев
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Bottom action bar with glassmorphism */}
      <div className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-gray-900/80 border-t border-white/10 px-4 py-3 z-20">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="text-gray-300 hover:text-blue-400 transition-colors">
              <Bookmark size={20} />
            </button>
            <button className="text-gray-300 hover:text-blue-400 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
          
          <div className="flex items-center">
            <div className="text-sm text-gray-400 mr-4">
              <span className="text-white font-medium">2/4</span> разделов пройдено
            </div>
            <button 
              className={`relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300
              ${hoveredElements.nextBtn ? 'shadow-[0_0_15px_rgba(139,92,246,0.3)]' : ''}`}
              onMouseEnter={() => handleHover('nextBtn', true)}
              onMouseLeave={() => handleHover('nextBtn', false)}
            >
              Далее
              {hoveredElements.nextBtn && (
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-purple-600 rounded-lg blur-xl opacity-40 animate-pulse"></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkLessonPage;
