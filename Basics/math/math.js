
function sum(n){
    let s = 0;
    for(let i=1;i<=n;i++){
    s = s+i;
    }
    return `\n\t sum of ${n} Natural Numbers = ${s} \n  ` 
}
// console.log(sum(5));

module.exports = sum;