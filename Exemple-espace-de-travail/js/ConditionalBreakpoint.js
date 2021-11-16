function breakDatas(){
group.forEach(group=>{
    console.log(`Group name : ${group.name}`);
});


}
const group = [
    {name:"Solocal",capital:"50 000 000"},
    {name:"Google",capital:"16 000 000 000"},
    {name:"Facebook",capital:"23 000 000 000"}
];

breakDatas(group);