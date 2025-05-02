import React, { useState } from 'react';

const DarkDesignSystem = () => {
  // Animation variants for hover effects
  const [hoveredButton, setHoveredButton] = useState(null);
  
  // Color palette for dark theme
  const colors = {
    primary: {
      name: 'Синий (Primary)',
      hex: '#3B82F6',
      tailwind: 'bg-blue-500'
    },
    secondary: {
      name: 'Фиолетовый (Secondary)',
      hex: '#8B5CF6',
      tailwind: 'bg-purple-500'
    },
    accent: {
      name: 'Зеленый (Accent)',
      hex: '#10B981',
      tailwind: 'bg-green-500'
    },
    warning: {
      name: 'Оранжевый (Warning)',
      hex: '#F59E0B',
      tailwind: 'bg-amber-500'
    },
    error: {
      name: 'Красный (Error)',
      hex: '#EF4444',
      tailwind: 'bg-red-500'
    },
    darkBg: {
      name: 'Темный фон (Background)',
      hex: '#121212',
      tailwind: 'bg-gray-900'
    },
    darkSurface: {
      name: 'Темная поверхность (Surface)',
      hex: '#1E1E1E',
      tailwind: 'bg-gray-800'
    },
    darkElevated: {
      name: 'Приподнятая поверхность',
      hex: '#2D2D2D',
      tailwind: 'bg-gray-700'
    },
    lightText: {
      name: 'Светлый текст (Primary)',
      hex: '#F9FAFB',
      tailwind: 'text-gray-50'
    },
    mediumText: {
      name: 'Средний текст (Secondary)',
      hex: '#9CA3AF',
      tailwind: 'text-gray-400'
    }
  };

  // Typography examples with enhanced styling
  const typography = [
    { name: 'Display', className: 'text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600', sample: 'ИИ-агенты будущего' },
    { name: 'H1', className: 'text-2xl font-bold text-white tracking-tight', sample: 'Заголовок первого уровня' },
    { name: 'H2', className: 'text-xl font-bold text-white tracking-tight', sample: 'Заголовок второго уровня' },
    { name: 'H3', className: 'text-lg font-semibold text-white', sample: 'Заголовок третьего уровня' },
    { name: 'Body', className: 'text-base text-gray-300', sample: 'Основной текст интерфейса. Используется для большей части контента приложения.' },
    { name: 'Small', className: 'text-sm text-gray-400', sample: 'Вспомогательный текст для дополнительной информации и подписей.' },
    { name: 'Tiny', className: 'text-xs text-gray-500', sample: 'Мелкий текст для метаданных, сносок и мелких деталей интерфейса.' }
  ];

  // Button variants with glassmorphism and glow effects
  const buttons = [
    { 
      name: 'Glow Primary', 
      className: 'bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/50 hover:shadow-lg',
      hoverEffect: 'shadow-[0_0_15px_rgba(59,130,246,0.5)]'
    },
    { 
      name: 'Glow Secondary', 
      className: 'bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-purple-500/50 hover:shadow-lg',
      hoverEffect: 'shadow-[0_0_15px_rgba(139,92,246,0.5)]'
    },
    { 
      name: 'Glass Outline', 
      className: 'border border-white/20 backdrop-blur-sm bg-white/10 text-white hover:bg-white/20 font-medium py-2 px-4 rounded-lg transition-all duration-300',
      hoverEffect: 'shadow-[0_0_10px_rgba(255,255,255,0.2)]'
    },
    { 
      name: 'Gradient', 
      className: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-all duration-300',
      hoverEffect: 'shadow-[0_0_15px_rgba(139,92,246,0.5)]'
    },
    { 
      name: 'Minimal', 
      className: 'text-blue-400 hover:text-blue-300 font-medium py-2 px-4 rounded-lg transition-colors duration-300',
      hoverEffect: null
    }
  ];

  // Card variants with glassmorphism effects
  const cards = [
    { 
      name: 'Glass Card', 
      className: 'backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-lg shadow-xl' 
    },
    { 
      name: 'Elevated Dark Card', 
      className: 'bg-gray-800/90 p-4 rounded-lg shadow-xl border-l-4 border-blue-500' 
    },
    { 
      name: 'Gradient Border Card', 
      className: 'bg-gray-800/90 p-4 rounded-lg shadow-xl border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-border' 
    },
    { 
      name: 'Hover Glow Card', 
      className: 'bg-gray-800/90 p-4 rounded-lg shadow-xl transition-all duration-300 hover:shadow-blue-500/30 hover:shadow-lg' 
    }
  ];

  // Form elements with dark theme styling
  const formElements = [
    { 
      name: 'Text Input', 
      element: <input type="text" className="backdrop-blur-sm bg-white/5 border border-white/10 text-white rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none placeholder-gray-500" placeholder="Введите текст" /> 
    },
    { 
      name: 'Checkbox', 
      element: <div className="flex items-center">
        <input type="checkbox" className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 bg-gray-700 border-gray-600" id="checkbox" />
        <label htmlFor="checkbox" className="ml-2 text-gray-300">Опция выбора</label>
      </div> 
    },
    { 
      name: 'Radio Button', 
      element: <div className="flex items-center">
        <input type="radio" className="h-5 w-5 text-blue-600 focus:ring-blue-500 bg-gray-700 border-gray-600" name="radio" id="radio" />
        <label htmlFor="radio" className="ml-2 text-gray-300">Вариант выбора</label>
      </div> 
    },
    { 
      name: 'Select', 
      element: <select className="backdrop-blur-sm bg-white/5 border border-white/10 text-white rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
        <option className="bg-gray-800">Вариант 1</option>
        <option className="bg-gray-800">Вариант 2</option>
        <option className="bg-gray-800">Вариант 3</option>
      </select> 
    }
  ];

  // Badge variants with glow effects
  const badges = [
    { name: 'Glow New', className: 'bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]' },
    { name: 'Glow Complete', className: 'bg-green-500 text-white text-xs px-2 py-0.5 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]' },
    { name: 'Glass In Progress', className: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs px-2 py-0.5 rounded-full' },
    { name: 'Gradient Premium', className: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-0.5 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.5)]' }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-900 text-gray-100">
      <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-8 pb-2 border-b border-gray-700">
        Дизайн-система в темной теме для проекта "ИИ-агенты в маркетинге"
      </h1>
      
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-white">Цветовая палитра</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.values(colors).map((color, index) => (
            <div key={index} className="bg-gray-800/70 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-lg">
              <div className={`h-20 ${color.tailwind}`}></div>
              <div className="p-3">
                <div className="font-medium text-white">{color.name}</div>
                <div className="text-sm text-gray-400">{color.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-white">Типографика</h2>
        <div className="bg-gray-800/70 backdrop-blur-md border border-white/10 rounded-lg shadow-lg p-6 space-y-4">
          {typography.map((type, index) => (
            <div key={index} className="pb-2 border-b border-gray-700">
              <div className="text-sm text-gray-400 mb-1">{type.name} ({type.className})</div>
              <div className={type.className}>{type.sample}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-white">Кнопки со свечением</h2>
        <div className="bg-gray-800/70 backdrop-blur-md border border-white/10 rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {buttons.map((button, index) => (
              <div key={index} className="flex flex-col items-start">
                <button 
                  className={`${button.className} mb-2 ${hoveredButton === index && button.hoverEffect ? button.hoverEffect : ''}`}
                  onMouseEnter={() => setHoveredButton(index)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  {button.name}
                </button>
                <span className="text-xs text-gray-500">{button.name}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center space-x-2 mb-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <span>С иконкой</span>
              </button>
              <span className="text-xs text-gray-500">С иконкой и свечением</span>
            </div>
            
            <div className="flex flex-col items-start">
              <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-medium py-1.5 px-3 rounded-lg text-sm mb-2 shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                Градиентная компактная
              </button>
              <span className="text-xs text-gray-500">Градиентная компактная</span>
            </div>
            
            <div className="flex flex-col items-start">
              <button disabled className="bg-gray-700 text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed mb-2 opacity-60">
                Неактивная
              </button>
              <span className="text-xs text-gray-500">Неактивная</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-white">Карточки с эффектом глассморфизма</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              <div className={card.className}>
                <div className="font-medium mb-2 text-white">Заголовок карточки</div>
                <p className="text-gray-300 text-sm">Пример контента карточки с текстом. Здесь может размещаться основная информация.</p>
                {(index === 1 || index === 2) && (
                  <div className="mt-3 pt-3 border-t border-gray-700 flex justify-between items-center">
                    <span className="text-sm text-gray-400">Дополнительные данные</span>
                    <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">Действие</button>
                  </div>
                )}
              </div>
              <div className="mt-2 text-xs text-gray-500">{card.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-white">Формы в темной теме</h2>
        <div className="bg-gray-800/70 backdrop-blur-md border border-white/10 rounded-lg shadow-lg p-6 space-y-4">
          {formElements.map((item, index) => (
            <div key={index} className="pb-4 border-b border-gray-700">
              <div className="text-sm text-gray-400 mb-2">{item.name}</div>
              {item.element}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-white">Бейджи со свечением</h2>
        <div className="bg-gray-800/70 backdrop-blur-md border border-white/10 rounded-lg shadow-lg p-6">
          <div className="flex flex-wrap gap-6 mb-6">
            {badges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className={badge.className}>{badge.name}</span>
                <span className="text-xs text-gray-500 mt-2">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 text-white">Навигационные элементы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-200">Табы</h3>
            <div className="bg-gray-800/70 backdrop-blur-md border border-white/10 rounded-lg shadow-lg">
              <div className="flex border-b border-gray-700">
                <button className="px-4 py-2 text-blue-400 border-b-2 border-blue-500 font-medium relative">
                  Обзор
                  <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                </button>
                <button className="px-4 py-2 text-gray-400 hover:text-gray-200 transition-colors">
                  Модули
                </button>
                <button className="px-4 py-2 text-gray-400 hover:text-gray-200 transition-colors">
                  Практика
                </button>
              </div>
              <div className="p-4">
                <p className="text-gray-300">Содержимое активной вкладки</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-200">Нижняя навигация (Telegram Mini App)</h3>
            <div className="bg-gray-800/70 backdrop-blur-md border border-white/10 rounded-lg shadow-lg p-4">
              <div className="flex justify-around items-center backdrop-blur-md bg-gray-800/50 rounded-lg p-2 border border-white/5">
                <button className="flex flex-col items-center p-2 text-blue-400">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <div className="absolute inset-0 -z-10 bg-blue-400 opacity-20 blur-md rounded-full"></div>
                  </div>
                  <span className="text-xs mt-1">Главная</span>
                </button>
                
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span className="text-xs mt-1">Модули</span>
                </button>
                
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  <span className="text-xs mt-1">Практика</span>
                </button>
                
                <button className="flex flex-col items-center p-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span className="text-xs mt-1">Профиль</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DarkDesignSystem;
