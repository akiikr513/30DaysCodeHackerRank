'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);
    const countArray=[];
    let count=0;
    let inputBinary = n.toString(2).split('');
    inputBinary.forEach((digit, index)=>{
        if(digit==='1'){
            count++;
        if(index===inputBinary.length-1){
            countArray.push(count);
        }
        }else{
            countArray.push(count);
            count=0;
        }
    });
    console.log(countArray.sort((a,b)=>b-a)[0]);
}
