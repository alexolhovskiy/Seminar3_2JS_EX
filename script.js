console.log("Hello");

//1

const musicCollection=[];

musicCollection[Symbol.iterator]=function(){
    return {
        current:0,
        end:this.length,
        next(){
            return this.current < this.end ? {
                done:false,
                value:`Name ${musicCollection[this.current].title}, Artist ${musicCollection[this.current].artist}, Year ${musicCollection[this.current++].year}`
            } : {done:true}; 
        }
    }
}


musicCollection.push({title: "A",artist: "Misha",year: "1980"});
musicCollection.push({title: "B",artist: "Pasha",year: "1990"});
musicCollection.push({title: "C",artist: "Grisha",year: "1982"});
musicCollection.push({title: "D",artist: "Masha",year: "1989"});
musicCollection.push({title: "E",artist: "Makar",year: "1956"});


for(var album of musicCollection){
    console.log(album);
}


//2


const cookers=new Map();
cookers.set("Пицца 'Маргарита'","Виктор");
cookers.set("Пицца 'Пепперони'","Виктор");
cookers.set("Суши 'Филадельфия'","Ольга");
cookers.set("Суши 'Калифорния'","Ольга");
cookers.set("Тирамису","Дмитрий");
cookers.set("Чизкейк","Дмитрий");

const clients=new Map();
clients.set("Алексей",["Пицца 'Пепперони'","Тирамису"]);
clients.set("Мария",["Суши 'Калифорния'","Пицца 'Маргарита'"]);
clients.set("Ирина",["Чизкейк"]);

clients.entries().forEach((item)=>{
    console.log(`Над заказом клиента ${item[0]} работают повора:`);
    item[1].forEach((i)=>{
        console.log(`Над ${i} - повор ${cookers.get(i)}`);
    });
});









































