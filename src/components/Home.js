import Header from '../components/Header'
import Annonces from "./Annonces";
import { useEffect, useState } from "react";
import Pattern from '../assets/pattern.png';
import './Home.css';

const Home = () => {

    const [data, setData] = useState([]);
    const [mapThis, setMapThis] = useState("default")
    const [filterData, setFilterData] = useState();

    console.log(mapThis)

    useEffect(() => {
        fetch("http://localhost:4242/BerserkShop/annonces")
            .then((resp) => resp.json())
            .then((data) => setData(data));
    }, [])

    useEffect(() => {
        let newArray = [];
        let newIndex;

        switch (filterData) {
            case 'categorie':
                newIndex = 0;
                setMapThis("default")
                break;
            case 'arme':
                newIndex = 1;
                break;
            case 'propriete':
                newIndex = 2;
                break;
            default:
                console.log("nothing to update")
        }

        if(newIndex > 0){
            newArray = data.filter(article => article.categories_id === newIndex)
            setMapThis(newArray)
        }
    }, [filterData])

    return(
        <div>
            <Header data={data} setFilterData={setFilterData} />
            <h2 id='annonceRoyaume'>ANNONCE DU ROYAUME</h2>
            <img id='patternViking' src={Pattern} />
            <div className='containerAnnonce'>
                { data !== [] && mapThis === "default" &&
                    data.slice(0, 5).map((article, i) => {
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
                { data !== [] && mapThis !== "default" &&
                    mapThis.map((article, i) => {
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