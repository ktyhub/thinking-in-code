 


# 144. 二叉树的前序遍历


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
    
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList();
        //前序遍历，根左右
         preorder(root, result);
         return result;
    }
    public void preorder(TreeNode node, List<Integer> result){
        if(node == null){
            return;
        }
        //处理根节点
        result.add(node.val);
        //处理左子节点
        preorder(node.left, result);
        //处理右子节点
        preorder(node.right, result);
    }
}

```