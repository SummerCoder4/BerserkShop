import '../Components/Annonces.css'
import Epee from '../Image/Epee.jpg'

const Annonces =() => {
    return (
        <div className="Annonces">
            <div className='holder'>
                <div className='Image'>
                    <img className='Img'  src={Epee}  alt='ImgAnnonces' />
                </div>
                <div className='TextAnnonces'>
                    <h3 className='titreAnnonces'> Epee du Roi Ragnar Lothbrok</h3>
                    <p className='or'>14 or</p>
                    <button className='btnLivraison'>Livraison possible</button>
                </div>
                <button className='btnSavoir'>En savoir plus</button>
                <div className='numAnnonces'>
                    <p className='num'>annonces 18</p>
                </div>
            </div>

        </div>
);
}

export default Annonces