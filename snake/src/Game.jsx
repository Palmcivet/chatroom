import React from 'react'
import { Config } from './Config'
import Snake from './Components/Snake'

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
     * 移动检测
     */
    let moveJudge = (player) => {

        let body = player.Move()
    }

    return playerChain
}
export default Palyer