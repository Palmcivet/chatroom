import React from 'react'
import { Table } from '../Config'

let id = 1
const Map = () => (
    <div className="bg-map">
        {Table.map((items, line) => (
            <div className="line" key={line}>
                {items.map((item, cell) => (
                    <div className={item[0]}
                        key={cell}
                        id={id++}>
                    </div>
                ))}
            </div>
        ))}
    </div>
)

export default Map