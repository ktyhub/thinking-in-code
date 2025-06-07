 

# 160. 相交链表
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

图示两个链表在节点 c1 开始相交：



题目数据 保证 整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构 。
 
 ```java
 /**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        //两个指针走这两个两个链表走完相同长度的时候就达到了相交的位置了
        ListNode currentA = headA;
        ListNode currentB = headB;
        int count = 0;
        while(true){
            if(currentA == null){
                currentA = headB;
                count++;
                if(count > 2){
                    return null;
                }
            }
            if(currentB == null){
                currentB = headA;
                count++;
                 if(count > 2){
                    return null;
                }
            }
            if(currentA == currentB){
                return currentA;
            }
            currentA = currentA.next;
            currentB = currentB.next;
        }     
    }
}
```