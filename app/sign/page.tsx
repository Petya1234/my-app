import "./styles.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container">
      <div className="box">
        <ul>
        <div className="in-transcription">
          <p>Вход</p>
        </div>
        <div className="enter-email">
          <input
            type="text"
            placeholder="email"
            name="uname"
            required
          ></input>
        </div>
        <div className="enter-password">
          <input
            type="text"
            placeholder="password"
            name="uname"
            required
          ></input>
        </div>
        <div className='register-link'>
          <Link className="link-class" href={''}>Нет аккаунта?</Link>
        </div>
        <div className="sign-button"><button className="button">Войти</button> </div>
        </ul>
      </div>
    </div>
  );
}
