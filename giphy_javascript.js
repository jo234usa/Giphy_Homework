//step 1: create an array
var pokemonArray = ["bulbasaur", "charmander", "squirtle", "pikachu", "horsea", "magikarp"];
// console.log(pokemonArray);

// pseudo step 3: just testing to make sure the buttons work
// function pokemonAlert() {
// 	var pokemonName = $(this).attr("data-name");
// 	alert(pokemonName);
// }

//step 2a: display pokemonArray objects in buttons
function renderButtons() {
	$("#pokemonBtn").empty();
	for(var i=0;i<pokemonArray.length; i++){
		var button = $("<button>");
		button.addClass("pokemon");
		button.attr("data-name", pokemonArray[i]);
		button.text(pokemonArray[i]);
		$("#pokemonBtn").append(button);
	}
}

//step ??:allows new pokemon buttons to be created and added
$("#add_pokemon").on("click", function(event){
	event.preventDefault();
	var newPokemon = $("#pokemon").val().trim();
	pokemonArray.push(newPokemon);
	renderButtons();
})

// click function for pseudo step 3
// $(document).on("click", ".pokemon", pokemonAlert)

//step 3a: getting button to grab images 
$(document).on("click", ".pokemon", function(){
	var pokemonName = $(this).attr("data-name");
	var queryURl= "http://api.giphy.com/v1/gifs/search?q="+pokemonName+"&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURl,
		method: "GET"
	}).done(function(response){
		console.log(queryURl);
		console.log(response);

//step 3b: displaying grabbed gifs & ratings
		var results = response.data;
		for (var a=0; a < results.length; a++){
			var pokemonDiv = $("<div>");
			var p = $("<p>").text("Rating: " + results[a].rating);
			var pokemonImage = $("<img>");
			pokemonImage.attr("src", results[a].images.fixed_height.url);
			pokemonDiv.append(p);
			pokemonDiv.append(pokemonImage);
			$("#gifs-appear-here").prepend(pokemonDiv);
		}
	});
})
renderButtons();