import React from 'react'
import Table from '../Config'

let id = 1
const BgMap = () => (
    <div className="bg-map">
        {Table.map((items, line) => (
            <div className="line" key={line}>
                {items.map((item, cell) => (
                    <div className={item == 'F' ? "food cell" : (item == 'H' ? "head cell" : (item == 'B' ? "body cell" : "cell"))}
                        key={cell}
                        id={id++}>
                    </div>
                ))}
            </div>
        ))}
    </div>
)

class Map extends React.Component {
    constructor(this) {
        super(this)
    }
    componentDidMount() {
    }
    componentUnMount() {
    }
    render() {
        <BgMap />
    }
}

export default Map