import styled, { css } from 'styled-components'
import get from 'lodash/get';
import { TextStyleVariants } from '../../foundation/Text/styles';
import { breakpointsMedia } from "../../theme/utils/breakpointsMedia";
import { propToStyle } from "../../theme/utils/propToStyle";

const ButtonGhost = css`
    background:transparent;
    color:${( { theme, variant } ) =>  get(theme, `colors.${variant}.color`) };
    ${TextStyleVariants.smallestException}
`;

const ButtonDefault = css`
    background: ${( { theme, variant } ) =>  get(theme, `colors.${variant}.color`) };
    color:${( { theme, variant } ) =>  get(theme, `colors.${variant}.contrastText`) };
`

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius:${( { theme } ) =>  theme.borderRadius };
    transition:${( { theme } ) =>  theme.transition };

    ${propToStyle('margin')}
    ${propToStyle('display')}
    
    ${
        (props) =>{
            return props.ghost ? ButtonGhost : ButtonDefault
        }
    }

    ${
        breakpointsMedia({
            xs: css `
                ${TextStyleVariants.smallestException}
            `,
            md: css `
                ${TextStyleVariants.paragraph1}
            `,
            ds: css `
                ${TextStyleVariants.paragraph1}
            `
        })
    }

    &:hover,
    &:focus {
      opacity: .5;
    }
`