import React from 'react';

export default class User extends React.Component {
    
    constructor() {
        super();
    }
    
    render() {
        let {data, clickProps} = this.props;
        return (<div {...clickProps}>
                    <div className="photo"><img src={data.photo} /></div>
                    <div className="name">{data.last_name}, {data.first_name}</div>
                    <hr />
                    <div className="email">{data.email}</div>
                </div>);
    }
    
}