//task 1 
let colors = ["red","blue","green","yellow","pink","purple","black"]
//task 2
let ul = document.createElement("ul");
for (let i = 0; i < colors.length; i++) {
   let li = document.createElement("li");
   li.append(colors[i]);
   li.style.color = colors[i]
   ul.appendChild(li);
}


document.body.appendChild(ul);






    
