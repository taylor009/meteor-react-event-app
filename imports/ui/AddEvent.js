import React from 'react';

class AddEvent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            data: ""
        }
    }
    handleChange = (event) => {
        const field = event.target.name;

        this.setState({
            [field]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        // TODO: Create backend Meteor methods to save created events
        alert("Will be Saved in a little bit :)")
    };

    render(){
        return(
            <div>
                <div className="text-center">
                    <h4>Event Sync</h4>
                </div>
                <hr/>
                <div className="jumbotron" style={{ margin: "0 500px" }}>
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label>Title:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter event title"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Description:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter event description"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Event Date:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter date in the format mm.dd.yyyy"
                                name="date"
                                value={this.state.date}
                                onChange={this.handleChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Add Event</button>
                    </form>
                </div>
            </div>
        );
    };
}

export default AddEvent;