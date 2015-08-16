// Create DOM Structure, global variables
var body = document.querySelectorAll('body')[0];
var header = document.createElement('header');
var divArray = document.querySelectorAll('div');
var counter = document.createElement('section');
body.appendChild(counter);
counter.innerHTML = 'Current Matches is :' + '<span id="scoreUpdate"></span>';
var glasses_clicked = 0;
var hat_clicked = 0;
var stash_clicked = 0;
var camera_clicked = 0;
var counterSpan = document.getElementById('scoreUpdate');
var matches = 0;
counterSpan.innerHTML = matches;

//create Header
function populateHeader(title) {
	body.appendChild(header);
	header.style.color = '#CDFF00';
	header.style.fontFamily = 'serif';
	header.style.fontSize = '48px';
	header.style.width = '90%';
	header.style.paddingBottom = '2%';
	header.style.textAlign = 'center';
	header.innerHTML = 'Hipster Memory';
}
populateHeader();


var br = document.createElement('br');
var section = document.createElement('section');
section.setAttribute('id', 'memoryGameContainer');
body.appendChild(section);
body.style.backgroundColor = '#B8B89F';
section.style.width = '90%';
section.style.float = 'right';


//create a 4 x 4 cards
function populateBoard(numofCards) {
	if(isNaN(numofCards)) {
		numofCards === 16;
	}

	for (var i = 0; i < numofCards; i++) {
		div = document.createElement('div');
		section.appendChild(div);
		div.setAttribute('id', 'div' + [i]);
		div.style.backgroundColor = "#52656B";
		div.style.border = 'solid 3px #FF3B77';
		div.style.width = '20%';
		div.style.paddingBottom = '14.1%'
		div.style.float = 'left';
		div.style.marginTop = '5px';
		div.style.marginBottom = '5px';
		div.style.marginRight = '2px';
		div.style.marginLeft = '2px';
	}
}
populateBoard(16);

// // Event Triggers to "flip" the cards
// create 2 pairs per picture cards
function backOfCard(divNum) {
	var divArray = document.querySelectorAll('div');
	divArray[divNum].addEventListener('click', function() {
		this.style.backgroundColor = "#52656B";
		this.style.border = 'solid 3px #FF3B77';
		this.style.width = '20%';
		this.style.paddingBottom = '14.1%'
		this.style.float = 'left';
		this.style.marginTop = '5px';
		this.style.marginBottom = '5px';
		this.style.marginRight = '2px';
		this.style.marginLeft = '2px';
	});
}

function eventListenerHat(divNum) {
	var divArray = document.querySelectorAll('div');
	for( var i = 0; i < divArray.length; i++) {
		divArray[divNum].addEventListener('click', function() {
			this.innerHTML = '<img src="Hat.jpg" height="170px" height="260px">';
			this.style.paddingBottom = '4px';
		});
	}
}

function eventListenerGlasses(divNum) {
	var divArray = document.querySelectorAll('div');
	for( var i = 0; i < divArray.length; i++) {
		divArray[divNum].addEventListener('click', function() {
			this.innerHTML = '<img src="Glasses.jpg" height="170px" height="260px">';
			this.style.paddingBottom = '4px';
		});
	}
}

function eventListenerStash(divNum) {
	var divArray = document.querySelectorAll('div');
	for( var i = 0; i < divArray.length; i++) {
		divArray[divNum].addEventListener('click', function() {
			this.innerHTML = '<img src="stash.jpg" height="170px" height="260px">';
			this.style.paddingBottom = '4px';
		});
	}
}

function eventListenerCamera(divNum) {
	var divArray = document.querySelectorAll('div');
	for( var i = 0; i < divArray.length; i++) {
		divArray[divNum].addEventListener('click', function() {
			this.innerHTML = '<img src="Camera.jpg" height="170px" height="260px">';
			this.style.paddingBottom = '4px';
		});
	}
}


eventListenerGlasses(0);
eventListenerGlasses(1);
eventListenerHat(2);
eventListenerStash(3);
eventListenerCamera(4);
eventListenerCamera(5);
eventListenerGlasses(6);
eventListenerStash(7);
eventListenerHat(8);
eventListenerStash(9);
eventListenerHat(10);
eventListenerGlasses(11);
eventListenerHat(12);
eventListenerStash(13);
eventListenerCamera(14);
eventListenerCamera(15);

// Score that keeps track of how many pairs the player had
function clearBoard() {
	var imgs = document.querySelectorAll('img');
	for(var i = 0; i < imgs.length; i++) {
		imgs[i].setAttribute('src', 'blankSlate.jpg');
	}
}

function glassesCount(numA, numB, numC, numD) {
	var divArray = document.querySelectorAll('div');
	divArray[numA].onclick = function() {
		glasses_clicked += 1;
		console.log(glasses_clicked);
	};
	divArray[numB].onclick = function() {
		glasses_clicked += 1;
		console.log(glasses_clicked);
	};
	divArray[numC].onclick = function() {
		glasses_clicked += 1;
		console.log(glasses_clicked);
	};
	divArray[numD].onclick = function() {
		glasses_clicked += 1;
		console.log(glasses_clicked);
	};
	if(glasses_clicked % 2 === 0) {

	} else if (glasses_clicked === 2) {
		matches +=1;
		counterSpan.innerHTML = 1;
	};
}

glassesCount(0,1,6,11);

// reset button
function resetButton() {
	var button = document.createElement('button');
	var imgs = document.querySelectorAll('img');
	header.appendChild(button);
	button.innerHTML = 'Reset Board';
	button.addEventListener('click', function () {
		clearBoard();
	})
}
resetButton();

// if there is an accurate match the cards will stay up.
