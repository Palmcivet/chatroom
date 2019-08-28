import Config from '../Config'

/**
 * 描述蛇的对象，围绕 body 结构进行操作
 * @param {String} id - 哈希字符，标识蛇
 * @param {Array} initPos - 初始时的位置，即头的位置
 * @param {String} initDir - 初始时的方向
 */
function Snake(id = '5fece', initPos = [0, 0], initDir = 'U') {
    this.id = id
    this.body = initPos
    this.dir = initDir

    this.Turn = (changeDir) => {
        if (not(changeDir in Config.dirA) && not(changeDir in Config.dirB))
            return "Invalid Argument: changeDir"
        this.dir = chgDir
    }

    /**
     * 描述蛇的常规移动
     * @param {Array} nextPos - 行进方向上的下一个点，the next point on the way
     */
    this.Move = (nextPos) => {
        if (typeof nextPos !== Array)
            return "Invalid Argument: nextPos"
        this.body.reverse()
        this.body.push(nextPos)
        this.body.reverse()
        this.body.pop()
    }

    /**
     * 描述蛇捕获食物的动作
     * @param {Array} foodPos - 食物的位置，the position of the food to be eaten
     */
    this.Eat = (foodPos) => {
        if (typeof foodPos !== Array)
            return "Invalid Argument: foodPos"
        this.body.reverse()
        this.body.push(foodPos)
        this.body.reverse()
    }
}

export default Snake