
"use client"
import HomePage from '@/components/home/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/scss/_bootstrap.scss"
import "@/styles/scss/_bootstrap.scss";
import "@/styles/scss/_fonts.scss";
import "@/styles/scss/_variables.scss";
import "@/styles/scss/main.scss";
import "@/styles/scss/components/slider.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "@/js/main.js"
import "@/js/bootstrap.js"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
          AOS.init({
            duration: 800,
            once: false,
          });
  }, []);
  return (
    <div>
      <HomePage/>
    </div>
  );
}
