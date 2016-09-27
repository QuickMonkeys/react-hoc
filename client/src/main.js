import React from 'react';
import {render} from 'react-dom';

import "../css/main.css";
import "bootstrap-webpack";

import App from './components/app.jsx';

// Some data to show the result.
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

render(<App users={users}/>, document.querySelector('#content'));