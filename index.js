const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



const next = document.getElementById("next")
const postDescription = document.getElementById("post-description")
const containerPost = document.getElementById("container-post")
const comments = document.getElementById("comments")
const heartIcon = document.getElementById("heart")
const count = document.getElementById("count")
const totalPosts = posts.length;
let postPosition = 0
let likesCount = 0





slide = `
<img class="avatar-artist height-logos" src="${posts[postPosition].avatar}">
<div class="text">
    <p class="name">${posts[postPosition].name}</p>
    <p class="birth-place">${posts[postPosition].location}</p>
</div>
        `

photo = `
<img class="container-photo" src="${posts[postPosition].post}">
`

comment = `
<p class="section-comment"><span>${posts[postPosition].username}</span> ${posts[postPosition].comment}<p>
`
comments.innerHTML = comment
postDescription.innerHTML = slide
containerPost.innerHTML = photo  

// Rendering posts from the array - next post
next.addEventListener("click", nextPost)
function nextPost() {
    likesCount = 0
    count.textContent = ""
    if(postPosition === totalPosts - 1) {
        postPosition = 0
       
    } else {
        postPosition++  
        heartIcon.src=("images/icon-heart.png")
    }
    
    slide = `
    <img class="avatar-artist height-logos" src="${posts[postPosition].avatar}">
    <div class="text">
        <p class="name">${posts[postPosition].name}</p>
        <p class="birth-place">${posts[postPosition].location}</p>
    </div>
            `
            
    photo = `
    <img class="container-photo" src="${posts[postPosition].post}">
            `

  likes = `
  <p class="likes"> ${posts[postPosition].likes}likes: <span id="count"></span></p>
  `       
    comment = `
    <p class="section-comment"><span>${posts[postPosition].username}</span> ${posts[postPosition].comment}<p>
    `
    comments.innerHTML = comment
    postDescription.innerHTML = slide
    containerPost.innerHTML = photo 
}


previous.addEventListener("click", previousPost)
function previousPost() {
    likesCount = 0
    count.textContent = ""
    if(postPosition === 0) {
        postPosition = totalPosts - 1
    } else {
        postPosition--  
        heartIcon.src=("images/icon-heart.png")
    }
    
    slide = `
    <img class="avatar-artist height-logos" src="${posts[postPosition].avatar}">
    <div class="text">
        <p class="name">${posts[postPosition].name}</p>
        <p class="birth-place">${posts[postPosition].location}</p>
    </div>
            `
            
    photo = `
    <img class="container-photo" src="${posts[postPosition].post}">
            `
    comment = `
    <p class="section-comment"><span>${posts[postPosition].username}</span> ${posts[postPosition].comment}<p>
    `
    
    comments.innerHTML = comment
    postDescription.innerHTML = slide
    containerPost.innerHTML = photo 
}



containerPost.addEventListener("dblclick", likesCounter)
heartIcon.addEventListener("click", likesCounter)

heartIcon.addEventListener("click",function(){
    if ( heart.src.match("images/icon-heart.png")) {
        heart.src="images/icon-heart-red.png"
        posts[j].likes+=1
        likesEl[j].textContent =`${ posts[j].likes} likes `
      }
    else{
        heart.src="images/icon-heart.png"
        posts[j].likes-=1
        likesEl[j].textContent =`${ posts[j].likes} likes `
    }
   
    })



function likesCounter() {
    likesCount += 1
    count.textContent = likesCount
    }

