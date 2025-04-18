 


# 226. 翻转二叉树
给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
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
    public TreeNode invertTree(TreeNode root) {
        //模拟当前节点的左右节点互换，使用递归深度优先遍历
        if(root != null && (root.left!= null || root.right != null)){
             TreeNode temp = root.left;
             root.left = root.right;
             root.right = temp;
             invertTree(root.left);
             invertTree(root.right);
        }
        return root;
    }
}
```