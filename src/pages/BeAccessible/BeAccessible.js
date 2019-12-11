import React, { Fragment } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Video from '../../assets/Video/A importância da acessibilidade.mp4'
// import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import Footer from '../../components/Footer/Footer'

import './beAccessible.css'

const BeAccessible = () => (
    <Fragment>
         <div>
            <NavBar />
        </div>
        <main>
            <section className='be-container'>
                <h1 className='be-title'>
                    Quais as vantagens de ter um site acessível?
                </h1>
                <Player
                    startTime
                    src={Video}
                />
                <p></p>
            </section>
            <section>
                <p></p>
                <button></button>
            </section>
        </main>
         <div>
            <Footer />
        </div>
    </Fragment>
)

export default BeAccessible