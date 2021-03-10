import React from "react";
import PropTypes from 'prop-types';
import { TextBase } from "./styles";

export function Text( {variant, tag, children, ...props} ){

    return(
        <TextBase
            as={tag}
            variant={variant}
            {...props}
        >
            {children}
        </TextBase>
    );
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
    variant: PropTypes.oneOf(['paragraph1', 'smallestException','title']),
}