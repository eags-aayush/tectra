import React, { useState } from 'react';
import { Settings, Upload, Play, Zap, Globe, Moon, MapPin, Sliders, Github, Mail, Users, Sun } from 'lucide-react';
import Logo from './assets/logo.png'; // Ensure you have a logo image in the assets folder
import MoonImg from './assets/moon.webp'; // Ensure you have a moon image in the assets folder

function App() {
  const [activeToggle, setActiveToggle] = useState('earth');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [analysisConfig, setAnalysisConfig] = useState({
    sensitivity: 70,
    threshold: 50,
    accuracy: 85
  });

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File uploaded:', file.name);
    }
  };

  const runAnalysis = () => {
    console.log('Running analysis with config:', analysisConfig);
  };

  // Enhanced color palette
  const colors = {
    dark: {
      primary: 'from-cyan-400 to-blue-500',
      secondary: 'from-violet-400 to-purple-500',
      accent: 'from-emerald-400 to-teal-500',
      background: 'bg-slate-900',
      surface: 'bg-slate-800/40',
      border: 'border-slate-700/50',
      text: {
        primary: 'text-slate-100',
        secondary: 'text-slate-300',
        muted: 'text-slate-400'
      }
    },
    light: {
      primary: 'from-blue-600 to-indigo-600',
      secondary: 'from-purple-600 to-pink-600',
      accent: 'from-teal-600 to-cyan-600',
      background: 'bg-slate-50',
      surface: 'bg-white/80',
      border: 'border-slate-200',
      text: {
        primary: 'text-slate-900',
        secondary: 'text-slate-700',
        muted: 'text-slate-500'
      }
    }
  };

  const theme = isDarkTheme ? colors.dark : colors.light;

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme.background} ${theme.text.primary}`}>
      {/* Animated Background */}
      <div className={`fixed inset-0 z-0 transition-opacity duration-500 ${isDarkTheme ? 'opacity-100' : 'opacity-10'
        }`}>
        {/* Deep Space Background */}
        <div className="absolute inset-0 bg-slate-950"></div>

        {/* Animated Stars */}
        <div className="absolute inset-0 stars-layer-1"></div>
        <div className="absolute inset-0 stars-layer-2"></div>
        <div className="absolute inset-0 stars-layer-3"></div>

        {/* Nebula Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-900/10 to-violet-900/15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(139,92,246,0.12),transparent_50%)]"></div>

        {/* Sun Effect */}
        <div className="absolute top-20 right-20 w-32 h-32 sun-glow"></div>

        {/* Moon Effect */}
        <div className="absolute top-40 left-20 w-24 h-24 moon-glow"></div>

        {/* Cosmic Dust */}
        <div className="absolute inset-0 cosmic-dust"></div>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${isDarkTheme
          ? 'bg-slate-900/80 border-cyan-500/20'
          : 'bg-white/90 border-slate-200'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <img src={Logo} alt="Logo" width={50} className='rounded-full' />
            {/* Center - Project Name */}
            <div className="flex-1 flex justify-center">
              <h1 className={`text-3xl font-bold bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent tracking-wider`}>
                TECTRA
              </h1>
            </div>

            {/* Settings */}
            <div className="flex items-center space-x-2">
              <button className={`p-2 rounded-lg transition-all duration-200 hover:bg-slate-700/50 ${theme.text.muted} hover:text-cyan-400 ${!isDarkTheme && 'hover:bg-slate-100'}`}>
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent ${isDarkTheme
              ? 'from-slate-100 via-cyan-200 to-violet-200'
              : 'from-slate-900 via-blue-600 to-purple-600'
            }`}>
            TECTRA
          </h2>
          <p className={`text-xl md:text-2xl mb-8 font-light ${theme.text.secondary}`}>
            AI/ML Earthquake Tracking for Earth and Moon
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"></div>
            <img src={Logo} alt="Logo" width={50} className='rounded-full' />
            <div className="h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent w-32"></div>
          </div>
        </div>
      </section>

      {/* Toggle Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div className={`backdrop-blur-sm rounded-full p-2 border transition-all duration-500 shadow-lg ${isDarkTheme
                ? 'bg-slate-800/60 border-cyan-500/30'
                : 'bg-white/80 border-slate-300'
              }`}>
              <div className="flex">
                <button
                  onClick={() => setActiveToggle('earth')}
                  className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 ${activeToggle === 'earth'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.6)]'
                      : isDarkTheme
                        ? 'text-slate-400 hover:text-cyan-400 hover:bg-slate-700/30'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100/50'
                    }`}
                >
                  <Globe className="h-5 w-5" />
                  <span>Earth</span>
                </button>
                <button
                  onClick={() => setActiveToggle('moon')}
                  className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 ${activeToggle === 'moon'
                      ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.6)]'
                      : isDarkTheme
                        ? 'text-slate-400 hover:text-violet-400 hover:bg-slate-700/30'
                        : 'text-slate-600 hover:text-purple-600 hover:bg-slate-100/50'
                    }`}
                >
                  <Moon className="h-5 w-5" />
                  <span>Moon</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload + Image Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 shadow-xl ${isDarkTheme
                ? 'bg-slate-800/40 border-cyan-500/30'
                : 'bg-white/80 border-slate-300'
              }`}>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Upload Data</h3>
              <div className="space-y-6">
                <div className={`border-2 border-dashed rounded-xl p-8 text-center hover:border-cyan-400 transition-all duration-200 ${isDarkTheme ? 'border-slate-600 hover:bg-slate-700/20' : 'border-slate-400 hover:bg-slate-50'
                  }`}>
                  <Upload className={`h-12 w-12 mx-auto mb-4 ${theme.text.muted}`} />
                  <p className={`mb-4 ${theme.text.secondary}`}>Upload satellite imagery</p>
                  <input
                    type="file"
                    accept=".jpeg,.png,.tiff,.geotiff"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Choose File
                  </label>
                  <p className={`text-sm mt-2 ${theme.text.muted}`}>
                    Supports: .jpeg, .png, .tiff, .geotiff
                  </p>
                </div>

                <div className="flex justify-center space-x-8">
                  <div className="border p-3 rounded-lg cursor-pointer flex items-center space-x-3">
                    <div className="cursor-pointer w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
                    <button className={ `{isDarkTheme ? 'text-white' : 'text-black'}`}>Before image (0)</button>
                  </div>
                  <div className="border p-3 rounded-lg cursor-pointer flex items-center space-x-3">
                    <div className="cursor-pointer w-4 h-4 bg-gradient-to-r from-rose-400 to-red-500 rounded-full shadow-lg"></div>
                    <button className={isDarkTheme ? 'text-white' : 'text-black'}>After image (0)</button>
                  </div>

                  <div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and AOI Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 shadow-xl ${isDarkTheme
              ? 'bg-slate-800/40 border-cyan-500/30'
              : 'bg-white/80 border-slate-300'
            }`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-cyan-400">
                {activeToggle === 'earth' ? 'Earth Map' : 'Moon Map'}
              </h3>
              <div className="flex items-center space-x-2">
                <MapPin className={`h-5 w-5 ${theme.text.muted}`} />
                <span className={`text-sm ${theme.text.muted}`}>AOI Selection</span>
              </div>
            </div>
            <div className="relative">
              <div className={`h-96 rounded-xl border overflow-hidden transition-all duration-500 shadow-inner ${isDarkTheme
                  ? 'bg-slate-700/50 border-slate-600'
                  : 'bg-slate-200/50 border-slate-400'
                }`}>
                <iframe
                  src={activeToggle === 'earth'
                    ? 'https://solarsystem.nasa.gov/gltf_embed/2393/'
                    : 'https://solarsystem.nasa.gov/gltf_embed/2366/'
                  }
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-xl"
                  title={`Interactive 3D ${activeToggle === 'earth' ? 'Earth' : 'Moon'} Model`}
                />
              </div>
              <div className="mt-4 text-center">
                <p className={`text-sm ${theme.text.muted}`}>
                  Interactive 3D {activeToggle === 'earth' ? 'Earth' : 'Moon'} Model - Click to select Area of Interest
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Configuration Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 shadow-xl ${isDarkTheme
              ? 'bg-slate-800/40 border-cyan-500/30'
              : 'bg-white/80 border-slate-300'
            }`}>
            <div className="flex items-center space-x-2 mb-6">
              <Sliders className="h-6 w-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-cyan-400">Analysis Configuration</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme.text.secondary}`}>
                  Sensitivity: {analysisConfig.sensitivity}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={analysisConfig.sensitivity}
                  onChange={(e) => setAnalysisConfig({
                    ...analysisConfig,
                    sensitivity: Number(e.target.value)
                  })}
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer slider-thumb ${isDarkTheme ? 'bg-slate-700' : 'bg-slate-300'
                    }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme.text.secondary}`}>
                  Threshold: {analysisConfig.threshold}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={analysisConfig.threshold}
                  onChange={(e) => setAnalysisConfig({
                    ...analysisConfig,
                    threshold: Number(e.target.value)
                  })}
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer slider-thumb ${isDarkTheme ? 'bg-slate-700' : 'bg-slate-300'
                    }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme.text.secondary}`}>
                  Accuracy: {analysisConfig.accuracy}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={analysisConfig.accuracy}
                  onChange={(e) => setAnalysisConfig({
                    ...analysisConfig,
                    accuracy: Number(e.target.value)
                  })}
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer slider-thumb ${isDarkTheme ? 'bg-slate-700' : 'bg-slate-300'
                    }`}
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={runAnalysis}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg hover:from-cyan-600 hover:to-violet-600 transition-all duration-200 flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:scale-[1.02]"
                >
                  <Play className="h-5 w-5" />
                  <span>Run Analysis</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 py-12 px-4 sm:px-6 lg:px-8 border-t transition-all duration-500 ${isDarkTheme ? 'border-slate-700/50' : 'border-slate-300'
        }`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold text-cyan-400 mb-4">Tectra</h4>
              <p className={theme.text.muted}>
                AI/ML Earthquake Detection and Tracking Platform
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-violet-400 mb-4">Team</h4>
              <div className={`flex items-center space-x-2 ${theme.text.muted}`}>
                <Users className="h-4 w-4" />
                <span>Team Tectra</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-cyan-400 mb-4">Links</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/eags-aayush/tectra" target='_blank' className={`p-2 rounded-lg transition-all duration-200 ${isDarkTheme
                    ? 'text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                  }`}>
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className={`p-2 rounded-lg transition-all duration-200 ${isDarkTheme
                    ? 'text-slate-400 hover:text-violet-400 hover:bg-slate-700/50'
                    : 'text-slate-600 hover:text-purple-600 hover:bg-slate-100'
                  }`}>
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className={`mt-8 pt-8 border-t text-center transition-all duration-500 ${isDarkTheme
              ? 'border-slate-700/50'
              : 'border-slate-300'
            }`}>
            <p className={theme.text.muted}>&copy; 2025 Tectra. Built for Bharatiya Antariksh Hackathon 2025.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;