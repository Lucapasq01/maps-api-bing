import React from "react";
import { render } from "react-dom";

export default class CiaoneClass extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>ocrop {this.props.name}</h1>
            </div>
        );
    }

    
}