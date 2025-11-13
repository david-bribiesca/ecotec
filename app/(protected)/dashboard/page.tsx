import React from "react";
import AccommodationSection from "@/components/AccommodationSection";
import {
  DormitoryCard,
  LivingRoomCard,
  SpeakerCard,
} from "@/components/ControlCard";
import { Cloud, Wifi, Zap } from "lucide-react";
import DailyChart from "@/components/DailyChart";

// Componente Header para la información de estado superior derecha
const Header: React.FC = () => (
  <div className="flex items-center justify-end w-full pt-8 px-8 space-x-4">
    <div className="flex items-center bg-white p-2 rounded-xl text-sm font-semibold shadow-sm">
      <Cloud className="w-4 h-4 mr-1 text-gray-600" />
      <span>23°C</span>
    </div>
    <div className="flex items-center bg-white p-2 rounded-xl text-sm font-semibold shadow-sm">
      <Zap className="w-4 h-4 mr-1 text-gray-600" />
      <span>50W</span>
    </div>
    <div className="flex items-center bg-white p-2 rounded-xl text-sm font-semibold shadow-sm">
      <Wifi className="w-4 h-4 mr-1 text-gray-600" />
      <span>80%</span>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* 1. Header (se posiciona en la parte superior del contenido) */}
      <Header />

      <div className="flex w-full px-8 pb-8 space-x-8 mt-4">
        {/* Central Area: Hero Image and Control Cards */}
        <div className="flex-grow flex flex-col">
          {/* Hero Image Section */}
          <div className="h-96 rounded-3xl shadow-xl mb-8 relative overflow-hidden">
            <DailyChart />
          </div>

          {/* Control Cards Section (3 columns) */}
          

        </div>

        {/* Right Sidebar Section (Accommodation) */}
        {/* 'self-start sticky top-8' asegura que esta sección se alinee arriba y se quede fija al hacer scroll */}
        <aside className="w-80 bg-white p-6 rounded-3xl shadow-xl self-start sticky top-8">
          <AccommodationSection />
        </aside>
      </div>
    </div>
  );
};

export default HomePage;