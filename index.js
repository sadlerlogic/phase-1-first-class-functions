function receivesAFunction(spy){
console.log (spy());
}

function returnsANamedFunction(fn){
     return function whatfunction(fn){
         console.log ("hello");
     }
    }

    function returnsAnAnonymousFunction(){
        return function(){};
    }