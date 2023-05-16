(function(){
    const superhero="superman";
    console.log(superhero);
})();
(function(){
    const superhero="batman";
    console.log(superhero);
})();

//iife wrapping with parameter (parameter has to be message)
(function(message){
    const superhero="superman";
    console.log(message,superhero);
})("hello");
(function(message){
    const superhero="batman";
    console.log(message,superhero);
})("hey");