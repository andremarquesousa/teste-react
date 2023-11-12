import styled from "styled-components"

export const ListBlock = styled.div`
    max-width: 800px;
    margin: 50px auto 0;

    h2 {
        color: #FFAD0D;
        text-align: center;
    }

    select {
        display: block;
        width: 100%;
        max-width: 400px;
        height: 40px;
        margin: 40px auto;
        padding: 0 10px;
        border: solid 1px #DBDBDB;
        border-radius: 4px;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 10px;
            width: 0;
            height: 0;
            margin: auto 0;
            border-top: solid 10px #DBDBDB;
            border-left: solid 8px transparent;
            border-right: solid 8px transparent;
        }
    }
`