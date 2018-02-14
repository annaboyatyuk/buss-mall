'use strict';

Pictures.allpictures = [];
var recentlyViewed = [];
var totalClicks = 0;


function Pictures(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.voteCount = 0;
  this.viewCount = 0;
  Pictures.allpictures.push(this);
}

new Pictures('Bag', 'img/bag.jpg');
new Pictures('Banana Slicer', 'img/banana.jpg');
new Pictures('Bathroom', 'img/bathroom.jpg');
new Pictures('Boots', 'img/boots.jpg');
new Pictures('Breakfast', 'img/breakfast.jpg');
new Pictures('Meatball Gum', 'img/bubblegum.jpg');
new Pictures('Chair', 'img/chair.jpg');
new Pictures('Cthulhu', 'img/cthulhu.jpg');
new Pictures('Dog-Duck', 'img/dog-duck.jpg');
new Pictures('Dragon Meat', 'img/dragon.jpg');
new Pictures('Pen', 'img/pen.jpg');
new Pictures('Pet Sweeper', 'img/pet-sweep.jpg');
new Pictures('Tauntaun', 'img/tauntaun.jpg');
new Pictures('Unicorn Meat', 'img/unicorn.jpg');
new Pictures('Usb', 'img/usb.gif');
new Pictures('Water Can', 'img/water-can.jpg');
new Pictures('Wine Glass', 'img/wine-glass.jpg');



function threeRandom(input) {
  if (input === recentlyViewed[0] || input === recentlyViewed[1] || input === recentlyViewed[2]) {
    return true;
  }
}


function displayImg() {
  do {
    var randomIndexOne = Math.floor(Math.random() * Pictures.allpictures.length);
  } while (threeRandom(randomIndexOne));

  do {
    var randomIndexTwo = Math.floor(Math.random() * Pictures.allpictures.length);
  } while (randomIndexOne === randomIndexTwo || threeRandom(randomIndexTwo));

  do {
    var randomIndexThree = Math.floor(Math.random() * Pictures.allpictures.length);
  } while (randomIndexOne === randomIndexThree || randomIndexTwo === randomIndexThree || threeRandom(randomIndexThree));

  firstImg.src = Pictures.allpictures[randomIndexOne].filepath;
  secondImg.src = Pictures.allpictures[randomIndexTwo].filepath;
  thirdImg.src = Pictures.allpictures[randomIndexThree].filepath;
  firstImg.alt = Pictures.allpictures[randomIndexOne].name;
  secondImg.alt = Pictures.allpictures[randomIndexTwo].name;
  thirdImg.alt = Pictures.allpictures[randomIndexThree].name;

  Pictures.allpictures[randomIndexOne].viewCount++;
  Pictures.allpictures[randomIndexTwo].viewCount++;
  Pictures.allpictures[randomIndexThree].viewCount++;

  // console.log(randomIndexOne);
  // console.log(randomIndexTwo);
  // console.log(randomIndexThree);


  recentlyViewed.push(randomIndexOne, randomIndexTwo, randomIndexThree);
  if (recentlyViewed.length > 3) {
    recentlyViewed = recentlyViewed.slice(3);
  }
}


var firstImg = document.getElementById('firstimg');
var secondImg = document.getElementById('secondimg');
var thirdImg = document.getElementById('thirdimg');
var resultsSection = document.getElementById('results');
// console.log(firstImg);
// console.log(secondImg);
// console.log(thirdImg);


function onClick(event) {
  for (var i = 0; i < Pictures.allpictures.length; i++) {
    console.log(Pictures.allpictures[i].voteCount+'bla');
    // if (event.target.id === Pictures.allpictures[i].name) {
    //   Pictures.allpictures[i].voteCount += 1;
    // }
    event.target.id === Pictures.allpictures[i].name;
    Pictures.allpictures[i].voteCount += 1;
  }
  if (totalClicks < 25) {
    totalClicks++;
  }else {
    displayResults();
    firstImg.removeEventListener('click', onClick);
    secondImg.removeEventListener('click', onClick);
    thirdImg.removeEventListener('click', onClick);
  }
  displayImg();
}


firstImg.addEventListener('click', onClick);
secondImg.addEventListener('click', onClick);
thirdImg.addEventListener('click', onClick);


function displayResults() {
  var h3El = document.createElement('h3');
  h3El.textContent = 'Results: ';
  resultsSection.appendChild(h3El);
  var pEl;
  for (var i = 0; i < Pictures.allpictures.length; i++) {
    pEl = document.createElement('p');
    pEl.textContent = 'The ' + Pictures.allpictures[i].name + ' image was selected a total of ' + Pictures.allpictures[i].voteCount + ' out of ' + Pictures.allpictures[i].viewCount + ': '; resultsSection.appendChild(pEl);
  }
}

displayImg();






// function randomPic() {
//   var randomIndexOne = Math.floor(Math.random() * Pictures.allpictures.length);
//   firstImg.src = Pictures.allpictures[randomIndexOne].filepath;
//   firstImg.addEventListener('click', randomPic);
//   console.log(randomIndexOne);

//   var randomIndexTwo = Math.floor(Math.random() * Pictures.allpictures.length);
//   secondImg.src = Pictures.allpictures[randomIndexTwo].filepath;
//   secondImg.addEventListener('click', randomPic);
//   console.log(randomIndexTwo);

//   var randomIndexThree = Math.floor(Math.random() * Pictures.allpictures.length);
//   thirdImg.src = Pictures.allpictures[randomIndexThree].filepath;
//   if (randomIndexOne === randomIndexTwo || randomIndexOne === randomIndexThree || randomIndexTwo === randomIndexThree) {
//     randomIndexThree = randomPic();
//   }
//   thirdImg.addEventListener('click', randomPic);
//   console.log(randomIndexThree);
// }
// randomPic();
// console.log(Pictures.allpictures.name);






