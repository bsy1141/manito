function draw(i,nums){
    let answer=0;
    while(true){
        let drawing=Math.floor(Math.random()*6);
        if(drawing!==i&&!nums.includes(drawing)){
            answer=drawing;
            break;
        }
    }
    return answer;
}
function sol(arr){
    let answer={};
    let nums=[];
    for(let i=0;i<arr.length;i++){
        const drawing=draw(i,nums);
        answer[arr[i]]=arr[drawing];
        nums.push(drawing);
    }

    return answer;
}

const result=sol(['윤지','서영','소정','정윤','정빈','주영']);

function whoIsManito(){
    let name=document.getElementById('name').value;
    document.getElementById('manito').innerHTML=result[name];
}

