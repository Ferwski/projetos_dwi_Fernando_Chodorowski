function buscar_poke() {

    const id_pokemon = document.getElementById("id_pokemon").value

    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/1", 
        success: function (result) {
            console.log(result)
        }
    });
}