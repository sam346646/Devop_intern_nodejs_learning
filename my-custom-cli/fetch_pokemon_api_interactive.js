#!/usr/bin/env node

//install inquirer@8.2.5 -->npm install inquirer@8.2.5
//To make a commandline such that it provides prompt as a option
const inquirer=require("inquirer");

const printFiveMoves=async (pokemonName)=>{
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const poke=await response.json();
    const moves=poke.moves.map(({ move })=>move.name);
    console.log(moves.slice(0,5));
};
const prompt=inquirer.createPromptModule();
prompt([{
    type:"input",
    name:"pokemon",
    message:"Enter a pokemon name to view its first 5 moves"
}]).then((answers)=>{
    const pokemon=answers.pokemon;
    printFiveMoves(pokemon.toString());
});


//fetch-pokemon-interactive-api 
//which prompts a prompt[message] above.
//harmander,mew,dragonite (Where we can enter these names to find their moves)

