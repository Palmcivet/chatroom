import Config from '../Config'

/**
 * 描述蛇的对象，围绕 body 结构进行操作
 * @param {String} id - 哈希字符，标识蛇
 * @param {Array} initPos - 初始时的位置，即头的位置
 * @param {String} initDir - 初始时的方向
 */
function Snake(id = '5fece', initDir = 'U', initBody = [1, 1]) {
    this.id = id
    let dir = initDir
    let head = initBody
    this.body = new Array()
    this.body[0] = []

    /**
     * generate the next position
     * */
    selfNext = () => {
        let nextPos
        switch (dir) {
            case ('U'):
                nextPos = [head[0] - 1, head[1]];
            case ('D'):
                nextPos = [head[0] + 1, head[1]];
            case ('L'):
                nextPos = [head[0], head[1] - 1];
            case ('R'):
                nextPos = [head[0], head[1] + 1];
        }
        return nextPos
    }

    this.Turn = (changeDir) => {
        if (not(changeDir in Config.dirA) && not(changeDir in Config.dirB))
            return "Invalid Argument: changeDir"
        dir = changeDir
    }

    /**
     * 描述蛇捕获食物的动作，在捕食时触发
     * @param {Array} foodPos - 食物的位置，the position of the food to be eaten
     */
    this.Eat = () => {
        this.body.reverse().push(selfNext()).reverse()
        head = selfNext
    }

    /**
     * 描述蛇的常规移动，周期性触发
     */
    this.Move = () => {
        this.body.reverse().push(selfNext()).reverse()
        this.body.pop()
    }
}

export default Snake