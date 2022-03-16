//O(n)
function bigOofn(n){
    for(let i=0;i<=n;i++){  //no of operations propotional to n
        console.log(i)
    }
}
bigOofn(10)

//Drop constants
//1st rule is drop constents

// function logItems(n){
//     for(let i=0;i<n;i++){
//         console.log(i)           //o(n)+o(n)=o(2n)=>drop the constant here its 2 so O(n)

//     }
//     for(let j=0;j<n;j++){
//         console.log(j)
//     }
// }

//logItems(3)

//o(n2)
function logItemsOofnsq(n){
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){       //o(n*n)=>o(n^2) 
           
                console.log(i,j)
                
            
        }
    }
}

function logItemsOofntrip(n){
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){  
            for(let j=0;j<n;j++){      //o(n*n*n)=>o(n^3) it doesnt matter o(n^3) its just o(n^2)
           
                console.log(i,j)
            }  
            
        }
    }
}

logItemsOofnsq(3)