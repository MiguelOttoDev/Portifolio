import styles from './About.module.css'
import fotoEu from '../../assets/foto_miguel.jpg'

export default function About() {
    return (
        <>

            <div className={styles.container}>
                <div className={styles.texto}>
                    <h1>Miguel <span>Otto</span> </h1>
                    <h3>Sou Miguel Otto, desenvolvedor de software com experiência em tecnologias de front-end e back-end, incluindo React, FlutterFlow, Supabase, MySQL, Firebase, e frameworks como Django e Bootstrap. Atualmente cursando Engenharia de Software pela FIAP e com uma formação técnica pelo Senai, tenho trabalhado em projetos que variam de sistemas de gestão a aplicativos web e interfaces de usuário. Minhas soluções são pensadas para serem escaláveis e intuitivas, sempre aplicando boas práticas de desenvolvimento e metodologias ágeis. Adoro aprender novas tecnologias e criar soluções que simplifiquem o cotidiano das pessoas</h3>
                </div>
                <div className={styles.img}>
                    <img src={fotoEu} alt="" />
                </div>
            </div>

        </>
    )
}