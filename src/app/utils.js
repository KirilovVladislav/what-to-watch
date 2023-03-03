export const getHrefFromTitle = (title) => {
    return `${title?.toLowerCase().replace(/ /ig, '-').replace(/:/ig, '')}`
} 

export const getRandomId = (length) => {
    return `${Math.ceil(Math.random() * length)}`
}

export const getRatingLevel = (score) => {
    if (score < 3) return 'Bad'
    else if (score < 5) return 'Normal'
    else if (score < 8) return 'Good'
    else if (score < 10) return 'Very good'
    else if (score == 10) return 'Avesome'
}

export const getStarList = (listSize) => {
    const res = []
    let size = listSize
    while (size) {
        res.push(size)
        size--
    }

    return res
}