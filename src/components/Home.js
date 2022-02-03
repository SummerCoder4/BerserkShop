import Header from '../components/Header'
import Annonces from "./Annonces";
import { useEffect, useState } from "react";
import Pattern from '../assets/pattern.png';
import './Home.css';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4242/BerserkShop/categories/1")
            .then((resp) => resp.json())
            .then((data) => setData(data));
    }, [])

    return(
        <div>
            <Header data={data}/>
            <h2 id='annonceRoyaume'>ANNONCE DU ROYAUME</h2>
            <img id='patternViking' src={Pattern} />
            <div className='containerAnnonce'>
                { data !== [] &&
                    data.map((article, i) => {
                        console.log(data[0].image)
                        if(article) {
                            return (
                                <Annonces
                                    img={article.image}
                                    title={article.name}
                                    prix={article.prix}
                                />
                            )
                        }
                        else {
                            return null
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Home