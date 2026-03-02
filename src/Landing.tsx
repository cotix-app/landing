import { motion } from "framer-motion";
import React from "react";
import LaunchCountdown from "./components/LaunchCountdown";

const Landing: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden relative selection:bg-emerald-500 selection:text-black">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-500/10 blur-[160px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold tracking-tight text-lg">Cotix</span>
          <a
            href="https://cotix.vercel.app"
            className="hidden md:inline-flex bg-emerald-500 text-slate-900 px-5 py-2 rounded-xl font-medium hover:bg-emerald-400 transition"
          >
            Probar ahora
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-40 pb-28 max-w-6xl mx-auto text-center">
        <p className="text-emerald-400 text-sm mb-4 tracking-wide">
          Para técnicos en refrigeración, HVAC y servicios en campo
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          Cotizá trabajos técnicos en 2 minutos desde el celular.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
        >
          Generá un presupuesto profesional y enviá un PDF claro antes de salir del lugar.
        </motion.p>

        <motion.a
          href="https://cotix.vercel.app"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex mt-10 items-center justify-center px-10 py-4 text-lg font-semibold text-slate-900 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-all duration-300"
        >
          Probar ahora
        </motion.a>

        <p className="text-slate-500 text-sm mt-4">
          Sin registro complicado. Empezá en segundos.
        </p>
      </section>

      <LaunchCountdown />

      {/* PROBLEMA */}
      <section className="py-24 px-6 bg-slate-900/60 border-t border-slate-800 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-12">
          ¿Te pasa esto?
        </h2>

        <div className="space-y-6 text-slate-400 text-lg max-w-3xl mx-auto">
          <p>¿Seguís mandando precios por WhatsApp desordenados?</p>
          <p>¿Anotás en papel y después pasás todo en limpio?</p>
          <p>¿El cliente duda porque no ve algo formal?</p>
        </div>
      </section>

      {/* FLUJO VISUAL */}
      <section className="py-28 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-16">
          Cómo funciona
        </h2>

        <div className="grid sm:grid-cols-3 gap-10">
          {[
            { step: "1", text: "Cargás cliente y equipo" },
            { step: "2", text: "Agregás tareas y se calcula el total" },
            { step: "3", text: "Generás y enviás el PDF profesional" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-emerald-400 text-3xl font-bold mb-4">
                {item.step}
              </div>
              <p className="text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-28 px-6 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Más rápido",
              desc: "Cotizá en el momento sin volver a casa para armar el presupuesto.",
            },
            {
              title: "Más profesional",
              desc: "Entregá un PDF claro y ordenado que genera confianza.",
            },
            {
              title: "Más claridad",
              desc: "El cliente ve tareas y totales sin confusiones.",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{b.title}</h3>
              <p className="text-slate-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-2xl md:text-5xl font-semibold mb-6">
          Cotizá mejor desde hoy.
        </h2>

        <p className="text-slate-400 mb-10">
          Mostrate profesional en cada trabajo.
        </p>

        <a
          href="https://cotix.vercel.app"
          className="inline-flex items-center justify-center px-12 py-5 text-xl font-semibold text-slate-900 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 hover:scale-105 transition-all duration-300"
        >
          Empezar ahora
        </a>
      </section>

      <footer className="border-t border-slate-800 py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Cotix
      </footer>
    </div>
  );
};

export default Landing;