import React from "react";

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
    


    render() {
        return(
            <div>
                {this.props.date}
            </div>
        );
    }
}

export default Reminder;