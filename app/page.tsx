"use client";
import Image from "next/image";
import imgSrc from "../public/photos/1photo.jpg";
import "@/app/main-content-styles.css";
import { EmblaCarousel } from "@/components/EmblaCarousel";

function handleClick() {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
}

function handleClick2() {
  window.scrollTo({
    top: 2190,
    behavior: "smooth",
  });
}
export default function Home() {
  return (
    <div>
      <div className="welcome-content">
        <Image className="main-img" src={imgSrc} alt="" />
        <h1>
          Добро пожаловать на сайт о Пете Алексеенко <br />
        </h1>
        <button className="button" onClick={handleClick}>
          Подробности
        </button>
      </div>
      <div className="main-info">
        <div className="main-text">Вы знаете как меня зовут, но если бы этого было достаточно этот сайт не
        был бы создан. <br />
        Перейду сразу к делу, на этом сайте вы можете связаться со мной,
        подписаться на мои соцсети, посмотреть фоточки и может что-нибудь ещё,
        если я придумаю что-то. <br />А пока предлагаю вам посмотреть небольшую
        подборку фоточек</div>
        <button className="button2" onClick={handleClick2}>К фото</button>
      </div>
      <div className="photo-carousel">
        <EmblaCarousel />
      </div>
    </div>
  );
}
