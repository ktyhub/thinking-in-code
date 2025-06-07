 

# 202 快乐数
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

 

示例 1：

输入：n = 19
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1


检测链表是否为环的快慢指针思想也可以用到 其他场景的唤醒检测中如下所示：
快乐数

```
class Solution {
    public boolean isHappy(int n) {
        //这个题比较有意思，比较简单理解的思路就是模拟计算快乐数，然后使用Hash计算是否有历史记录
        //但是使用hash又会造成 O(n)的空间复杂度
        //使用快慢指针
        int slowRunner = n;
        int fastRunner = getNext(n);
        while(fastRunner != 1 && slowRunner != fastRunner){
             slowRunner = getNext(slowRunner);
             fastRunner = getNext(getNext(fastRunner));
        }
        return fastRunner == 1;
    }
    public int getNext(int n){
        int sum = 0;
        while(n > 0){
            int d = n % 10;
            n = n / 10;
            sum += d * d;
        }
        return sum;
    }
 
}
```