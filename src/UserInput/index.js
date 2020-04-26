import React from 'react';
import './style.css'
import Reminder from "../Reminder"

class UserInput extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            dateList: [],
            timer: "",
        }

    }

    getDate(timer) {
        let tempList = this.state.dateList.slice();

        tempList.push(timer);
        this.setState({
            timer: timer,
            dateList: tempList,

        })
        console.log("just do it");

        //let currentTime = new Date(Date.now());
        //alert(currentTime);
        //console.log(currentTime);
        //     let finalList = [];
        //     for(let i = 0; i< this.state.dateList.length; i++){
        //         finalList.push(
        //             <Reminder date = {this.state.dateList[i]} />
        //                 )
        //                 }
        //     return finalList;
         }

        render()
        {
            let timer;
            return (
                <div>
                <div className={"main"}>

                    <div className={"datepicker"}>
                        <label>Choose a day/time : </label>
                        <input type="datetime-local" id={"time"} onChange={(time) => timer = time.target.value}/>
                        <div className={"button"}>
                            <button onClick={() => this.getDate(timer)}>Add Reminder</button>
                        </div>
                    </div>

                </div>
                    <div className="reminder">
                        {this.state.dateList.map((item, index) => (<div>
                            <Reminder end={this.state.dateList[index]} deleteTimer={() => {

                                this.state.dateList.splice(index, 1);
                                alert("Reminder ended");
                                this.setState({
                                    dateList: this.state.dateList
                                });


                            }}/>
                        </div>))
                        }
                    </div>
                </div>
            )
        }


    }


    export default UserInput;