import React from "react";
import {
  Thermometer,
  Droplet,
  Activity,
  Sun,
  Volume2,
  LucideIcon,
  ChevronRight,
} from "lucide-react";

interface SensorItemProps {
  icon: LucideIcon;
  title: string;
  count: number;
}

const SensorItem: React.FC<SensorItemProps> = ({
  icon: Icon,
  title,
}) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md cursor-pointer hover:bg-gray-50 transition duration-150">
    <div className="flex items-center">
      {/* Icon Area */}
      <div className="p-2 bg-gray-100 rounded-lg mr-4">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
      {/* Text Info */}
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
      </div>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-500" />
  </div>
);

const SensorSection: React.FC = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">Sensores</h3>
    <div className="space-y-3">
      <SensorItem icon={Thermometer} title="Sensor de temperatura"/>
      <SensorItem icon={Droplet} title="Sensor de humedad" />
      <SensorItem icon={Sun} title="Sensor de luz" />
      <SensorItem icon={Volume2} title="Sensor de sonido" />
    </div>
  </div>
);

export default SensorSection;
