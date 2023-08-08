'use client'
import Image from "next/image";
import imgSrc from "../public/photos/1photo.jpg";
import "@/app/main-content-styles.css";
import { EmblaCarousel } from "@/components/EmblaCarousel";


function handleClick() {
  window.scrollTo({
    top: 1500,  
    behavior: 'smooth'  
})
}

function handleClick2() {
  window.scrollTo({
    top: 2960, 
    behavior: 'smooth' 
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
        <button className="button2" onClick={handleClick2}>К фото</button>
      </div>
  );
}
