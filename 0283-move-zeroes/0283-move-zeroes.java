class Solution {
    public void moveZeroes(int[] nums) {
        
        int size = nums.length;
        
        if(size<=1){
            return;
        }
        
        int nz = 0;
        int z = 0;
        
        while(nz<size){
            if(nums[nz]!=0){
                int temp = nums[nz];
                nums[nz] = nums[z];
                nums[z] = temp;
                z++;
                nz++;
            }else{
                nz++;
            }
        }
        
        
        
    }
}