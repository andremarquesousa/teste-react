import styled from "styled-components"

export const Form = styled.form`
    max-width: 500px;
    margin: 40px auto 0;

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0 20px;
    }

    label {
        display: block;
        margin: 30px 0 0;

        &:first-child {
            margin-top: 0;
        }

        @media (max-width: 768px) {
            margin: 20px 0 0;

            &:first-child {
                margin-top: 0;
            }
        }
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
        height: 40px;
        border-radius: 7px;
        border: 1px solid #DBDBDB;
        margin: 5px 0 0;

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

        &[disabled] {
            background: #F5F6FA;
            color: #ABAAAD;
            cursor: default;
            border-color: #F5F6FA;
        }

        &[type="password"] {
            font: small-caption;
            font-size: 16px;

            &::placeholder{
                font-size: 14px;
            }
        }
    }

    .am-input-label {
        display: inline-block;
        font-family: 'arial';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #333;
    }

    button[type="submit"] {
        background: #2194FF;
        display: block;
        color: #FFF;
        font-family: 'arial';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        min-width: 199px;
        height: 40px;
        padding: 0 24px;
        margin: 30px 0 0 auto;
        border-radius: 5px;
        border: 1px solid #2194FF;
        transition: background 0.4s, color 0.4s, border 0.4s;
    
        &[disabled] {
            pointer-events: none;
            background: #F2F4FA;
            color: #ABAAAD;
            border-color: #F2F4FA;
        }

        @media (max-width: 768px) {
            margin: 20px auto 0;
        }
    }
`