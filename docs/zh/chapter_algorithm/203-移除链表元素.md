 
# 203 移除链表元素

给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 

示例 1：


输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
 
创建个前置头节点然后直接模拟过程


 ```java
 /**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        //删除所有值相等的节点就直接遍历删除吧
        ListNode preNode = new ListNode(-1,head);
        ListNode current = preNode;
        while(current != null){
            ListNode next = current.next;
            if(next != null && next.val == val){
                current.next = next.next;
            }else{
                current = current.next;
            }
        }
        return preNode.next;
    }
}
```