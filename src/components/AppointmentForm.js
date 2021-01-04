import React, { Component } from 'react'
import App from '../App';

export default class AppointmentForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = { };
    };

    formHandler = (e) => {
        e.preventDefault();
        
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    submitHandler = (e) => {
        e.preventDefault();

        const data = this.state;
        
        if (!data || !data.title || !data.date || data.time) {
            alert('some of the elements are missing');
        } else {
            //write appointment to db
        }
    };
    

    render() {
        return (
            <form>
                <input name='title' type='text' placeholder='appointment title' onChange={this.formHandler} />
                <input name='description' type='text' placeholder='appointment description' onChange={this.formHandler} />
                <input name='date' type='date' onChange={this.formHandler} />
                <input name='time' type='time' onChange={this.formHandler} />
                {this.state.title}
                {this.state.description}
                {this.state.date}
                {this.state.time}
            </form>
        )
    }
}

