var weight=[35,38,40,45]
console.log(weight[2])
function setup() 
{
  createCanvas(400,400);
  var sum=weight[0]+weight[1]+weight[2]+weight[3]
  console.log(sum)
  var av=sum/weight.length
  console.log(av)
}

function draw() 
{
background(51);

}

