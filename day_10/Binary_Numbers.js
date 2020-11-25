function main() {
  var n = parseInt(readLine());
  var binary = [];

  while (n > 0) {
    binary.push(n % 2)
    n = Math.floor(n / 2)
  }

  binary = binary.reverse()

  var ones = 0;;
  var max = 0;

  for (i = 0; i < binary.length; i++) {
    if (binary[i] === 1) {
      ones += 1;
    } else if (binary[i] === 0) {
      if (ones > max) max = ones;
      ones = 0;
    }
  }

  if (ones > max) max = ones
  console.log(max)
}

// var n = parseInt(readLine());
// const countArray=[];
// let count=0;
// let inputBinary = n.toString(2).split('');
// inputBinary.forEach((digit, index)=>{
//   if(digit==='1'){
//     count++;
//     if(index===inputBinary.length-1){
//       countArray.push(count);
//     }
//   }else{
//     countArray.push(count);
//     count=0;
//   }
// });
// console.log(countArray.sort((a,b)=>b-a)[0]);