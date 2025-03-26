

import Cards from "../cards/cards"
import './itemListContainer.css'

function ItemListContainer () {

    return (
        <div className="Container">
            <h2>Vehiculos disponibles</h2>
            <div className="itemsContainer">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>

    )
}

export default ItemListContainer