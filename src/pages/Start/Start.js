import React, { Fragment } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Tips from './components/Tips/Tips'
import PrintAlt from '../../assets/Img/print-alt.PNG'
import Cabeçalho from '../../assets/Img/print-cabeçalho.PNG'
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
                    title='Respeitar as tags de cabeçalho - <h1>, <h2>, <h3>, <h4>, <h5>, <h6>'
                    text='
                        As tags de cabeçalho tem uma hierarquia, sendo <h1> a mais importante e <h6> com menos importância. É importante
                        colocar essas tags na ordem para não haver uma quebra de hierarquia e possíveis problemas de SEO, além de usá-las em
                        ordem crescente. Ajudam na experiência de usuários de tecnologia assistivas.Com elas conseguem navegar pelos títulos.
                    '
                    source={Cabeçalho}
                    alt='print da tela de desenvolvimento de site'
                />
                <Tips
                    title='Associar uma tag label aos elementos de formulário'
                    text='
                        A tag <label> é como um rótulo necessário para ajudar todos os leitores a entender o que precisa ser preeenchido nos inputs
                        ou outros elementos do formulário
                    '
                    source={Cabeçalho}
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