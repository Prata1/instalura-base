import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { propToStyle } from "../../../theme/utils/propToStyle";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";

export const TextStyleVariants = {
    title:css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.title.fontSize};
            font-weight: ${theme.typographyVariants.title.fontWeight};
            line-height: ${theme.typographyVariants.title.lineHeight};
        `}
        ${breakpointsMedia({
            md: css`
                ${({ theme }) => css`
                    font-size: ${theme.typographyVariants.title.fontSize};
                    font-weight: ${theme.typographyVariants.title.fontWeight};
                    line-height: ${theme.typographyVariants.title.lineHeight};
                `}
            `,
        })}
    `,


    subTitle:css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.subTitle.fontSize};
            font-weight: ${theme.typographyVariants.subTitle.fontWeight};
            line-height: ${theme.typographyVariants.subTitle.lineHeight};
        `}
    `,

    paragraph1:css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.paragraph1.fontSize};
            font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
            line-height: ${theme.typographyVariants.paragraph1.lineHeight};
        `}
    `,

    paragraph2:css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.paragraph2.fontSize};
            font-weight: ${theme.typographyVariants.paragraph2.fontWeight};
            line-height: ${theme.typographyVariants.paragraph2.lineHeight};
        `}
    `,

    smallestException :css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.smallestException.fontSize};
            font-weight: ${theme.typographyVariants.smallestException.fontWeight};
            line-height: ${theme.typographyVariants.smallestException.lineHeight};
        `}
    `
}


export const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`
