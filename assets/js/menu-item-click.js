var menuItems = document.querySelectorAll(".menu-item");

var illustration = document.querySelector("#illustration-menu");

console.log(illustration);



menuItems.forEach(item => item.addEventListener("mouseover", event => {
    console.log((event.target).id);
    
    if((event.target.id) == 'services-menu') {
        console.log("yes");
        illustration.src = "ServicesMenu.svg";
    };
    
    if((event.target.id) == 'valeurs-menu') {
        console.log("yes");
        illustration.src = "ValuesMenu.svg";
    };
    
    if((event.target.id) == 'processus-menu') {
        console.log("yes");
        illustration.src = "ProcessMenu.svg";
    };
    
    if((event.target.id) == 'chat-menu') {
        console.log("yes");
        illustration.src = "ChatMenu.svg";
    };
}));

menuItems.forEach(item => item.addEventListener("mouseover", event => {
    console.log((event.target).id);
    illustration.src = "ServicesMenu.svg";
}));

