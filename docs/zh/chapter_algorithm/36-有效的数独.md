 

# 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 

注意：

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
空白格用 '.' 表示。

 

```java
class Solution {
    public boolean isValidSudoku(char[][] board) {
         //桶计数法，每个位置都会有个桶占据一个位置，用来计数 
         //行桶（行坐标）,一共9行9种元素 行计数的时候就需要81个桶标记为行桶
         int[][] rows = new int[9][9];
         //列桶（列坐标），一共9行9种元素，列计数的时候也需要81个桶标记为列桶
         int[][] columns = new int[9][9];
         //3*3宫格桶（9宫格坐标），每个宫格有3行3列,每个宫格有9个元素，一共9个宫格也是81个桶记录方式如下
         int[][][] box = new int[3][3][9];
         for(int rowIndex = 0; rowIndex < 9; rowIndex++){
             for(int colIndex = 0; colIndex < 9; colIndex++){
                 char c = board[rowIndex][colIndex];
                 if(c != '.'){
                     //当前元素大小（减1是当前元素计数数组里面的坐标）
                     int index = c - '0' - 1;
                     //行桶计数
                     rows[rowIndex][index]++;
                     columns[colIndex][index]++;
                     box[rowIndex / 3][colIndex / 3][index]++;
                     boolean flag = rows[rowIndex][index] > 1||columns[colIndex][index] > 1||box[rowIndex / 3][colIndex / 3][index] > 1;
                     if(flag){
                         return false;
                     }
                 }
             }
         }
         return true;
    }
}
```