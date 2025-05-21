import React from "react"
import { getTextAlign } from "utils/fonts"

export const Paragraph = ({content, textAlign}) => {
    return (
        <p
            dangerouslySetInnerHTML={{ __html: content }}
            className={`text-fuchsia-700 ${getTextAlign(textAlign)}`}
        />
    )
}