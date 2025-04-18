let user = document.getElementById("userid");

async function fetchUser(username){
    let resposne = await fetch(`https://api.github.com/users/${username}`);
    let result =  await resposne.json();         
    displayUser(result);
}

document.getElementById("btn").addEventListener('click',()=>{
let userid =user.value;
document.getElementById("userProile").innerHTML=`<span class="loader"></span>`;
fetchUser(userid);

})

function displayUser({
    name,
    bio,
    avatar_url,
    followers,
    following,
    public_repos,
    html_url}){
    //destucture

    if(!avatar_url){
        document.getElementById("userProile").innerHTML= `<h1> User Not Found </h1>` ;
        return;
    }
    if(!bio){
        bio=' ';
    }

    document.getElementById("userProile").innerHTML = 
    ` <div class="userInfo">
   <img src=${avatar_url} id="image" >
   <div class="userDetail">
       <p class="userName">${name}</p>
       <p class="userBio">${bio}</p>
   </div>
</div>
<div class="userFollow" >
   <div class="follower">
       <div >
           <p class="repo">Follower</p>
           <p>${followers}</p>
       </div>
       <div>
           <p class="repo">Following</p>
           <p>${following}</p>
       </div>
       <div>
           <p class="repo">Repo</p>
           <p>${public_repos}</p>
       </div>
       </div>
<a href=" ${html_url}" target='_blank' class="visitProfile">

   <div class="visitProfile">
   Visit Profile
   </div>
</a>
</div> ` 
}