import React, { Component } from 'react';
import { render } from 'react-dom';
import './Styles/test.css';
// import './Styles/index.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.el = React.createRef();
        this.focus = this.focus.bind(this);
    }

    focus() {
        this.el.current.focus();
    }

    render() {
        return (
            <input type="text" ref={this.el} />
        );
    }
}

class SignInModal extends Component {
    constructor(props) {
        super(props);
        this.InputComp = React.createRef();
    }

    componentDidMount() {
        this.InputComp.focus();
    }

    render() {
        return (
            <div>
                <label>User name: </label>
                <Input ref={comp => { this.InputComp = comp; }} />
            </div>
        )
    }
}
render(
    <div className="slide">
        <section className="box">
            <ul className="box">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
            <span>
                aaasdgdf
                gsdgdfgf
                dfgfghfg
                hghgsddg
            </span>
            <SignInModal />
        </section>
    </div>,
    document.getElementById('root')
)