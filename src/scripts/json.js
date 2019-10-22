"use strict";

var book = {
    title:'javascript',
    authors:["Nichoas C. Zakas"],
    edition:3,
    year:2011,
    master:undefined,
    LAST:function(){
        return "20110125";
    }

};


function print()
{

}

var jsonBook = JSON.stringify(book);

console.log(JSON.parse(jsonBook));
console.log(typeof(jsonBook) );

print();