import styled, {css} from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover{
        background-color: rgba(0,0,0,0.5);
        color: black;
        border: 1px solid black;
    }
`
const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
`
const googleSignIn = css`
    background-color: red;
    color: white;
    &:hover {
    background-color: rgba(255,0,100,0.9);
    border: none;
`

const getButtonStyles = props =>{
    if(props.isGoogleSignIn){
        return googleSignIn
    }

    return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
@media screen and (max-width: 767px) {
    min-width: 140px;
    width: 100%;
    height: 40px;
    letter-spacing: 0.5px;
    padding: 0 35px 0 35px;
    margin: 5px 0;
    font-size: 0.8rem;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;

    ${getButtonStyles}
}
@media screen and (min-width: 768px) {   
    min-width: 100px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 13px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}    
}
`;
