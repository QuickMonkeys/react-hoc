import React from 'react';
import {render} from 'react-dom';

import "../css/main.css";
import "bootstrap-webpack";

import User from './components/user.jsx';
import HocProps from './components/hocProps.jsx';
import HocStyle from './components/hocStyle.jsx';

const UserHocProps = HocProps(User);
const UserHocStyle = HocStyle(UserHocProps);

const orangeStyle = {style:{border: '4px solid orange'}};

const users = [
    {
      "id":1,
      "first_name":"Brandon",
      "last_name":"Fields",
      "email":"bfields1@oracle.com",
      "gender":"M",
      "photo": "https://randomuser.me/api/portraits/thumb/men/1.jpg"
   },
   {
      "id":2,
      "first_name":"Catherine",
      "last_name":"Watkins",
      "email":"cwatkins6@cargocollective.com",
      "gender":"F",
      "photo": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
   }
]

const App = ({users}) => {
        return (<div>
                    <h2>React Higher Order Components example:</h2>
                    <br />
                    <div>User component:</div>
                    <hr />
                    {users.map( u => <User data={u} />)}
                    <hr {...orangeStyle} />
                    <div>User component with HOCs props (click to see what happens):</div>
                    <hr />
                    {users.map( u => <UserHocProps data={u} />)}
                    <hr {...orangeStyle} />
                    <div>User component with HOCs props and style (click to see what happens):</div>
                    <hr />
                    {users.map( u => <UserHocStyle data={u} />)}

                </div>)
        
    }

render(<App users={users}/>, document.querySelector('#content'));
