import React from 'react'
import { Config } from '../Config'
import Snake from './Snake'

let init = {
    id: "3d4ca1",
    direction: "U",
    color: "blue",
    position: [13, 12],
    food: [
        [1, 3],
        [9, 9],
        [4, 12],
        [8, 22]
    ]
}

function Palyer(snake) {
    let playerChain = new Array(new Snake(snake))

    this.addPlayer = (newSnake) => (
        playerChain.push(new Snake(newSnake))
    )
    this.delPlayer = (targetSnake) => (
        pass
    )
    /**
     * Player.start() 启动之后定时器不断重复
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
     * 1. 移动，返回头部位置
     * 2. 根据头部位置进行判断
     * 3. 地图上进行相应绘制
     */
    let moveJudge = (player) => {

        let body = player.Move()
    }

    return playerChain
}
export default Palyer