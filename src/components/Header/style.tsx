import styled from "styled-components"

export const HeaderBlock = styled.header`
    background-color: #2194FF;
    padding: 10px 0;
    position: relative;

    h1 {
        color: #FFF;
        font-size: 24px;
        text-align: center
    }

    button {
        color: #FFF;
        font-size: 14px;
        text-decoration: underline;
        position: absolute;
        right: 20px;
        top: 0;
        bottom: 0;
        margin: auto 0;

        &:hover {
            text-decoration: none;
        }
    }
`