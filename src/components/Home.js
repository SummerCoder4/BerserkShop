import Header from './Header'
import Annonces from "./Annonces";
import { useEffect, useState } from "react";
import Pattern from '../assets/pattern.png';
import './Home.css';

const Home = () => {

    const [data, setData] = useState([]);
    const [recups, setRecup] = useState([]);
    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:4242/BerserkShop/categories/1")
            .then((resp) => resp.json())
            .then((data) => setData(data));
    }, [])

    useEffect(() => {
        fetch("http://localhost:4242/BerserkShop")
            .then((resp) => resp.json())
            .then((data) => setRecup(data))
    }, [])

    const handleSearch = (e) => {
        let value = e.target.value;
        setSearchTerm(value)
    }
    return(
        <div>
            <Header data={data} handleSearch={handleSearch}/>
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
            <div>
                {recups
                    .filter((val, index) => {
                        return val.name.includes(searchTerm);
                    }) 
                    .map((val) => {
                        return (
                            <Annonces
                                key={val.id}
                                img={val.image}
                                title={val.name}
                                prix={val.prix}
                            />
                        )
                    })
                }
            </div>
        </div>
       
    )
}

export default Home