'use client'
import Image from "next/image";
import imgSrc from "../public/photos/1photo.jpg";
import "@/app/main-content-styles.css";
import { EmblaCarousel } from "@/components/EmblaCarousel";


function handleClick() {
  window.scrollTo({
    top: 2000,  // это координат где должен быть экран
    behavior: 'smooth'  //Это анимация
})
}
export default function Home() {
  return (
      
      <div className="main-text-content">
        <Image className="main-img" src={imgSrc} alt="" />
        <h1>
          Добро пожаловать на сайт о Пете Алексеенко <br />
          Здесь вы сможете узнать немного его биографии
        </h1>
        <button className="button" onClick={handleClick}>Подробности</button>
        <EmblaCarousel/>
      </div>
  );
}
