import React from 'react'

import './footer.css'

const Footer = (props) => (
    <footer className={props.footer} className='footer'>
        <p>Desenvolvido por Lia Lobo enquanto estudante da <a href='https://www.reprograma.com.br/' target='_blank'>reprograma</a></p>
        <a href='https://github.com/LiaLobo' target='_blank'>Github</a>
    </footer>
)

export default Footer