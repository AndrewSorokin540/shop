const sizeNameToRus = (name) => {
    switch (name) {
        case 'sm':
            return 'Маленькая'
        case 'md':
            return 'Средняя'
        case 'lg':
            return 'Большая'
        default:
            return ''
    }
}

export default sizeNameToRus;