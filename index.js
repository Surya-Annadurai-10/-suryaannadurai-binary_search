console.log("Hello");


const binary_search = (arr , tar) => {
   let i = 0;
   let j = arr.length - 1;

   while ( i <= j){
    let mid = (i + j) / 2;

    if( arr[mid] == tar ){
        return mid;
    }else if(arr[mid] > tar){
         j = mid - 1;
    }else{
        i = mid + 1
    }
   }

   return -1;
}

export default binary_search;


