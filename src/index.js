import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
let a = 0;
function clock(){
	a++;
	let element = <h1>{a}</h1>;
=======
function clock(){
	let element = <h1>{new Date().toLocaleTimeString()}</h1>;
>>>>>>> 82e5b9c29b5806aa5757895e5b8ee3adf21c9bc0
	ReactDOM.render(element, document.getElementById('root'));
}

setInterval(function(){
	clock();
<<<<<<< HEAD
},1000);
=======
},1000);
>>>>>>> 82e5b9c29b5806aa5757895e5b8ee3adf21c9bc0
