function findMax(nums) {
   if(!Array.isArray(nums) || nums.length === 0) {
    throw new Error('Должен быть непустой массив');
   }
   
   return Math.max(...nums);
}

findMax([1, 2, 3, 4, 3, 7]);
