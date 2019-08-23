import React from 'react'
import { deleteItem } from '../container/action'

/**
 * @onCLick: event
 * @completed: status, use it to render delete line
 * @text: content
 */
const Item = ({ onClick, completed, text }) => (
    <li
        className="list-item"
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        <div className="item-circle">
        </div>
        <div className="item-content">
            {text}
        </div>
    </li>
)

function List(items) {
    return (
        <ul className="list-ul">
            {Array.from(items).forEach((item, index) => (
                <Item
                    index={index}
                    completed={item.status}
                    text={item.content}
                    onClick={store.dispatch(deleteItem(item.id, item.text))}
                />
            ))}
        </ul>
    )
}
export default List