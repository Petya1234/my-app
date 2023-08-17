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
import { FormEventHandler, useState } from "react";
import { sendText } from "@/app/lib/api";

export default function Contacts() {
  const session = useSession();
  const [inputOne, setInputOne] = useState('');
  let data = { email: "", name: "", text: "" };

  function submitClick() {
    data.email = session.data?.user?.email as string;
    data.name = session.data?.user?.name as string;
    data.text = inputOne;
    const status = sendText(data);
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
                  <Link target="_blank" href="https://vk.com/qwrttq">
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
                  <Link target="_blank" href="https://instagram.com/qwrttqr?igshid=MjEwN2IyYWYwYw==">
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
                id = '1'
                className="text-field__input"
                placeholder="Можешь написать мне что-нибудь напрямую(это придёт мне на почту)"
                onChange={(event) => setInputOne(event.target.value)}
                required
              ></input>
              <button type="button" className="button1" onClick = {submitClick}>Отправить</button>
          </div>
        ) : (
          <div className="text-field_another">
            <input
              disabled
              className="text-field__input"
              name="send"
              readOnly
              placeholder="Можешь написать мне что-нибудь напрямую(это придёт мне на почту)"
            ></input>
            <button className="button1" disabled>
              Отправить
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
