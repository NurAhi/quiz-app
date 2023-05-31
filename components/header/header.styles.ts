import styled from 'styled-components'

const enum CSS {
    headerPadding=  '0.625rem 1.25rem',
    headerBorderRadius = '20px 50px 30px 10px',
    headerPositionTop = '1.875rem',
    headerTitleFontSize = '1.25rem'
}



export const HeaderStyled = styled.header`
padding: ${CSS.headerPadding};
background-color: #d8effa;
width: 96%;
border-radius: ${CSS.headerBorderRadius};
position: fixed;
top: ${CSS.headerPositionTop};
left: 0;
right: 0;
margin: auto;

.c-header-content{
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    
}

.c-header-title{
    font-weight: bold;
    font-size: ${CSS.headerTitleFontSize};
    text-transform: uppercase;    
}
`