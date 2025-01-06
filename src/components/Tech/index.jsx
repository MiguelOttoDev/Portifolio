import styles from './Tech.module.css'
import { FaReact, FaPython, FaNodeJs, FaGitAlt   } from "react-icons/fa";
import { SiJavascript, SiMysql, SiTailwindcss  } from "react-icons/si";

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

                    <p><SiTailwindcss /></p>
                    <h5>Tailwind CSS</h5>
                </div>
                <div className={styles.card}>

                    <p><SiMysql /></p>
                    <h5>Mysql</h5>
                </div>
                <div className={styles.card}>

                    <p><FaNodeJs  /></p>
                    <h5>NodeJs</h5>
                </div>
            </div>

        </div>
    )
}