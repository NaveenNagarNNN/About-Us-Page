'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();


function main() {
    const x = readline();
    var line2 = readline().split(" ").map(x => parseInt(x)); 
    
    // foo(x);
    foo(line2);
}
function foo(A) {
    // process.stdout.write("hello: ");   // without auto '\n' (newline)
    let N=A.length;
    let ans=0;
    for(let i= 0;i<N;i++){
        ans+=A[i]
    }
    ans=Math.floor(ans/N)+1;
    console.log(ans);  // with auto '\n' (newline)
}