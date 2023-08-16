"use client";
import "./styles.css";
import Link from "next/link";
import Image from "next/image";
import imgTelegram from "@/public/photos/telegram-photo.jpg";
import imgTelegramQr from "@/public/photos/telegram-qr-photo.png";
import ImgVk from "@/public/photos/vk-photo.jpg";
import ImgVkQr from "@/public/photos/vk-qr-photo.png";
import ImgInst from "@/public/photos/instagram-photo.jpg";
import ImgInstQr from "@/public/photos/instagram-photo-qr.png";
import { Header } from "@/components/header";
import { useSession } from "next-auth/react";



export default function Contacts() {

  const session = useSession();

  
  async function handleClick1() {

  }
  
  return (
    <div>
      <Header />
      <div className="main-div">
        <ul>
          <h1 className="main-topic">Мои социальные сети</h1>
          <div className="main-div">
            <div className="box">
              <ul>
                <div className="img-box-tg">
                  <Link target="_blank" href="https://t.me/qwrttqr">
                    <Image
                      className="tg-link"
                      width={150}
                      height={150}
                      src={imgTelegram}
                      alt=""
                    ></Image>
                  </Link>
                </div>
                <div className="telegram-qr">
                  <Image
                    src={imgTelegramQr}
                    width={300}
                    height={300}
                    alt=""
                  ></Image>
                </div>
                <p className="link-inscr-tg">@QWRTTQR</p>
              </ul>
            </div>
            <div className="box">
              <ul>
                <div className="img-box-vk">
                  <Link target="_blank" href="https://t.me/qwrttqr">
                    <Image
                      className="vk-link"
                      width={150}
                      height={150}
                      src={ImgVk}
                      alt=""
                    ></Image>
                  </Link>
                </div>
                <div className="vk-qr">
                  <Image src={ImgVkQr} width={300} height={300} alt=""></Image>{" "}
                </div>
                <p className="link-inscr-vk">VK.COM/QWRTTQ</p>
              </ul>
            </div>
            <div className="box">
              <ul>
                <div className="img-box-inst">
                  <Link target="_blank" href="https://t.me/qwrttqr">
                    <Image
                      className="inst-link"
                      width={150}
                      height={150}
                      src={ImgInst}
                      alt=""
                    ></Image>
                  </Link>
                </div>
                <div className="inst-qr">
                  <Image
                    src={ImgInstQr}
                    width={300}
                    height={300}
                    alt=""
                  ></Image>{" "}
                </div>
                <p className="link-inscr-inst">@QWRTTQR</p>
              </ul>
            </div>
          </div>
        </ul>
      </div>
      <div className="secondary-content">
        Этот элемент доступен только авторизованным пользователям
        <p>
          <i className="arrow down"></i>
        </p>
        {session?.data ? (
          <div className="text-field">
            <input
              className="text-field__input"
              name="send"
              defaultValue="Можешь написать мне что-нибудь напрямую"
            ></input><button className="button1" onClick={handleClick1}>Отправить</button>
          </div>
        ) : (
          <div className="text-field_another">
            <input
              className="text-field__input"
              name="send"
              readOnly
              value="Можешь написать мне что-нибудь напрямую"
            ></input><button className="button1" disabled onClick={handleClick1}>Отправить</button>
          </div>
        )}
      </div>
    </div>
  );
}
