function findMedianSortedArrays(nums1, nums2) {
  let nums3 = [...nums1, ...nums2];
  // Before finding median list should be sorted
  nums3.sort();
  let median;
  // if list is even median is average of the two middle values
  if (nums3.length % 2 == 0) {
    median = (nums3[nums3.length / 2 - 1] + nums3[nums3.length / 2]) / 2;
  }
  // if list is odd median is middle value
  else {
    median = nums3[Math.round(nums3.length / 2) - 1];
  }
  return median;
}

nums1 = [1, 3];
nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));
