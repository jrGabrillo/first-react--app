import React from 'react';
import ReactDOM from 'react-dom';

let a = 0;
function clock(){
	a++;
	let element = <h1>{a}</h1>;
	ReactDOM.render(element, document.getElementById('root'));
}

setInterval(function(){
	clock();
},1000);