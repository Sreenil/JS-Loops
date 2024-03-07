function findLargestAndSmallest(arr) {
    
    let largest = arr[0];
    let smallest = arr[0];
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        
        if(arr[i] > largest) {
            largest = arr[i];
        }
        
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    
    const average = sum / arr.length;
    
    return {sum, average, largest, smallest};
}

const array = [10, 5, 2, 8, 15];
const result = findLargestAndSmallest(array);

console.log("Sum is:",result.sum);
console.log("Average is:",result.average);
console.log("Largest Number is:",result.largest);
console.log("Smallest Number is:",result.smallest);
