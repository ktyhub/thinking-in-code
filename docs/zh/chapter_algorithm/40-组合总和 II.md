 


# 40. 组合总和 II
给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用 一次 。

注意：解集不能包含重复的组合。 

 

示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
```
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

回溯去重解法，每个元素的子树都是可以穷举所有的结果了计算完当前元素的子树之后可以看下下个元素是否与当前元素相同，相同下个元素就可以直接跳过无需重复计算子树运算

```java
class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        //这个题明确了数字只用一次 好像列举用回溯法方便，改成二分查找无法知道几个数字难度有点大
        //回溯法处理
        List<List<Integer>> result = new ArrayList();
        if(candidates == null){
            return result;
        }
        Arrays.sort(candidates);

        List<Integer> path = new ArrayList();
        back(0, 0, path, candidates, target, result);
        return result;
    }
    public void back(int index,int sum,List<Integer> path,int[] candidates,int target,List<List<Integer>> result){
         if(sum == target){
            result.add(new ArrayList(path));
            return;
        }
        if(index >= candidates.length){
            return;
        }
        if(sum > target){
            return;
        }
       
       
     
        for (int currentIndex = index; currentIndex < candidates.length ; currentIndex++) {
            //每个元素都会分散为多个子树，每个元素都会形成多叉树，
            //每个元素的多叉树就包含了所有种可能
            path.add(candidates[currentIndex]);
            back(currentIndex + 1,sum + candidates[currentIndex], path, candidates, target, result);
            path.remove(path.size() - 1);

            //元素走完了看下下一个元素是否为重复元素重复元素就不需要再执行回溯逻辑了
            while(currentIndex < candidates.length - 1 && candidates[currentIndex] == candidates[currentIndex + 1]){
                currentIndex++;
            }
        }
    }
}
```