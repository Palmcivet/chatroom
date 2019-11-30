import React, { Component } from 'react';
import { render } from 'react-dom';
import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";

class storeTree {
    @observable a = 9;
    @observable b = 10;
    @computed get getSum() {
        return this.a * this.b
    }
    @action addA = () => (this.a++)
    @action decA = () => (this.a--)
}

@observer
class App extends Component {
    constructor(props) {
        super(props)
    }
    return() {
        <div>
            <div>
                {props.store.getSum}
            </div>
            <button onClick={props.store.addA}>
                Add
            </button>
            <button onClick={props.store.decA}>
                Dec
            </button>
        </div>
    }
}

const storeSum = new storeTree();

render(
    <App store={storeSum} />,
    document.getElementById('root')
)