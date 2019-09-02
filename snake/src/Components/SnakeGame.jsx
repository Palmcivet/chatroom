import { Config, Table } from '../Config'
import Snake from './Snake'
import { handleRegister } from './Handler'

function Palyer(snake) {
    /**
     * constructor(), with a instance
     */
    let playerChain = new Array(new Snake(snake))
    let playerTable = Table

    /**
     * 当玩家进入或离开，执行相应操作，将玩家从 playerChain 中移除
     */
    this.addPlayer = (addSnake) => (
        playerChain.push(new Snake(addSnake))
    )
    this.delPlayer = (delSnake) => (
        pass
    )

    /**
     * 启动定时器，不断重复
     * 常规移动，每次移动进行判断：检测是否撞墙或重合
     */
    this.start = () => (
        setInterval(
            () => (
                playerChain.forEach((eachPlayer) => {
                    moveJudge(eachPlayer)
                })
            ),
            Config.spdSnake
        )
    )

    /**
     * 移动检测，有如下步骤：
     * 1. 根据下一位置进行判断：
     *      - 移动，返回头尾位置，头部添加颜色，尾部移除颜色
     *      - 捕获，返回头部位置，只添加颜色，不移除（即变长）
     *      - 碰撞
     * 2. 地图上进行相应绘制
     */
    let moveJudge = (player) => {
        if (condition) {
            let body = player.Move()
            handleRegister(player, body.head, player.color)
            handleRegister(player, body.tail, Config.bgStyle[0])
        }
        else if (condition) {
            let body = player.Eat()
            handleRegister(player, body.head, player.color)
        }
    }
    return playerChain
}
export default Palyer