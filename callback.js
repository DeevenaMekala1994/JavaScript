//declaring the call back function//
function sample(x,y,z,callback){       //using call back statement//
    callback(x*y-z);
}
sample(8,5,9,function(result) {
    console.log(result);

    if (result===15){         //using if-else statement//
        console.log('true');
    }else{
        console.log('false');
    }
}
);


function sample(x,y,z,callback){
    callback(x*y-z);;
}
sample(8,5,9,function(result){
    console.log(result);
}
);




