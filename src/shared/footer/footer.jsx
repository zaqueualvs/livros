import facebook from '../../assets/facebook.png';
import twitter from '../../assets/Twitter_Logo_WhiteOnImage.png';
import youtube from '../../assets/youtube-app-white-icon.png';
import linkedin from '../../assets/linkedin-icon-2048x2048-yx2cmt11.png';
import instagram from '../../assets/instagram-white-icon.png';
import './footer.scss'

export default function Footer() {
    return (
        <footer>
            <section className={`social`}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""> <img src={facebook} alt=""/> </a>
                    <a href=""> <img src={twitter} alt=""/> </a>
                    <a href=""> <img src={youtube} alt=""/> </a>
                    <a href=""> <img src={linkedin} alt=""/> </a>
                    <a href=""> <img src={instagram} alt=""/> </a>
                </nav>
            </section>
            <section className={`end`}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
            </section>
        </footer>
    )
}