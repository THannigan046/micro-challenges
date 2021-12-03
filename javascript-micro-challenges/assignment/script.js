console.log('hello world!');

function addNumbers(num1, num2){
  let result = num1 + num2;
  return result;
}

console.log('testing addNumbers with 400 + 20, should print 420', addNumbers(400, 20));

function ifAdd(num1, num2){
  if(num1 > num2) {
    return 'The first number was bigger!';
  }
  else if (num2 > num1) {
    return 'The second Number was bigger!';
  }
  else if (num1 === num2){
    return 'The numbers are the same!';
  }
};

console.log('testing ifAdd with 5 and 3, ', ifAdd(5, 3));

console.log('testing ifAdd with 3 and 5, ', ifAdd(3, 5));

console.log('testing ifAdd with 3 and 3, ', ifAdd(3, 3));


let zorp = [1, 2, 3, 4, 5, 420]
let zeep = [12, 11, 10]
function arraySmash(array){
  let result = array[0] + array[array.length - 1];
  return result;
};

console.log('testing arraySmash, should print 421', arraySmash(zorp));

console.log('testing arraySmash, should print 22', arraySmash(zeep));

let tragedy = ['I ', 'Am ', 'heart ', 'is ', 'a', 'fish ']

function stringSmash(array, index){
  for (let i = index; i < array.length; i++){
    let sentence = String(array[i]);
    console.log(sentence);
  }
};
//got too lazy, kinda works

console.log('testing stringSmash, should print Heart is a fish');
stringSmash(tragedy, 2)
