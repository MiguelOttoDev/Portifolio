import styles from './Tech.module.css'
import { FaReact, FaPython, FaFigma, FaGitAlt   } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";

export default function Tech() {
    return (
        <div className={styles.container}>
            <h1>Tecnologias</h1>

            <div className={styles.cards}>
                <div className={styles.card}>

                    <p><FaReact /></p>
                    <h5>React</h5>
                </div>
                <div className={styles.card}>

                    <p><SiJavascript /></p>
                    <h5>Javascript</h5>
                </div>
                <div className={styles.card}>

                    <p><FaPython  /></p>
                    <h5>Python</h5>
                </div>
                <div className={styles.card}>

                    <p><FaFigma /></p>
                    <h5>Figma</h5>
                </div>
                <div className={styles.card}>

                    <p><SiMysql /></p>
                    <h5>Mysql</h5>
                </div>
                <div className={styles.card}>

                    <p><FaGitAlt  /></p>
                    <h5>Git</h5>
                </div>
            </div>

        </div>
    )
}