 

# 205. 同构字符串
给定两个字符串 s 和 t ，判断它们是否是同构的。

如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

 示例 1:

输入：s = "egg", t = "add"
输出：true

双映射问题：

```
class Solution {
    //解法1 双映射要用两个map计算
    public boolean isIsomorphic(String s, String t) {
      
        if(s == null && t == null){
            return true;
        }else if(s == null || t == null){
            return false;
        }else if(s.length() != t.length()){
            return false;
        }
        char[] sArray = s.toCharArray();
        char[] tArray = t.toCharArray();
        Map<Character,Character> map = new HashMap();
        Map<Character,Character> map2 = new HashMap();
        for(int i = 0; i < sArray.length; i++){
            char tempS = sArray[i];
            char tempT = tArray[i];
            if(map.containsKey(tempS)){
                char tempTCache = map.get(tempS);
                if(tempT != tempTCache){
                    return false;
                }
            }else{
                map.put(tempS, tempT);
            }


            if(map2.containsKey(tempT)){
                char tempSCache = map2.get(tempT);
                if(tempS != tempSCache){
                    return false;
                }
            }else{
                map2.put(tempT, tempS);
            }
        }
        return true;
    }

    //解法2 相同映射意味着：最左元素相同索引
     /**
     * 最前索引比较
     */
    public boolean isIsomorphic2(String s, String t) {
        for (int i = 0; i < s.length(); i++) {
            //取当前位置字符第一次出现的索引对比
            //情况1(一个字符映射多个): foo 与 bar, 处理第二个o时发现索引不同
            //情况2(多个字符映射同个): abc 与 ggl, 处理第二个g时发现索引不同
            if (s.indexOf(s.charAt(i)) != t.indexOf(t.charAt(i))){
                return false;
            }
        }
        return true;
    }
}

```