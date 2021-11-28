import { projectObj } from './dataInObj'

//The DOMContentLoaded event fires when the initial 
//HTML document has been completely loaded and parsed, 
//without waiting for stylesheets, images, and subframes
// to finish loading.
window.addEventListener('DOMContentLoaded', () => {
    addItemsToMasonryGrid("#masonry2") 
    addItemsToMasonryGridImg("#masonry3") 
});

window.onload = function () {
    document.querySelector("#container").style["display"] = "block";
    document.querySelector("#loader-box").style["display"] = "none";
}


function addItemsToMasonryGridImg(parent) {
    let parentEle = document.querySelector(parent)
    let masonryChild;
    let ele;
    let howManyImg = 20

    for (let i = 0; i < howManyImg+1; i++) {
        masonryChild = createMasonryChild(parentEle, i)
        
        ele = document.createElement('img')
        ele.src = "assets/img/"+i+".jpg";
        ele.setAttribute("width", "100%");
        ele.setAttribute("height", "auto");
        ele.style["display"] = "block";

        masonryChild.appendChild(ele)
        parentEle.appendChild(masonryChild)
    }

}

function createMasonryChild(parentEle,i) {
    let masonryChild = document.createElement('div');
    masonryChild.id = parentEle.id + "-child-" + i;
    //masonryChild.setAttribute("data-aos", "zoom-in-up");
    return masonryChild
}

function addItemsToMasonryGrid(parent) {
    let parentEle = document.querySelector(parent)
    let masonryChild;
    let ele;

    for(let i=0; i<projectObj.length; i++) {
        masonryChild = createMasonryChild(parentEle, i)
        
        ele = document.createElement('h2')
        ele.innerHTML = projectObj[i].title;
        masonryChild.appendChild(ele)

        ele = document.createElement('p')
        ele.innerHTML = "<i>" + projectObj[i].lan + "</i>";
        masonryChild.appendChild(ele)

        ele = document.createElement('p')
        ele.innerHTML = projectObj[i].desc;
        masonryChild.appendChild(ele)

        ele = document.createElement('a')
        ele.className = "orange"
        ele.href = projectObj[i].link
        ele.rel = "noreferrer"
        ele.target = "blank"
        ele.innerHTML = "<br>Check it out!";
        masonryChild.appendChild(ele)

        parentEle.appendChild(masonryChild)

    }
}


