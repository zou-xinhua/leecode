/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let node = new ListNode(0)
    node.next = head
    let pre = node
    let end = node
    while(end.next != null) {
        for(let i = 0; i < k && end != null; i++) end = end.next
        if(end === null) break
        let start = pre.next
        let next = end.next

        end.next = null
        pre.next = reverse(start)
        start.next = next
        pre = start
        end = pre
    }
    return node.next
};
function reverse(head) {
    let pre = null;
    let curr = head;
    while (curr != null) {
        let next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre;
}
// @lc code=end

