// sort
// hash map
// linklist cycle ^..^(Floyd’s Cycle Finding Algorithm)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let fast = nums[0];
  let slow = nums[0];

  do {
    fast = nums[nums[fast]];
    slow = nums[slow];
  } while (slow != fast);

  slow = nums[0];

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return fast;
};

// for 1,3,4,2,2 making the linklist
// 1->3->2->4->2(back to 2)
// fast=> 1->2->2
// slow=> 1->3->2
// Detected a Cycle
// find the start of cycle
// fast=>2->4->2
// slow=>1->3->2
// why this works
//Floyds cycle finding algo
// The Fast pointer again catches the slow pointer at some time therefore a loop exists in the linked list.
