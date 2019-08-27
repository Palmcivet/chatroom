import React from 'react'
import Config from '../Config'

const Cell = () => {
    return (
        Array(Config.bgCell).fill().map((index) => (
            <div className={"cell"}></div >
        ))
    )
}

const Map = () => (
    <div className="bg-map">
        {Array(Config.bgLine).fill().map((index) => (
            <div className={"line"}>
                <Cell />
            </div>
        ))}
    </div>
)
export default Map