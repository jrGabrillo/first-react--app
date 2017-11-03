import React from 'react';
import ReactDOM from 'react-dom';

function hello(user){
	return `${user.name}`;

}

let user = {
	name: "Rufo N. Gabrillo Jr."
}

let App = <h1>{hello()}</h1>;


ReactDOM.render(App, document.getElementById('root'));
