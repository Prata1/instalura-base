import { breakpoints } from "../Breakpoints";
import { css } from "styled-components";


export const breakpointsMedia = (cssBreakpoints) =>{
    const arrayBreakpoints = Object.keys(cssBreakpoints);

    return arrayBreakpoints.map((breakpointsName) =>{
        return css`
            @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
                ${cssBreakpoints[breakpointsName]}
            }
        `
    })
}