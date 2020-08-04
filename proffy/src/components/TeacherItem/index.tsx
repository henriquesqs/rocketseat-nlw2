import React from "react";
import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars2.githubusercontent.com/u/36971021?s=460&u=459ffffd7f8f07b6336fd19f780ef00c879795df&v=4"
                    alt="Henrique dos Santos"
                />
                <div>
                    <strong>Henrique dos Santos</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                <br />
                Vivamus quis malesuada tortor. In malesuada viverra enim vitae
                faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
            </p>
            <footer>
                <p>
                    Preço/hora: <strong>R$83,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
