var planets = [
  ['Sun', 27.9, 'sun.jpg'],
  ['Mercury', 1.19, 'mercury.jpg'],
  ['Venus', 1.19, 'venus.jpg'],
  ['Earth', 1, 'earth.jpg'],
  ['Moon', 0.1655, 'moon.jpg'],
  ['Mars', 0.3895, 'mars.jpg'],
  ['Jupiter', 2.640, 'jupiter.jpg'],
  ['Saturn', 1.139, 'saturn.jpg'],
  ['Uranus', 0.917, 'uranus.jpg'],
  ['Neptune', 1.148, 'neptune.jpg'],
  ['Pluto', 0.06, 'pluto.jpg']
];

//add items to dropdown
var option = '';
for (var i=0;i<planets.length;i++){
  option += '<option value="'+ planets[i][1] + '">' + planets[i][0] + '</option>';
}
$('#selectAPlanet').append(option);

//calculate
$("button").click(function() {
  var weight = $('#EnterYourWeight').val();
  var planet = $('#selectAPlanet').val();
  var total = weight * planet;
  var planetName = $("#selectAPlanet option:selected").text();
  $('#message').text("Your weight equals " + total + " on " + planetName);
 
  for(var i = 0; i < planets.length; i++) {
    
    if(planets[i][0] === planetName) {
      //variable declaring image source
      var imageSource = '<img src="C://src/02-AstroWeightCalculator/images/';
      //Get image name 
      var imageName = planets[i][2];
      //Write image to page
      var finalImage = imageSource + imageName + '">';
      $('#picture').html(finalImage);
    }
    
  }  
});
