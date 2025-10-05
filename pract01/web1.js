function sumArray(nums) {
    if(!Array.isArray(nums)) {
      throw new Error('Входные данные должны быть массивом');
    }
    
    return nums.reduce((sum, cur) => sum + cur, 0);
}

sumArray([1, 2, 3]);