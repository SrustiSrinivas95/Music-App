import React, { Component } from 'react';


class Input extends Component {
    render(props) {
        return (
            <div className="form-group">
                <label className="form-label">{this.props.title}</label>
                <input
                    className="form-control"
                    id={this.props.id}
                    name={this.props.name}
                    type={this.props.inputType}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                    placeholder={this.props.placeholder}
                    {...props} />
            </div>
        )
    }
}

export default Input;