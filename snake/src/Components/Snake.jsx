import { Config } from '../Config'

/**
 * 描述蛇的对象，围绕 body 结构进行操作
 * @param {String} id - 哈希字符，标识蛇
 * @param {Array} initPos - 初始时的位置，即头的位置
 * @param {String} initDir - 初始时的方向
 */
function Snake(id, initDir, initBody) {
    this.id = id
    this.dir = initDir
    this.head = initBody
    this.body = new Array()
    this.body[0] = []

    /**
     * generate the next position
     */
    let __next = () => {
        switch (this.dir) {
            case ('U'):
                this.head[0] = this.head[0] - 1
                break
            case ('D'):
                this.head[0] = this.head[0] + 1
                break
            case ('L'):
                this.head[1] = this.head[1] - 1
                break
            case ('R'):
                this.head[1] = this.head[1] + 1
                break
        }
        return this.head
    }

    this.Turn = (changeDir) => {
        if ((Config.dirA.indexOf(changeDir) == -1) && (Config.dirB.indexOf(changeDir) == -1))
            return "Invalid Argument: changeDir"
        this.dir = changeDir
    }

    /**
     * 描述蛇捕获食物的动作，在捕食时触发
     * @param {Array} foodPos - 食物的位置，the position of the food to be eaten
     */
    this.Eat = () => {
        let head = __next()
        this.body.reverse()
        this.body.push(head)
        this.body.reverse()
        return head
    }

    /**
     * 描述蛇的常规移动，周期性触发
     * @returns {Object}
     */
    this.Move = () => {
        let head = __next()
        this.body.reverse()
        this.body.push(head)
        let tail = this.body.pop()
        this.body.reverse()
        return {
            head: head,
            tail: tail
        }
    }
}

export default Snake