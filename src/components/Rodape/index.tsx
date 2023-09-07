import styled from 'styled-components';
import facebook from './assets/facebook.png';

const RodapeEstilizado = styled.footer`
height: 100%;
color: write;
padding: 1em;
background-color: var(--azul-escuro);
text-align: center;
`

const ListaEstilizada = styled.ul`
display: flex;
justify-content: space-around;
width: 10%;
margin: 1em auto;
`
const ItemEstilizado = styled.li`
list-style-type: none;`

const DescricaoEstilizada = styled.p`
color: white;
text-align: center;
`

function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <a href="#">
                        <img src={facebook} alt="logo do facebook" /> 
                    </a>
                </ItemEstilizado>
            </ListaEstilizada>
            <DescricaoEstilizada>Projeto fictício sem fins comerciais.</DescricaoEstilizada>
        </RodapeEstilizado>
    )
}

export default Rodape;