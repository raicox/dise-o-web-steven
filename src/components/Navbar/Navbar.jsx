import { NavLink } from 'react-router-dom'
import KiiL from '../../assets/KII-logo.gif'
import './navbar.css'

// Componente de Barra de Navegación (Navbar) en React
const Navbar = () => {

    return (

        <nav className="nav-header">

            <div className="logo">
       
                {/* Mostrar el logotipo de KiiL */}
                <img src={KiiL} alt="Logo-Kii" />

            </div>
            
            <div className='list-container'>

                {/* Lista de enlaces para Crear Sesión y Registrarse */}
                <ul>
                    <li>Crear Sesión</li>
                    <li>Registrarse</li>
                </ul>

                {/* Lista de enlaces de navegación principal */}
                <ul>    
                    {/* Enlace a la página de inicio */}
                    <NavLink 
                        to='/'
                        className='link'
                    >
                        <li>
                            KII Home
                        </li>
                    </NavLink>
                    
                    {/* Enlace a la página "¿Qué es KII?" */}
                    <NavLink 
                        to='/about'
                        className='link'
                    >
                        <li>
                            ¿Qué es KII?
                        </li>
                    </NavLink>

                    {/* Enlace a la página de Kii BlockChain */}
                    <NavLink 
                        to='/kiiBlockChain'
                        className='link'
                    >
                        <li>
                            Kii BlockChain
                        </li>
                    </NavLink>
                </ul>
            
            </div>

        </nav>

    );

};

export default Navbar