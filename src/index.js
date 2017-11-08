import React from 'react';
import ReactDOM from 'react-dom';

function clock(){
	let time = `${new Date().toLocaleTimeString()}`;
	ReactDOM.render(time,document.getElementById('root'));	
	setTimeout(function(){
		clock();	
	},1000)
};

let btn = <div>
			<button onClick={clock}>Click Me</button>
			</div>;

ReactDOM.render(btn,document.getElementById('root'));