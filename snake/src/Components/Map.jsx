import React from 'react'

const config = {
    bgLine: 20,
    bgCell: 20
}

const Cell = () => {
    return (
        Array(config.bgCell).fill().map((indexCell) => (
            <div className="cell" key={indexCell}></div>
        ))
    )
}

const Map = () => (
    <div className="bg-map">
        {Array(config.bgLine).fill().map((indexLine) => (
            <div className="line" key={indexLine}>
                <Cell />
            </div>
        ))}
    </div>
)
export default Map