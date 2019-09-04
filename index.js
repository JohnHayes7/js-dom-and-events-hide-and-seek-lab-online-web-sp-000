function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
   let x = document.getElementById('nested');
   return x.querySelector('.target');
}

function deepestChild(){
    let parent = document.getElementById('grand-node');
    let c = parent.querySelectorAll('div');
    return c[c.length - 1]
    
}

function increaseRankBy(n){
    let classList = document.getElementsByClassName('ranked-list');
    
    for (let i = 0; i < classList.length; i++){
       let liList = classList[i].children
    
        for (let k = 0; k < liList.length; k++){
           liList[k].innerHTML =  parseInt(liList[k].innerHTML) + n
        }
    }
}