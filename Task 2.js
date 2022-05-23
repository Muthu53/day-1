1)For the given JSON iterate over all for loops (for, for in, for of, forEach).

a)FOR->

var obj = [ { person: "sai", age: "2", city: "HYD" }, { fname: "sarya", age: "5", city: "Goa" }, { fname: "raj kiran", age: "87", city: "lucknow" }, ]; 
for(i=0;i<obj.length;i++){
    console.log(obj[i].fname)
    console.log(obj[i].age)
    console.log(obj[i].city)
}

B)for in->
for(i=0;i<obj.length;i++){
for(var param in obj[i]){
     console.log(`${param}: ${obj[i][param]}`);
}
}

C)for of->
for(var elements of obj){
  console.log(elements.fname)
    console.log(elements.age)
    console.log(elements.city)  
}

D)for each->
obj.forEach(function(objects){
   console.log(objects.fname)
    console.log(objects.age)
    console.log(objects.city)
})
