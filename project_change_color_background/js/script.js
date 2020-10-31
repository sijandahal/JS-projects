
var colors = ['red', 'green', 'yellow', 'purple', 'black', 'deeppink']
var button = document.querySelector('.btn');


button.addEventListener('click', function() {
    var colorIndex = Math.floor(Math.random()*colors.length);
    console.log(colorIndex);
    document.body.style.backgroundColor = colors[colorIndex];
  });