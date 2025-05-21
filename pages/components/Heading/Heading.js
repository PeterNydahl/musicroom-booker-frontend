import React from 'react'
import { getFontSizeForHeading } from 'utils/fonts'
import { getTextAlign } from 'utils/fonts'


//vi sätter level till 2 som default ifall level inte skulle vara specifierat eftersom GraphQL då returnerar undefined
export const Heading = ({level = 2, textAlign, content}) => {
    // för att slippa skapa komponenter för samtliga h1-6 skapar vi dem dynamiskt med createElement
    const headingTag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: content},
        className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`
    })
    return headingTag;
}