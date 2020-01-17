import React, { Component } from 'react';
import { render } from 'react-dom';
import { observable, computed } from 'mobx';
import { observer, Provider, inject } from 'mobx-react'

//数据结构
class Todo {
    @observable todos = [
        {
            id: 1,
            title: '任务1',
            finished: false
        }, {
            id: 2,
            title: '任务2',
            finished: false
        }
    ];

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

@observer
class TodoListView extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todoList.todos.map(todo =>
                        <TodoView todo={todo} key={todo.id} />
                    )}
                </ul>
                未完成任务数：{this.props.todoList.unfinishedTodoCount}
            </div>
        )
    }
}

@observer
class TodoView extends Component {
    render() {
        var todo = this.props.todo;
        return (
            <li>
                <label>
                    <input
                        type="checkbox"
                        checked={todo.finished}
                        onClick={() => this.props.todo.finished = !this.props.todo.finished}
                    />
                    {todo.title}
                </label>
            </li>
        )
    }
}

const todoList = new Todo();

@inject('todo')
class ToDoApp extends Component {
    render() {
        return (
            <div>
                <TodoListView todoList={this.props.todo} />
            </div>
        );
    }
}

render(
    <Provider todo={todoList}>
        <ToDoApp />
    </Provider>,
    document.getElementById('root')
)