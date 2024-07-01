
let num= [5,7,7,8,8,10,8];
let target = 8;

var searchRange = function(nums, target) {
    let start = -1;
    let end = -1;

    for(let i=0; i<nums.length;i++){
        if(target == nums[i]){
            start = i;
            break;
        }
    }
    if(start == -1){
        return [-1,-1]
    }

    for(let j=nums.length-1; j>=0;j--){
        if(target == nums[j]){
            end = j;
            break;
        }
    }

     return[start,end]
};

console.log(searchRange(num,target))