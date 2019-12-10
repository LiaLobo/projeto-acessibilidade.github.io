import React, { Fragment } from 'react'
import NavBar from '../../components/NavBar/NavBar'
// import Video from '../../assets/Video/A importância da acessibilidade.mp4'
import Footer from '../../components/Footer/Footer'

const BeAccessible = () => (
    <Fragment>
         <div>
            <NavBar />
        </div>
        <main>
            <h1>
            Quais as vantagens de ter um site acessível?
            </h1>
            <video src='A importância da acessibilidade.mp4'> </video>
        </main>
         <div>
            <Footer />
        </div>
    </Fragment>
)

export default BeAccessible