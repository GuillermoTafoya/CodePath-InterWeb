import {React, Component} from "react";
import Event from './Event'
class EventCol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            events: props.events? props.events : [],
        }
    }
    render() {
        const renderObj = []
        for (let i = 0; i < 7; i++) {
        let event = this.state.events.find((event) => event.day === i)
        if (event) {
            renderObj.push(<Event key={i} event={event.event} color={event.color} />)
        }
        else {
            renderObj.push(<Event key={i} />)
        }
        }
        return (
            <tr>
                <td>{this.state.time}</td>
                {renderObj}
            </tr>
        )
    }
}

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>         
                </thead>
                <tbody>
                    <EventCol time="8 am" events={[{day:0, event:"Math", color:"red"}, {day:1, event:"Math", color:"red"}, {day:4, event:"Chemistry", color:"blue"}]} />
                    <EventCol time="9 am" />
                    <EventCol time="10 am" events={[{day:6, event:"History", color:"green"}]} />
                    <EventCol time="11 am" events={[{day:2, event:"English", color:"yellow"}]} />
                    <EventCol time="12 pm" />
                    <EventCol time="1 pm" events={[{day:3, event:"Science", color:"purple"}]} />
                    <EventCol time="2 pm" />
                    <EventCol time="3 pm"/>
                    <EventCol time="4 pm"  />
                    <EventCol time="5 pm" events={[{day:5, event:"Fancy Dinner", color:"pink"}]} />
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;