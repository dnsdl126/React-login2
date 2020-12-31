import React from 'react'
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
    border: none;
    border-radious: 4px;
    font-size: lrem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color : white;
    outline: none;
    cursor:pointer;

    background:${palette.gray[8]};
    &:hover {
        background:${palette.gray[6]};
    }

    ${props => props.fullWidth && css`
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        width: 100%;
        font-size: 1.125rem;    
    `}

    ${props =>
        props.cyan && css`
        backgorund: ${palette.cyan[5]};
        &:hover {
            backgournd: ${palette.cyan[4]};
        }
    
    `}
    
    `;
const Button = props => <StyledButton {...props} />;

export default Button;
