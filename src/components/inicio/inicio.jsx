import './inicio.scss';
import network from '../../assets/8541846 1community.png'
import read from '../../assets/566985 1reading.png'
import transform from '../../assets/2191244 1transform.png'
import balance from '../../assets/101964 1balance.png'
export default function  Inicio() {
    return(
        <main>
            <section className={'post'}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={'devoDoar'}>
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
                <section className={`card`}>
                    <article>
                        <img src={network} alt=""/>
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={read} alt=""/>
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={transform} alt=""/>
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={balance} alt=""/>
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de
                            aprendizado.</p>
                    </article>
                </section>
            </section>
        </main>
    )
}