import "./styles-sign.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign",
};

export default function Home() {
  return (
    <div className="sign-container">
      <div className="sign-box">
        <ul>
        <div className="sign-in-transcription">
          <p>Вход</p>
        </div>
        <div className="sign-enter-email">
          <input
            type="text"
            placeholder="email"
            name="uname"
            required
          ></input>
        </div>
        <div className="sign-enter-password">
          <input
            type="text"
            placeholder="password"
            name="uname"
            required
          ></input>
        </div>
        <div className='sign-register-link'>
          <Link className="sign-link-class" href={''}>Нет аккаунта?</Link>
        </div>
        <div className="sign-button-div"><button className="sign-button">Войти</button> </div>
        </ul>
      </div>
    </div>
  );
}
