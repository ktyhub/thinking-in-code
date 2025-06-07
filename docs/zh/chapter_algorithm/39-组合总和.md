 

# 39. 组合总和
给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 target 的不同组合数少于 150 个。

 

示例 1：

输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。
 
```java
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        //先排序，后回溯
        //排序的原因是保证数字是有序处理的可以保证不会计算到一一样的结果
         List<List<Integer>> result = new ArrayList();
        if(candidates == null || candidates.length == 0){
            return result;
        } 
        Arrays.sort(candidates);
       
        for(int i = 0; i < candidates.length; i++){
            //每个元素都是起始位置
            List<Integer> currentNums = new ArrayList();
            currentNums.add(candidates[i]);
            back(i, candidates[i], currentNums, candidates, result,target);
        }
        return result;
    }
    public void back(int index, int sum,List<Integer> currentNums, int[] candidates,List<List<Integer>> result, int target){
        //回溯的时候首先要检查终止条件
        if(target == sum){
            result.add(new ArrayList(currentNums));
            return;
        }
        if(target < sum){
            //超过了目标值则直接结束
            return;
        }
        //当前数组遍历完成了则结束
        if(index >= candidates.length){
            return;
        }
       
        //开始当前或者后面的某个元素组合回溯
        //清理当前元素的回溯
        for(int i = index; i < candidates.length; i++){
              //新的和              
               currentNums.add(candidates[i]);
               back(i, candidates[i] + sum, currentNums, candidates, result,target);
               currentNums.remove(currentNums.size() - 1);
        }
    }
}
```