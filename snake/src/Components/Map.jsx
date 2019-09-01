import React from 'react'
import Table, { Config } from '../Config'
import Snake from "./Snake";

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
    constructor(props) {
        super(props)
        this.handleController = this.handleController.bind(this)
    }
    componentDidMount() {
        let sa = new Snake('2e2', 'U', [2, 4])
        setInterval(() => {
            sa.Move()
            
        }, Config.spdSnake)
        window.addEventListener('keypress',
            (e) => (
                this.handleController(sa, e.key)
            )
        )
    }
    handleController(snake, dir) {
        console.log(dir);
        switch (dir) {
            case ('up' || 'w'):
                snake.Turn('U')
            case ('down' || 's'):
                snake.Turn('D')
            case ('left' || 'a'):
                snake.Turn('L')
            case ('right' || 'd'):
                snake.Turn('R')
            default:
                console.log("Please press WASD or ←→↑↓")
        }
    }
    componentUnMount() {
    }
    render() {
        <BgMap />
    }
}

export default Map