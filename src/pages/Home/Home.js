import React, { Fragment } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Users from '../../assets/Ícones/users-relation.png'
import Book from '../../assets/Ícones/book.png'
import Balance from '../../assets/Ícones/weight-scale.png'
import Footer from '../../components/Footer/Footer'

import './home.css'

const Home = () => (
    <Fragment>
        <div>
            <NavBar />
        </div>
        <Header />
        <div className='cards-flex'>
            <Cards src={Users} alt='Ícone de três silhuetas' classIcon='cards-icon-users'>
                Mais de 45 milhões de pessoas. Sabe o que é esse número? É a quantidade 
                de brasileiros que possuem algum tipo de deficiência que dificulta o acesso
                à informação e navegação na internet. Eles representam cerca de 24% da 
                população brasileira segundo o Censo do IBGE de 2010.
            </Cards>

            <Cards src={Book} alt='Ícone de um livro' classIcon='cards-icon-book'>
                Existem iretrizes para conteúdos de acessibilidade na web que foram
                criadas em 2018 pelo W3C (World Wide Web Consortium - Consórcio World Wide Web). Elas abrangem
                um vasto conjunto de recomendações.

            </Cards>

            <Cards src={Balance} alt='Ícone da balança da justiça' classIcon='cards-icon-justice'>
                O acesso às tecnologias de informação e cominucação foi definido como um direito humano básico
                na Convenção das Nações Unidas sobre os Direitos das Pessoas com Deficiência (UN CRPD). Já no
                Brasil temos, a Lei Brasileira de Inclusão (Lei nº 13.146, de 6 de julho de 2015).
            </Cards>
        </div>
        
        <div>
            <Footer />
        </div>
    </Fragment>
)

export default Home