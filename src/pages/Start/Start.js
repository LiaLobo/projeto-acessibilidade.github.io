import React, { Fragment } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Tips from './components/Tips/Tips'
import Footer from '../../components/Footer/Footer'

import './start.css'

const Start = () => (
    <Fragment>
        <div>
            <NavBar />
        </div>
        <main>
            <h1>Algumas dicas para começar seu site</h1>
            <section>
                <Tips />
            </section>
        </main>
        <div>
            <Footer />
        </div>
    </Fragment>
)

export default Start