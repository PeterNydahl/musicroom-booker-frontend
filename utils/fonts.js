export const getTextAlign = (textAlign = "left") => {
    const textAlignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    }
    return `${textAlignMap[textAlign]}` || "";
};

export const getFontSizeForHeading = (level) => {
    const fontSizeMap = {
        1: "text-4xl",
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: "text-lg",
        6: "text-base",
    }
    return `${fontSizeMap[level]}` || "";
};