import React from 'react'
import { Config } from '../Config'

let Table = new Array()
for (let i = 0; i < Config.bgLine; i++) {
    Table[i] = new Array();
    for (let j = 0; j < Config.bgCell; j++) {
        // Table[i][j] = 'N';
        Table[i][j] = [Config.bgStyle[0], ''];
    }
}

let id = 1
const Map = () => (
    <div className="bg-map">
        {Table.map((items, line) => (
            <div className="line" key={line}>
                {items.map((item, cell) => (
                    <div className={item[0] == 'N'}
                        key={cell}
                        id={id++}>
                    </div>
                ))}
            </div>
        ))}
    </div>
)

export default Map