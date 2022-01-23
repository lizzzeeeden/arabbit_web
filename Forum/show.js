window.onload = function () {
    forum = document.getElementById("forum")
    ReadData()
}
function ReadData() {
    //墓碑
    $.getJSON("forum.json", function (json) {
        list = json.forum;
        for (var i = list.length - 1; i >= 0; i--) {
            tip = list[i]
            let block = document.createElement("div");
            block.className = "block";

            let content = document.createElement("div");
            content.className = "content";
            content.innerText =tip["content"];
            block.appendChild(content);


            let name = document.createElement("p");
            name.className = "name";
            name.innerHTML =  "#" + (i + 1).toString()  + "&nbsp尾号" +  tip["id"] +"&nbsp" + tip["time"];
            block.appendChild(name);

            forum.appendChild(block);
        }
    })
}