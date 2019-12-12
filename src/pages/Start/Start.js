import React, { Fragment } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Tips from './components/Tips/Tips'
import Footer from '../../components/Footer/Footer'

import './start.css'

const Start = () => (
    <Fragment>
        <nav>
            <NavBar />
        </nav>
        <main>
            <h1>Algumas dicas para começar seu site</h1>
            <section>
                <Tips />
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
    </Fragment>
)

export default Start