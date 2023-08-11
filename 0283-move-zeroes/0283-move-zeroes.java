class Solution {
    public void moveZeroes(int[] nums) {
        
//         int size = nums.length;
        
//         if(size<=1){
//             return;
//         }
        
//         int nz = 0;
//         int z = 0;
        
//         while(nz<size){
//             if(nums[nz]!=0){
//                 int temp = nums[nz];
//                 nums[nz] = nums[z];
//                 nums[z] = temp;
//                 z++;
//                 nz++;
//             }else{
//                 nz++;
//             }
//         }
        
        int index = 0;
		for( int i = 0; i<nums.length; i++){
			if(nums[i] != 0){
				nums[index] = nums[i];
				index++;
			}
		}
		while(index<nums.length){
			nums[index] = 0;
			index++;
		}

		// return nums;
    }
}