var fs=require('fs');
var totalSum=0;
var highNum=0;
var lowNum;
var avgNum=0;
function findNumbers(callback){
  fs.readFile('numbers.txt', 'utf-8', function(err, fileContents){
    if(err){
      console.log(err);
    }
    var stuff=fileContents.split(', ');
    callback(stuff);
  })
}
function done(stuff){
  for(var i =0; i<stuff.length; i++){
    stuff[i]=parseInt(stuff[i]);
    totalSum+=stuff[i];
    if(stuff[i]>highNum){
      highNum=stuff[i];
    }
    if(lowNum==undefined || stuff[i]<lowNum){
      lowNum=stuff[i];
    }
  }
  avgNum=parseInt(totalSum/stuff.length);
  console.log('array length: ', stuff.length)
  console.log('high Number: ', highNum);
  console.log('low Number: ', lowNum);
  console.log('Toatl Sum: ',totalSum);
  console.log('Average: ', avgNum);
  console.log("done");
}
findNumbers(done);
