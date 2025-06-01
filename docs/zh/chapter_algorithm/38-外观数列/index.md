 

# 外观数列
给定一个正整数 n ，输出外观数列的第 n 项。

「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

你可以将其视作是由递归公式定义的数字字符串序列：

countAndSay(1) = "1"
countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。
前五项如下：

1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1 
描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
 
```java
class Solution {
    public String countAndSay(int n) {
        //动态规划问题
        //要得到n的状态字符串就需要知道n-1的
        //状态转移方程：
        //fn = count(fn-1)
        if(n == 0){
            return "";
        }
        List<Integer> result = new ArrayList();
        result.add(1);
        for(int i=2; i<=n;i++){
             List<Integer> temp = new ArrayList();
             Integer currentNum = null;
             int count = 0;
             for(int j = 0; j < result.size(); j++){
                 if(currentNum == null){
                     currentNum = result.get(j);
                     count++;
                 }else if(currentNum == result.get(j)){
                      count++;
                 }else{
                     temp.add(count);
                     temp.add(currentNum);
                     count = 1;
                     currentNum = result.get(j);
                 }
             }
             if(count>0){
                  temp.add(count);
                   temp.add(currentNum);
             }
             result = temp;
        }
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < result.size(); i++){
            sb.append(result.get(i));
        }
        return sb.toString();
    }

}
```