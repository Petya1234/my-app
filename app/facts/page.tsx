import './styles.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Facts'
};



export default function Facts() {
  return (
    <div className="main-facts-content">
      <h1 className='welcome-content'>Добро пожаловать на страницу фактов обо мне</h1>
      <div className='facts'>
        <ul className="border">
          <li>Я ценю в людях честность превыше всего, но я не против того, чтобы люди врали там, где не вредит человеку морально или же материально.</li>
          <li></li>
          <li>Элемент списка</li>
          <li>Элемент списка</li>
          <li>Элемент списка</li>
        </ul>
      </div>
    </div>
  )
}