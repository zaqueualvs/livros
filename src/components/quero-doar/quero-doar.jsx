import livro from '../../assets/Frame.png';
import './quero-doar.scss';

export default function  QueroDoar() {
    return(
        <main>
            <section className={'principal'}>
                <section className={'container'}>
                    <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                    <form action="">
                        <div>
                            <img src={livro} alt=""/>
                            <h3>Informações do Livro</h3>
                        </div>
                        <input type="text" placeholder='Titulo'/>
                        <input type="text" placeholder='Categoria'/>
                        <input type="text" placeholder='Autor'/>
                        <input type="text" placeholder='Link da Imagem'/>
                        <input className={`doar`} type="submit" value="Doar"/>
                    </form>
                </section>
            </section>
        </main>
    )
}