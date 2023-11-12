import styled from "styled-components"

export const Card = styled.div`
    display: flex;
    align-items: center;
    width; 100%;
    height: 60px;
    border: solid 2px #6B89C1;
    border-radius: 8px;
    margin: 20px 0 0;
    padding: 0 20px;

    &:first-child {
        margin-top: 0;
    }

    label {
        display: flex;
        align-items: center;
        cursor: pointer;

        input {
            position: absolute;
            opacity: 0;
            pointer-events: none;
        }

        span {
            display: block;
            width: 20px;
            height: 20px;
            border: solid 2px #ABAAAD;
            transition: border 0.6s;
            position: relative;
            margin-right: 20px;

            &:before {
                content: '';
                background-color: #A7D4FF;
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                width: 8px;
                height: 8px;
                margin: auto;
                border-radius: 50%;
                opacity: 0;
                transition: opacity 0.6s;
            }
        }

        input:checked {
            + span {
                border-color: #A7D4FF;

                &:before {
                    opacity: 1;
                }
            }
        }
    }
`