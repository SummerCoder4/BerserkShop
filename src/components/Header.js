import vikingsLogo from '../assets/vikingsLogo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from "react-router-dom"
import './Header.css'
import { useState } from "react";

const Header = ({ data, setFilterData, mapThis, handleSearch }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="headerContainer">
            <Link to='/'>
                <div className="holderLogo">
                    <img className="logo" src={vikingsLogo} alt="Logo" />
                </div>
            </Link>
            <div className="holderTitle">
                <h1>BERSERK SHOP .</h1>
                <div className="holderSearch">
                    <div className="searchBox" id='searchFirstBox'>
                        <GiHamburgerMenu className="holderBurger" />
                        <select id="selectCategorie" name="categories" onChange={(e) => setFilterData(e.target.value)}>
                            <option value="categorie">Categories</option>
                            <option value="arme">Armes</option>
                            <option value="propriete">Proprietes</option>
                            <option value="tresor">Tresors</option>
                        </select>
                    </div>
                    <div className="searchBox">
                        <AiOutlineSearch />
                        <input 
                        id="inputSearch" 
                        type="text" 
                        name="text" 
                        class="search" 
                        placeholder="Recherchez ici!" 
                        onChange={handleSearch}/>
                    </div>
                    <div id='searchButton'>
                        Rechercher ({mapThis === "default" ? data.length : mapThis.length})
                    </div>
                </div>
            </div>
            <div className="firstButton">
                <button className="firstButtonStyle" onClick={() => setIsOpen(!isOpen)}>
                    Poster son annonce
                </button>
                <div className={`containerModal ${isOpen ? "active" : ""}`}>
                    <div className="headerPoster">
                        <h1 className="berk">
                            BERKSERK SHOP.
                            <button className="croix" onClick={() => setIsOpen(!isOpen)}>
                                X
                            </button>
                            <button className="onglet">
                                Déposer une annonce
                            </button>
                        </h1>
                    </div>
                    <div className="holderContainer">
                        <h2>Commençons par l'essentiel!</h2>
                        <div className="titre">
                            <p2>Quel est le titre de l'annonce?</p2>
                            <div className="reponse">
                                <input className="searchs" type="text" name="text"></input>
                                <div className="catégorie">
                                    <p3>Choisissez la catégorie du produit</p3>
                                    <div className="reponse">
                                        <input className="searchs" type="text" name="text"></input>
                                    </div>
                                    <div className="prix">
                                        <p4>Entrez le prix</p4>
                                        <div className="reponse">
                                            <input className="searchs" type="text" name="text"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header