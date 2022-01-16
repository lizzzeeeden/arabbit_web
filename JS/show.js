window.onload = function () {
    graveyard = document.getElementById("graveyard")
    ReadData()
}
setInterval(ReadData(),1000)
function ReadData() {
    //墓碑
    $.getJSON("Data/graveyard.json", function (json) {
        dic = json.graveyard;
        for (var key in dic) {
            let gravestone = document.createElement("div");
            gravestone.className = "gravestone";

            let name = document.createElement("p");
            name.className = "owlname";
            name.innerText = key.split('-')[0];
            gravestone.appendChild(name);


            let body = document.createElement("div");
            body.className = "stonebody";
            //species
            let species = document.createElement("p");
            species.innerHTML ="品&ensp;&ensp;种：" + dic[key].species;
            body.appendChild(species);
             //owner
             let owner = document.createElement("p");
             owner.innerHTML ="饲养员：尾号" + key.split('-')[1] + "\n\n";
             body.appendChild(owner);
            //born
            let born = document.createElement("p");
            born.innerText = "诞生于：" + dic[key].bornDate;
            //die
            let die = document.createElement("p");
            die.innerText = "逝世于：" + dic[key].deadDate;
            //age
            let age = document.createElement("p");
            age.innerHTML = "享&ensp;&ensp;年：" + dic[key].age;
            body.appendChild(born);
            body.appendChild(die);
            body.appendChild(age);
            gravestone.appendChild(body);

            let epitaph = document.createElement("div");
            epitaph.className = "epitaph";
            epitaph.innerHTML = dic[key].epitaph;
            gravestone.appendChild(epitaph);

            graveyard.appendChild(gravestone);
        }
    })
}