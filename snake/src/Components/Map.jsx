import React from 'react'
import { Table, Config } from '../Config'
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
        let sa = new Snake('2e2', 'D', [2, 2])
        let timer = setInterval(
            () => {
                sa.Move()
                // sa.Eat()
                console.log(sa.body)// TODO
            }, Config.spdSnake)
        window.addEventListener('keypress',
            (e) => (
                this.handleController(sa, e.key, timer)
            )
        )
    }

    componentWillUnmount() {
        window.removeEventListener('keypress',
            (e) => (
                this.handleController(sa, e.key)
            )
        )
    }

    handleController(snake, dir, timer) {
        console.log(dir);// TODO
        switch (dir) {
            case 'w':
                snake.Turn('U')
                break
            case 's':
                snake.Turn('D')
                break
            case 'a':
                snake.Turn('L')
                break
            case 'd':
                snake.Turn('R')
                break
            default:
                console.log("Please press WASD or ←→↑↓")
                clearInterval(timer)
                break
        }
    }

    render() {
        return <BgMap />
    }
}

export default Map