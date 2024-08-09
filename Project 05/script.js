let istatus = document.querySelector("h1");

let addFriend = document.querySelector("#friend");

let check=0;

addFriend.addEventListener("click", function () {
    if(check==0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        addFriend.innerHTML="Remove Friend"
         check=1
    }else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        addFriend.innerHTML="Add Friend"
        check=0
    }
});

