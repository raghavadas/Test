var e1={id:1100,ename:"kiran",job:"Architect",salary:12500};
var e2={pid:1001,pname:"kindle",description:"kindle rocks",price:5500};
//console.log(e2.pid+" "+e2.pname+" "+e2.description+" "+e2.price);
var employees=[
    {id:1100,ename:"kiran",job:"Architect",salary:12500},
    {id:1200,ename:"raghav",job:"developer",salary:12500},
    {id:1300,ename:"rao",job:"tranier",salary:12500},
    {id:1400,ename:"netaji",job:"teseter",salary:12500}];
    for(var i=0;i<employees.length;i++){
        var e1=employees[i]; 
        console.log(e1.id+" "+e1.ename+" "+e1.job+" "+e1.salary);
    }
    items=[10,20,30,40,50];
    items.forEach(function(element) {
        console.log(element);
    });
console.log(e1);
