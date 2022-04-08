import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            time:Date.now()
        };

        setTimeout( ()=>this.start() );
       
    }

    render(){
        return(
            <div>
            <p>{this.state.time}</p>
            <button onClick={() => this.start()}>star</button>
            <button onClick={() => this.stop()}>stop</button>
            </div>

        );
    }

    start(){
        this._clockIntervalId =setInterval(() => this.setState({
            time: Date.now()   
        }),10);
    }

    stop(){
        
        clearInterval(this._clockIntervalId);
    }

}