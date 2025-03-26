

import './cards.css'


function Cards () {

    return (

        <div className='cardContainer'>
            <img src="https://es.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/maverick/2024/collections/dm/24_MAV_FRDNTRKX0264_BlackAppPack.tif?croppathe=1_4x3&wid=900" alt="" className='cardImg'/>
            <h2>Ford Maverick</h2>
            <div className='descriptionCard'>
                <p>Transmicion: Automatica </p>
                <p>Kilometraje: 20.000km</p>
                <p>Año: 2023</p>
                <p>Estado: Usado</p>
                <p>Precio: u$d 40.000</p>
                <p>Financiacion: Si</p>
            </div>
        </div>
    )
}

export default Cards