import React, { Fragment } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Tips from './components/Tips/Tips'
import PrintAlt from '../../assets/Img/print-alt.PNG'
import Footer from '../../components/Footer/Footer'

import './start.css'

const Start = () => (
    <Fragment>
        <nav>
            <NavBar />
        </nav>
        <main>
            <h1 className='start-title'>Algumas dicas para começar seu site</h1>
            {/* <p className='start-p'>Existem algumas dicas iniciais para começarmos a ter um site mais acessível</p> */}
            <section className='start-container'>
                <Tips
                    title='Adicionar o atributo alt nas imagens'
                    text='
                        Esse atributo permite que o usuário com deficiência visual ou cognitiva entenda o que está sendo exibido na imagem,
                        através dos leitores de tela.
                    '
                    source={PrintAlt}
                    alt='print da tela de desenvolvimento de site'
                />
                <Tips
                    title='Adicionar o atributo alt nas imagens'
                    text='
                        Esse atributo permite que o usuário com deficiência visual ou cognitiva entenda o que está sendo exibido na imagem,
                        através dos leitores de tela.
                    '
                    source={PrintAlt}
                    alt='print da tela de desenvolvimento de site'
                />
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
    </Fragment>
)

export default Start