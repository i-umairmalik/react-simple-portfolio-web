import React, { Component } from 'react';
import Slide from "react-reveal/Slide"
class TimeCountdown extends Component {
    constructor(props){
        super(props);
        this.state={
            deadLine:'Feb 20 2019',
            days:"0",
            hours:"0",
            minutes:"0",
            seconds:"0"
        }
        this.getTime = this.getTime.bind(this);
    }

    getTime(timeLine){
        const time = Date.parse(timeLine) - Date.parse(new Date());
        if(time > 0){
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/(1000*60))%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor((time/(1000*60*60*24)));

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })

        }else{
            console.log("Date passed")
        }

    }
    componentDidMount(){
        setInterval(()=> this.getTime(this.state.deadLine),1000);
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event Starts in
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.days}
                            </div>
                            <div className="countdown_tag">
                                Days
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.hours}
                            </div>
                            <div className="countdown_tag">
                                hs
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.minutes}
                            </div>
                            <div className="countdown_tag">
                                min
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.seconds}
                            </div>
                            <div className="countdown_tag">
                                sec
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default TimeCountdown;