/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return null
    let fast = head, slow = head
    while (fast) {
        if (slow.val !== fast.val) {
            slow = slow.next
            slow.val = fast.val
        }
        fast = fast.next
    }
    slow.next = null
    return head
};
// @lc code=end

