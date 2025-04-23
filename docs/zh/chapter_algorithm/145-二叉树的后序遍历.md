 

# 145. 二叉树的后序遍历
给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        //左、右、根
        List<Integer> result = new ArrayList();
        traversal(root, result);
        return result;
    }
    public void traversal(TreeNode node,List<Integer> result){
        if(node == null){
            return;
        }
        traversal(node.left,result);
        traversal(node.right,result);
        result.add(node.val);
    }
}
```