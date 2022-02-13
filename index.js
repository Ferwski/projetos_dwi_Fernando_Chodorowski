function buscar_poke() {
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/1", 
        success: function (result) {
            console.log(result)
        }
    });
}