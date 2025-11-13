import React from "react";
import {
  Clock,
  BatteryCharging,
  Zap,
  Sun,
  SkipForward,
  Play,
  Volume2,
  Info,
  RefreshCcw,
} from "lucide-react";

// Card 1: Aspiradora Robot
const DormitoryCard: React.FC = () => (
  <div className="bg-white rounded-3xl p-6 shadow-xl w-full">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-gray-800">Dormitorios</h3>
      {/* Status indicator (On/Active) */}
      <div className="w-4 h-4 rounded-full bg-black"></div>
    </div>
    <p className="text-sm text-gray-500 mb-4">Aspiradora robot</p>
    <div className="my-6">
      {/* Placeholder for the Robot Vacuum image */}
      <div className="h-40 bg-gray-100 rounded-2xl flex items-center justify-center p-4"></div>
    </div>
    <div className="flex justify-between items-center text-center mt-4">
      <div className="flex flex-col items-center">
        <div className="flex items-center text-gray-600 mb-1">
          <Zap className="w-4 h-4 mr-1 text-indigo-600" />
          <span className="text-sm font-semibold">75m²</span>
        </div>
        <span className="text-xs text-gray-500">área limpiada</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center text-gray-600 mb-1">
          <Clock className="w-4 h-4 mr-1 text-indigo-600" />
          <span className="text-sm font-semibold">20min</span>
        </div>
        <span className="text-xs text-gray-500">tiempo</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center text-gray-600 mb-1">
          <BatteryCharging className="w-4 h-4 mr-1 text-indigo-600" />
          <span className="text-sm font-semibold">70%</span>
        </div>
        <span className="text-xs text-gray-500">batería</span>
      </div>
    </div>
  </div>
);

// Card 2: Lámpara Inteligente
const LivingRoomCard: React.FC = () => (
  <div className="bg-gray-200 rounded-3xl p-6 shadow-xl w-full flex flex-col">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-gray-800">Sala de estar</h3>
      <Info className="w-4 h-4 text-gray-600 cursor-pointer" />
    </div>
    <div className="flex-grow flex flex-col items-center justify-center my-6">
      <div className="w-32 h-32 flex items-center justify-center"></div>
      <p className="text-sm text-gray-700 mt-2">Lámpara inteligente</p>
    </div>
    <div className="flex items-center justify-between mt-auto pt-4">
      {/* Brightness Slider */}
      <div className="flex items-center">
        <Sun className="w-5 h-5 text-yellow-600 mr-2" />
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="60"
          className="w-24 h-2 appearance-none bg-gray-400 rounded-full focus:outline-none"
        />
      </div>
      <span className="font-bold text-gray-800">60%</span>
      {/* Toggle switch (ON/OFF) */}
      <div className="w-10 h-6 rounded-full bg-black flex items-center p-1 cursor-pointer">
        <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
      </div>
    </div>
  </div>
);

// Card 3: Altavoces
const SpeakerCard: React.FC = () => (
  <div className="bg-white rounded-3xl p-6 shadow-xl w-full">
    <div className="flex justify-end items-center mb-4">
      {/* Status indicator (On/Active) */}
      <div className="w-4 h-4 rounded-full bg-black"></div>
    </div>
    <h3 className="font-semibold text-gray-800 mb-6">Altavoces</h3>
    <div className="flex justify-center my-6">
      {/* User/Current playing image */}
      <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden"></div>
    </div>
    <div className="flex justify-center space-x-4 mt-8 items-center">
      {/* Controls */}
      <RefreshCcw className="w-5 h-5 text-gray-500 hover:text-gray-800 cursor-pointer" />{" "}
      {/* Shuffle/Repeat placeholder */}
      <SkipForward className="w-5 h-5 transform rotate-180 text-gray-500 hover:text-gray-800 cursor-pointer" />{" "}
      {/* Skip Back */}
      <button className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-150">
        <Play className="w-5 h-5 fill-current" />
      </button>{" "}
      {/* Play/Pause Button */}
      <SkipForward className="w-5 h-5 text-gray-500 hover:text-gray-800 cursor-pointer" />{" "}
      {/* Skip Forward */}
      <Volume2 className="w-5 h-5 text-gray-500 hover:text-gray-800 cursor-pointer" />
    </div>
  </div>
);

export { DormitoryCard, LivingRoomCard, SpeakerCard };