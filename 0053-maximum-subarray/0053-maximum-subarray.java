class Solution {
    public int maxSubArray(int[] nums) {
        
        int currSum = 0;
        int maxiSum = Integer.MIN_VALUE;
        
        for ( int i = 0; i< nums.length; i++ ){
            
            currSum += nums[i];
            
            if(currSum > maxiSum){
                maxiSum = currSum;
            }
            
            if(currSum<0){
                currSum=0;
            }
        }
        return maxiSum;
        
    }
}