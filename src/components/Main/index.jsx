import styles from './Main.module.css';
import { MdEmail } from "react-icons/md";
import { LuUpload } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";
import Devices from '../../assets/Devices-cuate.png'

export default function Main(){

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `${import.meta.env.BASE_URL}MiguelOttoRosadeSousa-currículo.pdf`;
        link.download = "MiguelOttoRosadeSousa-currículo.pdf";
        link.click();
    };

    return (
        <div className={styles.container}>
            <div>
                <h1>Olá!</h1>
                <h1>Eu sou o <span>Miguel</span> </h1>
                <h2>Desenvolvedor Web</h2>
                <div className={styles.button}>
                    <a href="mailto:miguel1712otto@gmail.com">
                    <button><MdEmail className={styles.icon} /> Entrar em contato</button>
                    </a>
                    <button onClick={handleDownload} > <LuUpload className={styles.icon} />Curriculo</button>
                    <a href="https://curriculo-eta-rust.vercel.app" target="_blank">
                    <button><FaRegNewspaper className={styles.icon} /> Curriculo WEB</button>
                    </a>
                </div>
            </div>
            <div>
                <img src={Devices} alt="" />
            </div>
        </div>
    )
}