var Status = document.querySelector("h5")

var btn = document.querySelector("#add")
var explore=document.querySelector("#Explore")

var check=0

btn.addEventListener("click",function(){
    if(check==0){
    Status.innerHTML="You're now Friends"
    Status.style.color="red"
    btn.innerHTML="UnFriend"
    check=1   
    } else{
         Status.innerHTML="Alpine_Aura"
    Status.style.color="Red"
    btn.innerHTML="Add Friend"
    check=0

    }
    
})

explore.addEventListener("click",function(){
        alert("Unlock the full experience! Upgrade to Pro to explore unlimited profiles.");
})