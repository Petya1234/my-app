import Image from "next/image";
import imgSrc from "../public/photos/1photo.jpg";
import "@/app/main-content-styles.css";
import { Component } from "react";



export default function Home() {
  return (
    <div>
      <Image className="main-img" src={imgSrc} alt="" />
      <div className="main-text-content">
        <h1>
          Добро пожаловать на сайт о Пете Алексеенко <br />
          Здесь вы сможете узнать немного его биографии
        </h1>
      </div>
    </div>
  );
}
