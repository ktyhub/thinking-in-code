 


# 34 在排序数组中查找元素的第一个和最后一个位置
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

 

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
         //排序好的数组来查询一般用二分查找的变形比较快一些
         //我们要查询的目标是第一个与target相等的和最后一个与target相等的元素然后返回两个元素的索引值

        int leftIndex = 0;
        int rightIndex = nums.length - 1;

        int resultLeftIndex = -1;
        //第一个循环找到最小的那个相等元素下标
        while(leftIndex <= rightIndex){
            int mid = leftIndex + (rightIndex - leftIndex) / 2;
            if(target == nums[mid]){
                //尝试向左边找一找
                resultLeftIndex = mid;
                rightIndex = mid - 1;
            }else if(nums[mid] < target){
                //当前元素太小了 那就尝试找更大的元素
                leftIndex = mid + 1;
            }else if(nums[mid] > target){
                //当前元素太大了尝试找更小的元素
                 rightIndex = mid - 1;
            }
        }


        leftIndex = 0;
        rightIndex = nums.length - 1;

        int resultRightIndex = -1;
        //第二个循环找到最大的那个相等元素下标
        while(leftIndex <= rightIndex){
            int mid = leftIndex + (rightIndex - leftIndex) / 2;
            if(target == nums[mid]){
                //尝试向右边找一找
                resultRightIndex = mid;
                leftIndex = mid + 1;
            }else if(nums[mid] < target){
                //当前元素太小了 那就尝试找更大的元素
                leftIndex = mid + 1;
            }else if(nums[mid] > target){
                //当前元素太大了尝试找更小的元素
                 rightIndex = mid - 1;
            }
        }
         return new int[]{resultLeftIndex, resultRightIndex};
    }
   
}
```  