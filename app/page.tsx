"use client";
import styles from "./main-content-styles.module.css";
import Image from "next/image";
import imgSrc from "@/public/photos/1photo.jpg";
import { Header } from "@/components/Header"
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
      <Header/>
      <div className={styles.welcome_content}>
        <Image className={styles.main_img} src={imgSrc} alt="" />
        <h1>
          Добро пожаловать на сайт о Пете Алексеенко <br />
        </h1>
        <button className={styles.button} onClick={handleClick}>
          Подробности
        </button>
      </div>
      <div className={styles.main_info}>
        <div className={styles.main_text}>Вы знаете как меня зовут, но если бы этого было достаточно этот сайт не
        был бы создан. <br />
        Перейду сразу к делу, на этом сайте вы можете связаться со мной,
        подписаться на мои соцсети, посмотреть фоточки и может что-нибудь ещё,
        если я придумаю что-то. <br />А пока предлагаю вам посмотреть небольшую
        подборку фоточек</div>
        <button className={styles.button2} onClick={handleClick2}>К фото</button>
      </div>
      <div className={styles.photo_carousel}>
        <EmblaCarousel />
      </div>
    </div>
  );
}
