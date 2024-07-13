import React from 'react';
import "../Styles/homepage.css";


function HomePage() {

    return (
    
     <div className='Page'>


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
            


        </div>
  
    )
}

export default HomePage;