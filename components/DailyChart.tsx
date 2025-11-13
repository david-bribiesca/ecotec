"use client";

import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

interface DataPoint {
  created_at: string;
  valor: number;
}

const DailyChart: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // 🔹 Obtener solo los datos del día actual
        const { data, error } = await supabase
        .from("hola")
        .select("created_at, valor")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error al obtener datos:", error);
      } else {
        // 🔹 Convertir timestamps legibles
        const formattedData = data.map((item) => ({
          ...item,
          created_at: new Date(item.created_at).toLocaleTimeString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        }));
        setData(formattedData);
      }

      setLoading(false);
    };

    fetchData();

    // 🔁 Escuchar cambios en tiempo real
    const subscription = supabase
      .channel("realtime-hola")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "hola" },
        (payload) => {
          console.log("Cambio detectado:", payload);
          fetchData(); // Actualizar datos
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6 h-full">
      <h2 className="text-xl font-semibold text-green-700 mb-4">📊 Datos del día</h2>

      {loading ? (
        <p className="text-gray-500">Cargando datos...</p>
      ) : data.length === 0 ? (
        <p className="text-gray-500">No hay datos registrados hoy.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="valor"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ fill: "#16a34a" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DailyChart;
