// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m=[]
    let n=[]
    let x=matrix.length;
    let y=matrix[0].length;
    for(let i=0;i<x;i++){
        for(let j=0;j<y;j++){
            if(matrix[i][j]==0){
               m.push(i)
               n.push(j)
                
            }
        }
    }
       for(i=0;i<m.length;i++){
           let index =m[i];
           for(let j=0;j<matrix[0].length;j++){
               matrix[index][j]=0
           }
       }
       for(i=0;i<n.length;i++){
           let index =n[i];
           for(let j=0;j<matrix.length;j++){
               matrix[j][index]=0
           }
       }
       return matrix;
};