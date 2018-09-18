/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
     var arr =[];
    var count=0, buff=0;
    for(var i=0;i<preferences.length;i+=1){
            
        if((i+1)===preferences[preferences[preferences[i]-1]-1] && (i+1)!==preferences[i] && preferences[i]!==preferences[preferences[i]-1]){
            for(var j=0;j<arr.length;j++){
                if(arr[j]===(i+1))buff=1;
            }
            if(buff===0){
                arr.push(i+1,preferences[i],preferences[preferences[i]-1],preferences[preferences[preferences[i]-1]-1]);
                count++;
            }  
        }
            buff=0;
        
           
        }
     return count;
  // your implementation
};

