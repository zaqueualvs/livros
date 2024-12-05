import livro from '../../assets/download 1.png';
import './doados.scss'
export default function Doados() {
    return (
        <main>
            <section className={`doados`}>
                <h2>Livros Doados</h2>
                <section className={`card`}>
                    <article>
                        <img src={livro} alt="imagem do livro o protagonista"/>
                        <h3>O Protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </article>
                </section>
            </section>
        </main>
    )
}