let outputElement = document.getElementById('outputElement');
let contentGridElement = document.getElementById('contentGrid');

let myJSON = {
  "title" : "Web-based Activities",
  "picture_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lil-Bub-2013.jpg/320px-Lil-Bub-2013.jpg",
  "short" : "ascii art rpg",
  "back_color" : "#FF0072",
  "link" : "https://candybox2.github.io/",
  "activites" : ["single player", "dog", "roomba"]
}

var randomIndex = Math.floor(Math.random() * myJSON["activites"].length);

let jsonDatabase = [
  {
    "title" : "Candy Box",
    "picture_url" : "candy.jpg",
    "short" : "ascii art rpg, save slots available offline",
    "back_color" : "#9FD2D6",
    "link" : "https://candybox2.github.io/",
    "tag" : ["single player", "play", "art"]
  },
  {
    "title" : "Tetris",
    "picture_url" : "tetris.jpg",
    "short" : "classic online game, can play in public lobbies or make private rooms with up to 99 players",
    "back_color" : "#8154EF",
    "link" : "https://jstris.jezevec10.com/",
    "tag" : ["online", "popular", "single player", "multiplayer"]
  },
  {
    "title" : "Online Go",
    "picture_url" : "go.png",
    "short" : "set up private games, play puzzles, compete in tournaments, get rankings and more",
    "back_color" : "#FF4E4E",
    "link" : "https://online-go.com/",
    "tag" : ["1-2 players", "play", "board game"]
  },
  {
    "title" : "Reversi",
    "picture_url" : "reversi.png",
    "short" : "play this strategy game casually with private game rooms or competitively with live opponents, user profiles and stats, rankings and more",
    "back_color" : "#405f7c",
    "link" : "https://www.playok.com/en/reversi/#",
    "tag" : ["board game", "1-2 players", "play", "mobile avail"]
  },
  {
    "title" : "Shared Piano",
    "picture_url" : "shared.png",
    "short" : "play music together on the web, whether to perform, teach or have fun, multiple instruments are available",
    "back_color" : "#ff0072",
    "link" : "https://musiclab.chromeexperiments.com/Shared-Piano/",
    "tag" : ["multiplayer", "single player", "music"]
  },
  {
    "title" : "Longwave",
    "picture_url" : "wavelength.png",
    "short" : "Longwave is an online version of Wavelength, a social guessing game based on how well you can think like your teammate",
    "back_color" : "#A4D5A2",
    "link" : "https://longwave.web.app/",
    "tag" : ["4+ players", "play", "mobile avail"]
  },
  {
    "title" : "Codenames",
    "picture_url" : "codenames.jpg",
    "short" : "a clue giving and solving game based on word associations, rec. 2-10 players, but can house more",
    "back_color" : "#009EB6",
    "link" : "https://codenames.game/",
    "tag" : ["card game", "multiplayer", "popular"]
  },
  {
    "title" : "Gather Town",
    "picture_url" : "gather.jfif",
    "short" : "virtual spaces for video-calling, simulating buildings and rooms in a video game aesthetic",
    "back_color" : "#c1a411",
    "link" : "https://gather.town/",
    "tag" : ["video calling", "interactive"]
  },
  {
    "title" : "Type Racer",
    "picture_url" : "typeracer.jpg",
    "short" : "race against live opponents and test your speed in an online typing competition",
    "back_color" : "#043083",
    "link" : "https://play.typeracer.com/",
    "tag" : ["multiplayer", "play", "popular"]
  },
  {
    "title" : "Skribbl.io",
    "picture_url" : "skribbl.jpg",
    "short" : "play this drawing and guessing game with friends or in public rooms, up to 12 players",
    "back_color" : "#1E4B8F",
    "link" : "https://skribbl.io/",
    "tag" : ["multiplayer", "popular", "art"]
  },
  {
    "title" : "How Secure?",
    "picture_url" : "password.jpg",
    "short" : "assess your passwords, get tips or play around with how long it takes to crack different combinations",
    "back_color" : "#DA7D3A",
    "link" : "https://howsecureismypassword.net/",
    "tag" : ["educational", "mobile avail"]
  },
  {
    "title" : "Playing Cards",
    "picture_url" : "playing.png",
    "short" : "play pretty much any card game with your friends in custom virtual game rooms",
    "back_color" : "#52BBAE",
    "link" : "https://playingcards.io/",
    "tag" : ["card game", "play", "multiplayer"]
  },
  {
    "title" : "Surviv.io",
    "picture_url" : "surviv.jpg",
    "short" : "join solo or fight with a squad in this 2d battle royale game, get kills and become the survivor",
    "back_color" : "#5F8437",
    "link" : "https://surviv.io/",
    "tag" : ["1-4 players", "play", "mobile avail"]
  },
  {
    "title" : "Fishbowl",
    "picture_url" : "fishbowl.jpg",
    "short" : "also called Monikers, this is a fun guessing game with Taboo, Charades and Password",
    "back_color" : "#FF8601",
    "link" : "https://fishbowl-game.com/",
    "tag" : ["4+ players", "card game", "mobile avail"]
  },
  {
    "title" : "Monoskop",
    "picture_url" : "netart.jpg",
    "short" : "explore an extensive collection of net art",
    "back_color" : "#D775D7",
    "link" : "https://monoskop.org/Net_art",
    "tag" : ["art", "interactive"]
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {
  /// Create whole content item div and set class
  let newContentElement = document.createElement("li");
    newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("a");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentHeading.style.color = incomingJSON['back_color'];
  if(typeof incomingJSON['link'] !== 'undefined'){
    newContentHeading.classList.add('activityLink');
    newContentHeading.setAttribute('href',incomingJSON['link']);}
  newContentElement.appendChild(newContentHeading);

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("jsonImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = incomingJSON['short'];
  newContentElement.appendChild(newContentSubhead);

  let newContentTagList = document.createElement("DIV");
  newContentTagList.classList.add('tagList');
  newContentElement.appendChild(newContentTagList);

  for (var i = 0; i < incomingJSON['tag'].length; i++) {
    var currentTagString = incomingJSON['tag'][i];
    newContentElement.classList.add('currentTagString');
    var newTagItem = document.createElement("p");
    newTagItem.innerText = currentTagString;
    newTagItem.classList.add('tags');
    newTagItem.style.backgroundColor = incomingJSON['back_color'];
    newContentTagList.appendChild(newTagItem);
  }
  contentGridElement.appendChild(newContentElement);
}

mixitup('#contentGrid', {
  load: {
    sort: 'order:asc' /* default:asc */
  },
  animation: {
    effects: 'fade rotateZ(-180deg)', /* fade scale */
    duration: 700 /* 600 */
  },
  classNames: {
    block: 'programs', /* mixitup */
    elementFilter: 'filter-btn', /* control */
    elementSort: 'sort-btn' /* control */
  },
  selectors: {
    target: '.contentItem' /* .mix */
  }
});
