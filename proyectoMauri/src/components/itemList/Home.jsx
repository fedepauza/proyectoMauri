import './Home.css'
import NavBar from '../navBar/navBar'
import ItemListContainer from '../itemListContainer/itemListContainer'


function Home ({correoUsuario}) {
    return (
        <div>
           
        <div>
            
            <p className="pHome">Bienvenido {correoUsuario}</p>
        </div>
        
            <ItemListContainer/>
        
        </div>
    )
}

export default Home