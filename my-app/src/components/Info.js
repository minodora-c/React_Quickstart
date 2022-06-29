import React, {Component} from "react";
import './Info.css';

class Info extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ort: "Test",
            name: "John Doe",
            count: 0,
            elements: [],
            message: ""
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

    };

    changeMessage(event) {
        this.setState({
            message: event.target.value
        })
    };

    render() {
        let updateName = ""
        let classy = ""
        if (this.state.count > 0) {
            updateName =
                <div>
                    <p>Name updated <b>{this.state.count}x</b> :)</p>
                </div>;
        }
        /*
        if (this.state.count % 2 == 0) {
            classy = "button"
        } else {
            classy = "buttonChange"
        }
        */
        classy = this.state.count % 2 == 0 ? "button" : "buttonChange"

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
                <input type="text" value={this.state.message}
                       onChange={this.changeMessage.bind(this)}/>
                <p>{this.state.message}</p>
                <p>Test aus Info: {this.state.ort}</p>
                <p>Name aus RandomUser: {this.state.name}</p>
                {updateName}
                <button onClick={this.changeName3.bind(this)}
                        className={classy}>Get Name
                </button>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default Info
