import React from 'react'
/**
 * 筛选器
 */

export default Filter = () => (
    <ul>
        <FilterCondition filter="ALL">ALL</FilterCondition>
        <FilterCondition filter="FIN">FINISHED</FilterCondition>
        <FilterCondition filter="UN">UNFINISHED</FilterCondition>
    </ul>
)

const FilterCondition = () => (
    <li onClick={dispatch(action)} value={this.props}></li>
)

/**
 * reducer
 */
const getFiltered = (todos, filter) => {
    switch (filter) {
        case 'ALL':
            return todos
        case 'FIN':
            return todos
        case 'UN':
            return todos
        default:
            return todos
    }
}

