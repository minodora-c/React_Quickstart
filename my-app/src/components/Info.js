import React, {Component} from "react";
import './Info.css';

class Info extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ort: "Test",
            name: "John Doe",
            count: 0,
            elements: []
        }
    };

    async changeName3() {
        const callApi = await fetch("https://randomuser.me/api/");
        const {results} = await callApi.json();

        this.setState({
            ort: "Other Person",
            name: results[0].name.first,
            count: this.state.count + 1,
            elements: this.state.elements.concat({
                num: this.state.count + 1,
                oldName: results[0].name.first,
                gender: results[0].gender
            })
        })

    }

    render() {
        let updateName = ""
        if (this.state.name != "John Doe") {
            updateName = <div><p>Name updated <b>{this.state.count}x</b> :)</p>
            </div>
        }

        let list = this.state.elements.map(
            (el) => {
                return <li key={el.num}
                           style={{'background-color': el.gender == 'male' ? 'lightblue' : 'pink'}}>
                            {el.num} {el.oldName}
                        </li>
            }
        )
        return (
            <div id={"divInfo"}>
                <h1>The Info</h1>
                <p>Test aus Info: {this.state.ort}</p>
                <p>Name aus RandomUser: {this.state.name}</p>
                {updateName}
                <button onClick={this.changeName3.bind(this)}>Get Name</button>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default Info
