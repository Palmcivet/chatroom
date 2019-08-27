import React from 'react'
import Config from '../Config'

/**
 * NULL: N
 * Food: F
 * Head: H
 * Snake:S
 */

const sMap = Array(Config.bgLine * Config.bgCell).fill('N')

const Snake = () => (
    <div className="bg-map">
        {sMap.map(function (item, index) {
            if (index % Config.bgLine == 0) {
                <div className="line" key={index}></div>
            }
            <div className={"cell"} key={index}></div>
        })}
    </div>
)

let init = {
    id: "3d4ca1",
    place: [13, 12],
    color: {
        head: "green"
    },
    food: [
        [1, 3],
        [9, 9],
        [4, 12],
        [8, 22]
    ]
}


export default Snake