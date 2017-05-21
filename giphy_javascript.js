var pokemonArray = ["bulbasaur", "charmander", "squirtle", "pikachu", "horsea", "magikarp"];
// console.log(pokemonArray);

function pokemonAlert() {
	var pokemonName = $(this).attr("data-name");
	alert(pokemonName);
}

//display pokemonArray objects in buttons
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

//allows new pokemon buttons to be created and added
$("#add_pokemon").on("click", function(event){
	event.preventDefault();
	var newPokemon = $("#pokemon").val().trim();
	pokemonArray.push(newPokemon);
	renderButtons();
})

$(document).on("click", ".pokemon", pokemonAlert)

renderButtons();