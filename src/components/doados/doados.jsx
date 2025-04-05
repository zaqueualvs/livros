import './doados.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Doados() {

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        try {
            const response = await axios.get("https://livrospy.onrender.com/livros")
            setLivros(response.data)
        } catch (error) {
            console.error("Erro ao buscar livros:", error)
        }
    }

    useEffect(() => {
        getLivros()
    }, [])

    return (
        <main>
            <section className={`doados`}>
                <h2>Livros Doados</h2>
                <section className={`card`}>
                {livros.map((item) => (
                    <article key={item.id}>
                        <img src={item.imagem_url} alt={item.titulo} />
                        <h3>{item.titulo}</h3>
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>
                    </article>
                ))}
                </section>
            </section>
        </main>
    )
}