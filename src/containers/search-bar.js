import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    className="form-control"
                    value={this.state.term}
                    placeholder="Get a 5-day forecast in your favorite cities"
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}