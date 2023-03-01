// answer

let dictionary = ['PAINT','CRANE',"MOUSE",'DRIVE','BLAST',"TRAIN",'PLANT','MOOSE']
let answer = dictionary[Math.floor(Math.random()*dictionary.length)]
console.log(answer)

function isValid(key){
    if(dictionary.includes(key)){
        return true
    }
    else {
        return false
    }
}

function isLetter(key){
    return key.length===1 && key.match(/[a-z]/i)
}
function addLetter(key){
    if(state.level===6){
        return;
    }
    state.grid[state.level][state.column] = key.toUpperCase();
    console.log(state.column)
    state.column++;
}
function removeLetter(){
    // if(state.level===0){
    //     return;
    // }
    state.grid[state.level][state.column-1]=" ";
    state.column--;
}
function revealWord(word){
    for(let i = 0;i<5;i++){
        let box = document.getElementsByClassName('game')[0].children[state.level].children[i]
        const letter = box.textContent
        if(letter==answer[i]){
            box.classList.add("right")
        }
        else if(answer.includes(letter)){
            box.classList.add("wrong")
        }
        else{
            box.classList.add("empty")
        }
    }
    const isWinner = (answer === word);
    const isGameOver = (state.level === 5)
    if(isWinner){
        let message = document.getElementsByClassName("message")[0]
        message.classList.remove("hidden")
        message.innerHTML = "Congratulations"
        setTimeout(()=>{
            message.classList.add("hidden")
        },3000)
        state.level = 5;
    }
    else if(isGameOver){
        let message = document.getElementsByClassName("message")[0]
        message.classList.remove("hidden")
        message.innerHTML = "Game Over"
        setTimeout(()=>{
            message.innerHTML = answer
        },2000)
        setTimeout(()=>{
            message.classList.add("hidden")
            message.innerHTML=""
        },3000)
    }
    

}
let state = {
    grid: Array(6).fill().map(()=> Array(5).fill(" ")),
    level : 0,
    column: 0
};
function startup(){
    for (let i =0;i<6;i++){
        for(let j = 0; j<5;j++){
            
            let box = document.getElementsByClassName('game')[0].children[i].children[j]
            box.innerHTML = ""
            box.classList = "container"
        }
    }
    // state.grid = Array(6).fill().map(()=> Array(5).fill("A"))
    // update()
    keyEntered();
}
function update(){
    for (let i =0;i<6;i++){
        for(let j = 0; j<5;j++){
            
            let box = document.getElementsByClassName('game')[0].children[i].children[j]
            box.textContent = state.grid[i][j]
        }
    } 
}
function notAValidWord(){

    let message = document.getElementsByClassName("message")[0]
    message.classList.remove("hidden")
    message.innerHTML = "Not in word list"
    setTimeout(()=>{
        message.classList.add("hidden")
    },3000)
}
function keyEntered(){
    document.body.onkeydown = (e)=>{
        let key = e.key;
        
        if(key=="Enter"){
            if (state.column==5){
                console.log("Hero")
                const word = state.grid[state.level].join("")
                console.log(word)
                if(isValid(word)){
                    revealWord(word);
                    state.level++;
                    state.column=0
                }
                else{
                    notAValidWord();
                }
            }
        }
        else if(key=="Backspace"){
            removeLetter(key)
        }
        else if(isLetter(key)){
            addLetter(key )
        }
        
        update();
    }
}
startup()

