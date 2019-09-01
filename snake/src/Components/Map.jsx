import React from 'react'
import { Table, Config } from '../Config'
import Snake from "./Snake";

let id = 1
const BgMap = () => (
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

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.handleController = this.handleController.bind(this)
    }

    componentDidMount() {
        window.addEventListener('keypress',
            (e) => (
                this.handleController(sa, e.key, timer)
            )
        )
    }

    componentWillUnmount() {
        window.removeEventListener('keypress',
            (e) => (
                this.handleController(sa, e.key, timer)
            )
        )
    }

    register(style, point) {
        switch (style) {
            case 'N':
                Table[point[0]][point[1]] = 'N'
                break;
            case 'F':
                Table[point[0]][point[1]] = 'F'
                break;
            case 'H':
                Table[point[0]][point[1]] = 'H'
                break;
            case 'B':
                Table[point[0]][point[1]] = 'B'
                break;
            default:
                break;
        }
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
        }
    }

    render() {
        return <BgMap />
    }
}

export default Map