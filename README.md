- [Snake](#snake)
    - [文件结构](#文件结构)
    - [Todo](#todo)
    - [Changelog](#changelog)
- [TODO list](#todo-list)
    - [Design](#design)
    - [Server](#server)
    - [Changelog](#changelog-1)
- [chatroom](#chatroom)
    - [Design](#design-1)
    - [Changelog](#changelog-2)
        - [1.0.0](#100)
        - [0.2.1](#021)
        - [0.1.0](#010)

## Snake
多人在线贪吃🐍

### 文件结构
- layouts
    - App：渲染图形界面
    - Controller：控制器
- Components
    - Handler：常用函数
    - Map：构建地图的结构
    - MapGame：注册玩家（对象数组）
    - Snake：构建蛇的对象
    - SnakeGame：，维护玩家的状态（遍历数组以更新）、执行相应动作（定时器轮调，触发移动信号），每次移动比对地图（边界检测）、渲染玩家（更改 `style`）
- Styles
    - index：主样式表
    - variable：变量

### Todo
1. 登录和中途离开（玩家的注册和移除）
2. 碰撞后的通知和处理
3. 组件合并，结构优化

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

### Changelog

## chatroom
A demo, the chat room

- WebSocket
- React
- Redux
- axios

### Design
导航栏
1. 登录用户名
2. 退出按钮

### Changelog
#### 1.0.0
- Adjust the structure of development
- Perfect the README

#### 0.2.1
- Modified to home page
- Add some login code
- Fixed some bugs

#### 0.1.0
- Forked from [Web](www.cssmoban.com)
- Cut some snippets
