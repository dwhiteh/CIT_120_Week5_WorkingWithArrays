let warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]

let list = '';
warriors.forEach(ok);
document.getElementById('object-list').innerHTML = list;
function ok(item){
    if (item['health'] >= 10 && item['damage'] >=2 && item['warrior'] == true){
        if(item['name'].includes('A') || item['name'].includes('a')){
            list += '<div style="color: red;">';
        }
        else {
            list += '<div>';
        }
        list += '<h1>Name: '+item['name']+'</h1>'+'<h3>Damage: '+item['damage']+'</h3>'+'<h3>Health: '+item['health']+'</h3>'+'</div>';
    }
}