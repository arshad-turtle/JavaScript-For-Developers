const arr  = [
    {
        "name" : "Arshad",
        "role" : "Intern"
    }, {
        "name":"123"
    }
]

const ans = arr.map(function(res){
    return res
})

console.log(ans);

const employees = [
    { name: "David Carlson", age: 30 },
    { name: "John Cena", age: 34 },
    { name: "Mike Sheridan", age: 25 },
    { name: "John Carte", age: 50 }
   ];

   const idx = employees.find(function(employees) {
    return employees.name.indexOf('John') > -1
   })

console.log(idx);