import React from "react";

const Row = (props) => {
    return (
        <tr>
            <td className="time">{props.time}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
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
                    <Row time="8 am" />
                    <Row time="9 am" />
                    <Row time="10 am" />
                    <Row time="11 am" />
                    <Row time="12 pm" />
                    <Row time="1 pm" />
                    <Row time="2 pm" />
                    <Row time="3 pm" />
                    <Row time="4 pm" />
                    <Row time="5 pm" />
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;