import Snake from "./Snake";

/**
 * NULL: N
 * Food: F
 * Head: H
 * Body: B
 */

 
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
