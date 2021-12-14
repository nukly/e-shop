import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

const OptionContainerStyles = css`
    padding: 10px 10px;
    color: rgb(255, 251, 251);
    font-weight: bolder;
    cursor: pointer;
    border-left: 1px solid rgb(255, 255, 255);
    
`
const Option1Styles = css`
    padding: 10px 10px;
    color: rgb(255, 251, 251);
    font-weight: bolder;
    cursor: pointer;
    
`

const OptionHoverStyles = css`
    background-color: darkgray;
    color: white;
`

export const HeaderContainer = styled.div`
    @media screen and (max-width: 768px){
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    @media screen and (min-width: 769px){
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        font-size: 1.5rem;
    }
    
`;

export const LogoContainer = styled(Link)`
    height: 50px;
    width: 50px;
    margin: 20px;
    &:hover{
        ${OptionHoverStyles}
    }
`;

export const OptionsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`
export const Option1Link = styled(Link)`
    ${Option1Styles}
`
export const OptionHover = styled.div`
    @media screen and (min-width: 769px){
        &:hover{${OptionHoverStyles}}
    }
`