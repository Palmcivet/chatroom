import React from 'react'

class App extends React.component {
}

const config = {
    bgLine: 9,
    bgCell: 9
}
let bgMap = new Array()
for (let i = 0; i < config.bgLine; i++) {
    bgMap[i] = new Array[i]
    for (let j = 0; j < config.bgCell; j++) {
        bgMap[i][j] = j;
    }
}

const Background = () => {
    return {

    }
}


export default Background