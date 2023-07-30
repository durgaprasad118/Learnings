// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let string ='Love is the best thing in this world. Some found their love and some are still looking for their love.';

let answer = string.toLowerCase().split(" ");
console.log(answer);

let count=0;
for(let i=0;i<answer.length;i++){
    if(answer[i]=="love"){
        count++;
        console.log(i)
    }
}
console.log(count)


