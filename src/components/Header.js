import vikingsLogo from '../assets/vikingsLogo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from "react-router-dom"
import './Header.css'

const Header = ({ data, setFilterData }) => {
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
                        <input id="inputSearch" type="text" name="text" class="search" placeholder="Recherchez ici!"/>
                    </div>
                    <div id='searchButton'>
                        Rechercher ({data.length})
                    </div>
                </div>
            </div>
            <div className="firstButton">
                <Link to='/Poster'>
                    <div className="firstButtonStyle">Poster son annonce</div>
                </Link>
            </div>
        </div>
    )
}

export default Header