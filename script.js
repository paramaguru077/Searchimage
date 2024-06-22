const searchButton= document.getElementById("btn");// button
const searchBox= document.getElementById("search-box");// input
const searchResult = document.getElementById("search-result"); // downloading
const showmore = document.getElementById("show-more-btn"); // showmore

const accesskey="Z6fEyevTapK2l5sxiiFxm0Tks8gRSArWZtTLmBS_WhI"; // from unsplash website
let keyword =""; // keyword for api eg bird, animal
let page =1;  // page no


async function searchImage(){
    keyword= searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        const result = data.results;
       // console.log(data)
        if (page===1){
            searchResult.innerHTML="";
        }

        result.map((result)=>{
            const image = document.createElement("img");
            image.src= result.urls.small
            const imageLink = document.createElement("a");
            imageLink.href= result.links.html;
            imageLink.target="_blank";
            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);

        })

     


    }
    catch(err){
        console.error(err);
    }

    showmore.style.display="block";
       


  
}

searchButton.addEventListener("click",(e)=>{
     e.preventDefault()
    page=1;
    searchImage();

})

showmore.addEventListener("click", ()=>{
    page++;
    searchImage();
})
