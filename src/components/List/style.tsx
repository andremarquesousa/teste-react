import styled from "styled-components"

export const ListBlock = styled.div`
    max-width: 800px;
    margin: 50px auto 0;

    @media (max-width: 768px) {
        margin-top: 20px
    }

    h2 {
        color: #FFAD0D;
        text-align: center;
    }

    .am-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px auto 0;

        @media (max-width: 768px) {
            flex-direction: column;
            margin-top: 20px;
            padding: 0 20px;
        }
    }

    select {
        display: block;
        width: 150px;
        height: 40px;
        margin: 0 0 0 10px;
        padding: 0 10px;
        border: solid 1px #DBDBDB;
        border-radius: 4px;
        position: relative;

        @media (max-width: 768px) {
            order: 1;
            width: 100%;
            max-width: 100%;
            margin: 0;
        }

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

    form {
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        height: 40px;

        @media (max-width: 768px) {
            order: 2;
            margin: 20px 0 0;
            width: 100%;
            max-width: 100%;
        }
    
        input {
            background: #FFF;
            display: block;
            color: #333;
            font-family: 'arial';
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            width: 100%;
            padding: 0 10px;
            height: 100%;
            border-radius: 7px;
            border: 1px solid #DBDBDB;
    
            &::placeholder{
                color: #8A898E;
                font-family: 'arial';
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
    
            &:focus {
                border-color: #2194FF;
            }
        }
    
        button[type="submit"] {
            background: #2194FF;
            display: block;
            color: #FFF;
            font-family: 'arial';
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            width: 70px;
            height: 40px;
            padding: 0 5px;
            margin-left: 10px;
            border-radius: 5px;
            border: 1px solid #2194FF;
            transition: background 0.4s, color 0.4s, border 0.4s;
        
            &[disabled] {
                pointer-events: none;
                background: #F2F4FA;
                color: #ABAAAD;
                border-color: #F2F4FA;
            }
        }
    }

    .am-list {
        margin-top: 20px;
        padding-top: 20px;
        border-top: solid 1px #727176;

        @media (max-width: 768px) {
            padding: 20px 20px 0
        }
    
    }

    .am-without-task {
        color: #8A898E;
        font-size: 34px;
        text-align: center;
        margin: 15% 0 0;

        @media (max-width: 768px) {
            font-size: 24px;
            margin-top: 10%;
        }
    }
`