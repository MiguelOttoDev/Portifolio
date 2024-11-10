import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2024 | Desenvolvido por Miguel Otto | João 8:32</p>
            <p>Entre em contato: <a href="mailto:miguel1712otto@gmail.com">miguel1712otto@gmail.com</a></p>
            <p>Conecte-se comigo no <a href="https://www.linkedin.com/in/miguel-otto-47603b260" target="_blank">LinkedIn</a></p>
        </footer>

    )
}