import React from 'react';

// Import User component and HOCs 
import User from './user.jsx';
import HocProps from './hocProps.jsx';
import HocStyle from './hocStyle.jsx';

// Wrap the component User with Props...
const UserHocProps = HocProps(User);
// And then wrap the UserHocProps.
const UserHocStyle = HocStyle(UserHocProps);

// Just a style for hr, as a destructuring example
const orangeStyle = {style:{border: '4px solid orange'}};

// A simple structure to show the results.
export default ({users}) => {
    return (<div>
                <h2>React Higher Order Components example:</h2>
                <br />
                <div>User component:</div>
                <hr />
                {users.map( u => <User key={u.id} data={u} />)}
                <hr {...orangeStyle} />
                <div>User component with HOCs: props (click to see what happens).</div>
                <hr />
                {users.map( u => <UserHocProps key={u.id} data={u} />)}
                <hr {...orangeStyle} />
                <div>User component with HOCs: props and style.</div>
                <hr />
                {users.map( u => <UserHocStyle key={u.id} data={u} />)}
                <hr />
            </div>)
}