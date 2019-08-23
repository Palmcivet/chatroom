import React from 'react'
import { addItem } from '../container/action'

export default class AddBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'ADD',
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ text: e.target.value })
    }
    render() {
        <form onSubmit={addItem(this.state.text)} >
            <input type="text" value={this.state.text} onChange={this.handleChange} />
            <input type="submit" value='Add' />
        </form>
    }
}