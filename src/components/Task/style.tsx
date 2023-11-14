import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    align-items: center;
    width; 100%;
    height: 60px;
    border: solid 2px #6B89C1;
    border-radius: 8px;
    margin: 20px 0 0;
    padding: 0 20px;
    position: relative;

    @media (max-width: 768px) {
        height: 40px;
        padding: 0 10px;
        border-radius: 6px;
    }

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

            @media (max-width: 768px) {
                height: 17px;
                width: 17px;
                border-width: 1px;
                margin-right: 10px;
            }

            &:before {
                content: '';
                background: url('/assets/images/check.svg') no-repeat center / 12px auto;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
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

    button.am-delete {
        background: #CC0000 url('/assets/images/remove.svg') no-repeat center / 13px auto;
        display: block;
        position: absolute;
        right: -2px;
        top: -2px;
        bottom: 0;
        font-size: 0;
        width: 60px;
        height: calc(100% + 4px);
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;

        @media (max-width: 768px) {
            background-size: 11px auto;
            width: 40px;
        }
    }
`