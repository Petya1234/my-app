import { Metadata } from "next";
import Image from "next/image";
import './styles.css'
import imgTelegram from '@/public/photos/telegram-photo.jpg'
import imgTelegramQr from '@/public/photos/telegram-qr-photo.png'
import ImgVk from '@/public/photos/vk-photo.jpg'
import ImgVkQr from '@/public/photos/vk-qr-photo.jpg'

export const metadata: Metadata = {
  title: "Contacts",
};

export default function Contacts() {
  return (
    <div className="main-div">
      <div className="box">
        <div className="img-box-tg"><Image width={150} height={150} src={imgTelegram} alt=''></Image></div>
        <Image className="telegram-qr" src = {imgTelegramQr} width={300} height={300} alt=''></Image>
        <p className="link-inscr-tg">@QWRTTQR</p>
      </div>
      <div className="box">
      <div className="img-box-vk"><Image width={150} height={150} src={ImgVk} alt=''></Image></div>
      <Image className="vk-qr" src = {ImgVkQr} width={300} height={300} alt=''></Image>
      <p className="link-inscr-vk">VK.COM/QWRTTQ</p>
  
      </div>
      <div className="box">
        <p>
          Современные технологии достигли такого уровня, что сплоченность
          команды профессионалов прекрасно подходит для реализации вывода
          текущих активов. Кстати, предприниматели в сети интернет объединены в
          целые кластеры себе подобных.
        </p>
      </div>
    </div>
  );
}
