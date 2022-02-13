function buscar_pokemon() {

    const id_pokemon = document.getElementById("nome_pokemon").value

    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/" + id_pokemon,
        success: function (result) {
            const divResultado = document.getElementById("resultado_api");

            document.getElementById("img_pokemon").src = result.sprites.front_default
            document.getElementById("nome").innerHTML = result.name.replace(/\b\w/g, (c) => c.toUpperCase())
            type = []
            for (var i = 0; i < result.types.length; i++) {
                type[i] = result.types[i].type.name.replace(/\b\w/g, (c) => c.toUpperCase())
            }
            document.getElementById("tipo").innerHTML = type.join(', ');
            skills = []
            for (var i = 0; i < result.moves.length; i++) {
                skills[i] = result.moves[i].move.name.replace(/\b\w/g, (c) => c.toUpperCase())
            }
            document.getElementById("skill").innerHTML = skills.join("<br>");
            console.log(skills)
            console.log(result)
        }
    });
}