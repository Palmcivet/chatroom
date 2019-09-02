/**
 * 颜色注册，注册后渲染地图，接收对象、节点和颜色
 */
const handleRegister = (snake, point, style) => {
    Table[point[0]][point[1]][0] = style
    Table[point[0]][point[1]][1] = snake.id
}

const handleController = (snake, dir, timer) => {
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

export default { handleRegister, handleController }