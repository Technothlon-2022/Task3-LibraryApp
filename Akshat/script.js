const bookUrl='https://www.googleapis.com/books/v1/volumes?q='
const def='https://www.googleapis.com/books/v1/volumes?q=design'
var getTodo= async ()=>{
    const response= await fetch(def);
    const data =await response.json();
    return data;
    };

function out(getTodo){
    getTodo().then(data=>{
        const container=document.getElementsByClassName("content")[0];
        container.innerHTML=`<template><div class="card">
                                    <div class="img"><img src="" alt="" id="img" data-img></div>
                                    <div class="text">
                                    <h1 id="h1"></h1>
                                    <p id="p"></p>
                                    <div class="tag-main">
                                        <div class="tags">Tags</div>
                                        <div class="creative" id="tag"></div>
                                        <div class="design" id="author"></div>
                                    </div>
                                    <a href="" id="learn"><h2>Learn More</h2></a>
                                    </div>
                                </div>
                            </template>`
        data.items.forEach(item => {
            const template=document.getElementsByTagName("template")[0];
            const card=template.content.cloneNode(true);
            const h1=card.getElementById("h1");
            const p=card.getElementById("p");
            const img=card.querySelector("[data-img]");
            const learn=card.getElementById("learn");
            const author=card.getElementById("author");
            const tag=card.getElementById("tag");
            const title=item.volumeInfo.title;
            const  img_link=item.volumeInfo.imageLinks.thumbnail;
            const desc=item.volumeInfo.description;
            const learn_more=item.volumeInfo.previewLink
            const author_info=item.volumeInfo.authors[0];
            const tag_info=item.volumeInfo.categories[0]
            author.innerText=author_info;
            tag.innerText=tag_info;
            img.src=img_link;
            h1.innerText=title;
            p.innerText=desc;
            learn.href=learn_more
            container.prepend(card);
        })
    }).catch(err=>{
        console.log('error')
    });
}
out(getTodo);

document.querySelectorAll('.searchbox').forEach(search=>search.addEventListener("keypress",e=>{
    if(e.key=== "Enter"){
        e.preventDefault();
        var value=search.value;
        if(value==null || value==""){
            alert("Please Enter A value")
        }else{
        const searchUrl=bookUrl+value;
        var getTodo= async ()=>{
        const response= await fetch(searchUrl);
        const data =await response.json();
        return data;
        };
        out(getTodo)
        }}}))
        
        




    
    
   



