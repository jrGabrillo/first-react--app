import React from 'react';
import ReactDOM from 'react-dom';

function clock(){
	let element = <h1>{new Date().toLocaleTimeString()}</h1>;
	ReactDOM.render(element, document.getElementById('root'));
}

setInterval(function(){
	clock();
},1000);