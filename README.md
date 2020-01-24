- [TODO list](#todo-list)
    - [Design](#design)
    - [Server](#server)


### Changelog

## TODO list
参考自 [React Redux](https://react-redux.js.org/) [文档](http://cn.redux.js.org/)

![](https://to-do-cdn.microsoft.com/webapp/4687dcb4c4ce7d1688f20fc417518f25cbe89bec59d8d8454ef0a3ebb42ae80a/desktop.jpg)
图片来自 [Microsoft](https://www.microsoft.com/)

### Design
侧栏：
- 列表
- Add

主界面
- 显示方式：SHOW 已完成|未完成|全部
- 项目：✅ Item
- Add 按钮：输入框

任务属性：
- 任务状态：
    - 已完成：STATUS_FINISHED
    - 未完成：STATUS_UNFINISHED
- 内容
- ID

### Server
目前采用模拟 API 测试，后期添加服务器
```json
[{
    "id": "l-2324",
    "name": "test list 1",
    "items":
        [{
            "id": "i-34376",
            "status": "STATUS_FINISHED",
            "content": "test item 1"
        },{
            "id": "i-34377",
            "status": "STATUS_FINISHED",
            "content": "test item 2"
        },{
            // ...
        }]
},{
    "id": "l-2325",
    "name": "test list 2",
    // ...
}]
```
