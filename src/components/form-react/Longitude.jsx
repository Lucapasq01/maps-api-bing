import React from "react";
import BingMap from "../bingmaps-react/BingMapsReact";


export default class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'enter a values'
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        longitude:
                        <input value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}