//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
let nums1AscOrd = nums1.slice().sort((a, b) => a - b);
let nums2AscOrd = nums2.slice().sort((a, b) => a - b);
let nums3AscOrd = nums3.slice().sort((a, b) => a - b);

console.log(nums1AscOrd); 
console.log(nums2AscOrd); 
console.log(nums3AscOrd);

//Sort each array in decending order.
let nums1DescOrd = nums1.slice().sort((a, b) => b - a);
let nums2DescOrd = nums2.slice().sort((a, b) => b - a);
let nums3DescOrd = nums3.slice().sort((a, b) => b - a);

console.log(nums1DescOrd);
console.log(nums2DescOrd); 
console.log(nums3DescOrd); 
