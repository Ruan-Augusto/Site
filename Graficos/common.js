const getCSS = (variavel) => {
    return getCompjutedStyle(document.body).getPropertyValue(variavel)
}

export {getCSS}
