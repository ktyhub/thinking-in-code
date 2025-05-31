 

# 225. 用队列实现栈
请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

实现 MyStack 类：

void push(int x) 将元素 x 压入栈顶。
int pop() 移除并返回栈顶元素。
int top() 返回栈顶元素。
boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
 

注意：

你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。

：https://leetcode.cn/problems/implement-stack-using-queues

```java
class MyStack {
    //队列初始化
    Queue<Integer> queue1 = null;
    Queue<Integer> queue2 = null;
    
    public MyStack() {
        queue1 = new LinkedList();
        queue2 = new LinkedList();
    }
    //队列先入先出
    //栈先入后出
    public void push(int x) {
        //两个队列需要一个是缓存老队列，一个是接收新队列，缓存队列的元素要追加到新进队列元素的后面
        //--------> 队列
        //--------> 队列 
        //左看右看两个队列的数据流向都是单向的 ，不过如果只有两个元素情况下这两个元素交替移动到另外一个队列的场景，就可以将两个队列看成环形的结构： 
         //1--队列1头  null-队列2头
         //1--队列1头  2-队列2头  （这个时候顺序是队列的顺序很正常）
         //null-队列1  1-2-队列2头 (仔细观察这个时候队列元素已经交换了顺序 先进1将会后2出)
         //再来一个元素3 栈结构我们也喜欢 3能先出
         //3-队列1头   1-2-队列2头 （3要先出就去移动到3中）
         //1-2-3 队列1头  null-队列2头 （老队列列表追加到了缓存的队列列表中）
        if(queue1.isEmpty()){
            queue1.add(x);
            while(!queue2.isEmpty()){
                queue1.add(queue2.poll());
            }
        }else if(queue2.isEmpty()){
            queue2.add(x);
            while(!queue1.isEmpty()){
                queue2.add(queue1.poll());
            }
        }
    }
    
    public int pop() {
        if(!queue1.isEmpty()){
            return queue1.poll();
        }else if(!queue2.isEmpty()){
            return queue2.poll();
        }else{
            //这里应该抛出异常
            return -1;
        }
    }
    
    public int top() {
        if(!queue1.isEmpty()){
            return queue1.peek();
        }else if(!queue2.isEmpty()){
            return queue2.peek();
        }else{
            //这里应该抛出异常
            return -1;
        }
    }
    
    public boolean empty() {
        return queue1.isEmpty() && queue2.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
 ```