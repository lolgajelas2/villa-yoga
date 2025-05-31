'use client';

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const villas = [
  {
    name: "Villa Indah Balikpapan",
    price: "Rp 1.500.000 / malam",
    image: "/villa1.jpg",
    facilities: ["Kolam renang", "AC", "WiFi", "Dapur lengkap", "Pemandangan laut"]
  },
  {
    name: "Villa Harmoni Laut",
    price: "Rp 2.000.000 / malam",
    image: "/villa2.jpg",
    facilities: ["Jacuzzi", "3 Kamar tidur", "Ruang tamu luas", "Dekat pantai"]
  },
  {
    name: "Villa Tropis Asri",
    price: "Rp 1.200.000 / malam",
    image: "/villa3.jpg",
    facilities: ["Teras pribadi", "Taman tropis", "TV Kabel", "BBQ Area"]
  }
];

const testimonials = [
  { name: "Taka", comment: "Ambatunat.", rating: 1 },
  { name: "Uta", comment: "Ambasing!", rating: 1 },
  { name: "Clift Rival", comment: "Sampean Temenya Rusdi Ya!", rating: 5 }
];

const facilities = [
  { icon: "💦", title: "Kolam Renang Pribadi" },
  { icon: "⏰", title: "Keamanan 24 Jam" },
  { icon: "📶", title: "WiFi Super Cepat" },
  { icon: "🍳", title: "Dapur Modern" },
  { icon: "🌅", title: "Pemandangan Indah" },
  { icon: "🌴", title: "Taman Tropis" },
  { icon: "📺", title: "Smart TV & Home Theater" },
  { icon: "💼", title: "Concierge Eksklusif" }
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToVillas = () => {
    const villasSection = document.getElementById("villas");
    if (villasSection) villasSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-serif text-gray-800 bg-gradient-to-br from-white via-[#fff9f0] to-[#fff3d6]">
      <nav className="flex justify-between items-center px-10 py-6 bg-white/80 backdrop-blur-md shadow-xl sticky top-0 z-50 rounded-b-xl border-b border-yellow-300">
        <h1 className="text-2xl font-extrabold text-yellow-700 tracking-wide">🌟 Villa Yoga Saputra</h1>
        <ul className="flex gap-8 text-base font-semibold text-yellow-800">
          <li><a href="#about" className="hover:text-yellow-600 transition-colors">Tentang</a></li>
          <li><a href="#villas" className="hover:text-yellow-600 transition-colors">Villa</a></li>
          <li><a href="#facilities" className="hover:text-yellow-600 transition-colors">Fasilitas</a></li>
          <li><a href="#contact" className="hover:text-yellow-600 transition-colors">Kontak</a></li>
          <li><a href="#testimonials" className="hover:text-yellow-600 transition-colors">Testimoni</a></li>
        </ul>
      </nav>

      <header className="relative bg-[url('/hero-villa.jpg')] bg-cover bg-center h-[85vh]">
        <div className="absolute inset-0 bg-black/40" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">Liburan Mewah di Balikpapan</h2>
          <p className="text-xl mb-6 max-w-2xl drop-shadow">Rasakan ketenangan dan kemewahan sejati di villa premium milik Yoga Saputra</p>
          <Button onClick={scrollToVillas} className="bg-yellow-500 text-white hover:bg-yellow-600 font-bold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">Lihat Villa</Button>
        </motion.div>
      </header>

      <section id="about" className="py-20 px-8 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h3 className="text-4xl font-semibold mb-6 text-yellow-800">Tentang Villa</h3>
          <p className="text-lg text-gray-700 leading-relaxed">Villa Yoga Saputra menghadirkan pengalaman menginap eksklusif di lokasi terbaik Balikpapan. Dengan arsitektur modern dan fasilitas kelas dunia, villa ini menjadi destinasi sempurna untuk relaksasi, pesta pribadi, atau liburan romantis.</p>
        </motion.div>
      </section>

      <section id="villas" className="py-20 bg-yellow-50 px-6">
        <h3 className="text-4xl font-semibold text-center mb-14 text-yellow-800">Pilihan Villa Eksklusif</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {villas.map((villa, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-yellow-100">
              <img src={villa.image} alt={villa.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-yellow-700">{villa.name}</h4>
                <p className="text-lg font-semibold text-yellow-500 mb-4">{villa.price}</p>
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  {villa.facilities.map((fac, i) => <li key={i}>{fac}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="facilities" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-4xl font-semibold mb-12 text-center text-yellow-800">Fasilitas Unggulan</h3>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="grid md:grid-cols-4 gap-8">
          {facilities.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6 text-center border border-yellow-100">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-yellow-700">{item.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="testimonials" className="py-20 bg-yellow-100 px-6">
        <h3 className="text-4xl font-semibold text-center mb-12 text-yellow-800">Apa Kata Mereka?</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-3xl shadow-md border border-yellow-200">
              <p className="mb-4 italic text-gray-700">"{t.comment}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-yellow-700">- {t.name}</span>
                <div className="flex text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-6 text-center max-w-xl mx-auto">
        <h3 className="text-4xl font-semibold mb-6 text-yellow-800">Kontak Kami</h3>
        <p className="mb-4 text-gray-700 text-lg">Hubungi kami untuk informasi lebih lanjut atau pemesanan eksklusif:</p>
        <p className="mb-2 font-medium text-yellow-700">📞 0895-7056-80291</p>
        <p className="mb-4 font-medium text-yellow-700">✉️ yoga.ambadetukam@gmail.com</p>
        <a 
          href="https://wa.me/62895705680291"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-2 rounded-full shadow transition-transform duration-300 transform hover:scale-105"
        >
          Hubungi Sekarang
        </a>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm border-t bg-white/80 backdrop-blur">
        &copy; 2025 Villa Yoga Saputra. All rights reserved.
      </footer>
    </div>
  );
}
