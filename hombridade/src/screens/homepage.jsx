import React from 'react';
import "../Styles/homepage.css";
import Carrossel from '../components/Carrossel';

function HomePage() {

   

    return (

        <div className='Page'>

            {/*  Aqui abaixo é o cabesalho da aplicação */}

            <div name="barrademenu" className='menu'>

                <div className='logo'>
                    <img src="../src/assets/img/logo.png" width="80px" />
                </div>


                <h1 className='titulo'>HOMBRIDADE</h1>

                <div className='itensmenu'>
                    <ul>
                        <li><a href="./" className='opcao'>Home</a></li>
                        <li><a href="#" className='opcao'>Hombridade</a></li>
                        <li><a href="#" className='opcao'>Blog</a></li>
                        <li><a href="./Login" className='opcao'>Login</a></li>
                    </ul>
                </div>

            </div>

            {/* Aqui será a pagnia onde terá as telas passando e a aba de fundo */}

            <div className='HeaderPage'>

                <div className='fotoinfo'>
                    <h1>Foto</h1>
                </div>

                <div className='slidehead'>
                        <Carrossel/> 
                </div>
            </div>

            {/* Daqui em diante tera os dois grandes componentes e o fundo modificável*/}
            <div className='bodysite'>
                <div className='Hombri'>
                    <h1>Hombridade</h1>
                </div>

                <div className='Blog'>
                    <h1>Blog</h1>
                </div>
            </div>



        </div>

    )
}

export default HomePage;