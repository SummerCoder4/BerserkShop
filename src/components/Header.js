import vikingsLogo from "../assets/vikingsLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="headerContainer">
      <div className="holderLogo">
        <img className="logo" src={vikingsLogo} alt="Logo" />
      </div>
      <div className="holderTitle">
        <h1>BERSERK SHOP .</h1>
        <div className="holderSearch">
          <div className="searchBox">
            <GiHamburgerMenu className="holderBurger" />
            Catégories
          </div>
          <div className="searchBox">
            <FcSearch />{" "}
            <input
              className="holderZoom"
              type="text"
              name="text"
              class="search"
              placeholder="Recherchez ici!"
            />
          </div>
          <div id="searchButton">Rechercher ()</div>
        </div>
      </div>
      <div className="firstButton">
        <button classname="firstButtonStyle" onClick={() => setIsOpen(!isOpen)}>
          Poster son annonce
        </button>
        <div className={`container ${isOpen ? "active" : ""}`}>
          <div className="headerPoster">
            <h1 className="berk">
              BERKSERK SHOP.
              <button class="croix" onClick={() => setIsOpen(!isOpen)}>
                X
              </button>
              <button className="onglet">Déposer une annonce</button>
            </h1>
          </div>
          <div className="holderContainer">
            <h2>Commençons par l'essentiel!</h2>
            <div className="titre">
              <p2>Quel est le titre de l'annonce?</p2>
              <div className="reponse">
                <input class="searchs" type="text" name="text"></input>
                <div className="catégorie">
                  <p3>Choisissez la catégorie du produit</p3>
                  <div className="reponse">
                  <input class="searchs" type="text" name="text"></input>
                  </div>
                  <div className="prix">
                  <p4>Entrez le prix</p4>
                  <div className="reponse">
                  <input class="searchs" type="text" name="text"></input>
                  </div>
                  </div>
              </div>
              <div className="photo">
                    <h3>Sélectionner vos photos</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Header;
