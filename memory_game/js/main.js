var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function () {
	//var scoreTotal = 1;
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		/*
		//adds scoreTotal to paragraph
		var score = document.getElementById("score-listing");
		score.textContent = "Score: " + scoreTotal;
		//inrements score with each match
		scoreTotal += 1;
		*/
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function () {
	//gets card's position in array
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	};
};

createBoard();

var reset = function () {
	cardsInPlay = [];
	document.getElementById("game-board").innerHTML = "";
	createBoard();
};

document.querySelector("button").addEventListener("click", reset);

