// assign the red color to every second <span> element
  var spanEvery = $('span');
  spanEvery.each(function(index, element){
    if (index%2 != 0) {
      $(element).css('color', 'red');
    };
});
// assign the blue color to every first <span> element.
$('span:even').css('color', 'blue');


// Add a button to each of the paragraphs
var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
});

// Each of the buttons after pressing should display an alert containing its value
$('button').click(function(){
  alert($(this).attr('data-tmp'));
});
