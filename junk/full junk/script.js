
alert("hola");
// const dark = document.querySelector("body");

function darkMode(){
    document.querySelector("body").classList.toggle("dark");
}    

function makejump(){
    document.querySelector(".img").classList.toggle("jump");
    // const x = document.querySelector(".img");
    // setTimeout(2000){
    //     document.querySelector(".img").classList.toggle("jump");
    // }
}

for (var i = 0 ; i < 5; i++) {
    document.querySelector(".img").classList.add("jump");
    setTimeout(function(){
        document.querySelector(".img").classList.remove("jump");
    },1000);
}



// while (true) {
//     document.querySelector(".img").classList.toggle("jump");
//     setTimeout(function(){
//         document.querySelector(".img").classList.toggle("jump");
//     },1000);
// }

