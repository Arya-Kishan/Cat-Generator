const image = document.getElementById("image");
const attack1 = document.getElementById("attack");
const speed1 = document.getElementById("speed");
const defense1 = document.getElementById("defense");
const type = document.getElementById("type");
const type2 = document.getElementById("type2");
const type1 = document.getElementById("type1");
const hp = document.getElementById("hp");
const name1 = document.getElementById("name");
const card = document.getElementById("card");
let btn = document.getElementById("btn");
let url = " https://pokeapi.co/api/v2/pokemon/";

let id = Math.floor(Math.random() * 150) + 1;
let finalurl = url + id;

async function show() {
    let response = await fetch(finalurl);
    let data = await response.json();
    console.log(data);


    let poke_img = data.sprites.other.dream_world.front_default;
    image.innerHTML = `<img src="${poke_img}"></img>`;

    let species_name = data.species.name;
    name1.innerHTML = `${species_name}`;

    let type01 = data.moves[0].move.name;
    let type02 = data.moves[1].move.name;
    type1.innerHTML = `${type01}`;
    type2.innerHTML = `${type02}`;

    let HP = data.stats[0].base_stat;
    hp.innerHTML = `HP  ${HP}`;

    let attack = data.stats[1].base_stat;
    attack1.lastElementChild.innerHTML = `${attack}`;

    let defense = data.stats[2].base_stat;
    defense1.lastElementChild.innerHTML = `${defense}`;
    let speed = data.stats[5].base_stat;
    speed1.lastElementChild.innerHTML = `${speed}`;

    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    card.style.background = `radial-gradient(circle at 50% 0%, #${randomColor} 36%, white 36%)`;
    type1.style.backgroundColor = `#${randomColor}`;
    type2.style.backgroundColor = `#${randomColor}`;

}
show();
btn.addEventListener("click",()=>{
    location.reload();
})



