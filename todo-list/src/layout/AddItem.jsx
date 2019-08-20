import React from "react"

export default class AddItem extends React.Component {
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
        <form onSubmit={store.dispatch(addItem(this.state))} >
            <input type="text" value={this.state.text} onChange={this.handleChange} />
            <input type="submit" value='Add' />
        </form>
    }
}