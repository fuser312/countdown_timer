import React from "react";
import './style.css'

class Reminder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };


    }
    componentWillMount() {
        this.showReminderUntil(this.props.end);
    }

    componentDidMount() {
        this.interval=setInterval(() => this.showReminderUntil(this.props.end), 1000);
    }
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    showReminderUntil(end) {
        const time = Date.parse(end) - Date.parse(new Date());

        if(time <0) {
            this.props.deleteTimer();
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({ days, hours, minutes, seconds });
        }

    }

    render() {
        return(
            <div className="reminder">
                {this.state.days} days {this.state.hours} hours {this.state.minutes} minutes {this.state.seconds} seconds
            </div>
        );
    }
}

export default Reminder;