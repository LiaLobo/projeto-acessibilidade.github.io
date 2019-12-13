import React, { Fragment } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Video from '../../assets/Video/AcessibilidadeHeadliner.mp4'
import { Player } from 'video-react';
import Footer from '../../components/Footer/Footer'

import './beAccessible.css'

const BeAccessible = () => (
    <Fragment>
        <nav>
            <NavBar tabindex='0'/>
        </nav>
        <main>
            <section className='be-container'>
                <section>
                    <h1 className='be-title'>
                        Quais as vantagens de ter um site acessível?
                    </h1>
                    <Player
                        tabindex='0'
                        startTime
                        src={Video}
                    > 
                    </Player>
                    <p className='be-description'>
                        Marina Yonashiro, consultora em tecnologias assistivas
                    </p>
                </section>
                <section>
                    <p className='be-text be-margin'>
                        Desenvolver um website acessível é permitir que 45 milhões de pessoas tenham
                        a plena capacidade de consumir o conteúdo que você está criando. É essencial
                        para promover igualdade de oportunidades a pessoas com habilidades e condições diversas. As
                        empresas que não cumprem as diretrizes de acessibilidade web correm o risco de ações legais
                        movidas por indivíduos ou associações que protegem os direitos humanos.
                    </p>
                    <p className='be-text'>
                        Diferente do que muita gente pensa, fazer um site acessível não significa ter um projeto muito mais
                        oneroso. No caso de um site novo, por exemplo, a diferença de custos é pouca e os resultados são
                        sempre melhores para o negócio. Inclusive tem demonstrado ser um importante fator de
                        vantagem competitiva para os negócios. Os sites se tornam mais simples de navegar e objetivos,
                        facilitando o seu uso e tornando a experiência de compra mais agradável para todos os públicos.
                    </p>
                    <p className='be-text'>
                        Uma outra vantagem está na melhoria da visibilidade do site dentro da web, pois
                        os mecanismos de busca como Google e Bing também passam a ter melhor acesso ao conteúdo e
                        acabam por destacar a classificação das páginas desses sites em seus resultados de buscas.

                        Permitir esse tipo de acesso é expandir o mercado consumidor do seu negócio.
                    </p>
                </section>
            </section>
        </main>
        <footer className='be-footer'>
            <Footer />
        </footer>
    </Fragment>
)

export default BeAccessible

{/* <Track label='Português' kind='subtitles' srclang='pt' src='Acessibilidade.srt' default/> */}