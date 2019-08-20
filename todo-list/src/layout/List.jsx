import React from 'react'
import { deleteItem } from '../action'

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
            {items.forEach((index, item) => (
                <Item
                    key={index}
                    completed={item.status}
                    text={item.content}
                    onClick={store.dispatch(deleteItem(item.id))}
                />
            ))}
        </ul>
    )
}
export default List