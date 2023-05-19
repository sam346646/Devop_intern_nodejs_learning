#!/usr/bin/env node

//install yargs -->npm install yargs
//To make a commandline such that it takes a argument and pass it to function refer fetch_pokemon_api.js 
const yargs=require("yargs");
const { argv }=yargs(process.argv);

const printFiveMoves=async (pokemonName)=>{
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon=await response.json();
    const moves=pokemon.moves.map(({ move })=>move.name);
    console.log(moves.slice(0,5));
};
printFiveMoves(argv.pokemon);

//fetch-pokemon-api --pokemon=charmander  (or mew)

