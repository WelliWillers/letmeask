import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.bg.modal};
    color: ${props => props.theme.colors.textColor.details};
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;

    & + .question {
        margin-top: 8px;
    }

    &.highlighted {
        background: ${props => props.theme.colors.white.medium};
        border: 1px solid #835AFD;
        
        footer .user-info span {
            color: ${props => props.theme.colors.textColor.details};
        }
    }
    
    &.answered {
        color: ${props => props.theme.colors.textColor.input};
        background: ${props => props.theme.colors.gray.dark};
    }

    p {
        color: ${props => props.theme.colors.gray.light};
    } 
`;


export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    button{
        border: 0px;
        background: transparent;
        cursor: pointer;
        
        &.like-button{
            color: ${props => props.theme.colors.textColor.primary};
            display: flex;
            align-items: flex-end;
            gap: 8px;

            &liked {
                color: #835afd;

                
                svg path{
                    stroke: #835afd;
                }
            }

        }

        &:hover{
            filter: brightness(0.8);
        }
    }
`;

export const user = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    span {
        margin-left: 8px;
        color: #737380;
        font-size: 14px;
    }
`;

export const Obtions = styled.div`
    display: flex;
    gap: 16px;
`;