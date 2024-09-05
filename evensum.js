var nums=[3,6,9,12,15,18]
var sum=0
var i=0;
do{
    if((nums[i])%2==0){
    sum =sum + nums[i]
    } 
    i++; 
}
while(i<nums.length)
    console.log(sum)
