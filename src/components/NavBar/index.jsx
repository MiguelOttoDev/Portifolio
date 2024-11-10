import styles from './NavBar.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from '../../assets/logo.png'

export default function NavBar(){
    return(
        <nav className={styles.navBar}>
            <ul>
                <li>
                    <a href="/">
                    <img src={Logo} alt='Logo' />
                    </a>
                </li>
            </ul>
            <ul >
                <li><a href="/">Home</a></li>
                <li><a href="/about">Sobre Mim</a></li>
                <li><a href="/contact">Contato</a></li>
            </ul>
            <ul>
                <li><a href="https://www.linkedin.com/in/miguel-otto-47603b260/" target="_blank" className={styles.icon}> <FaLinkedin />  </a></li>
                <li><a href="https://github.com/MiguelOttoDev" target="_blank" className={styles.icon}> <FaGithub /> </a></li>
                <li><a href="mailto:miguel1712otto@gmail.com"  className={styles.icon}> <MdEmail /> </a></li>
            </ul>
        </nav>
    )
}