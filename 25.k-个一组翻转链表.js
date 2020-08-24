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
    let a = node.next
    let b = node.next
    for(let i = 0; i < k; i++) {
        if (!b) return head
        b = b.next
    }

    let newHead = new ListNode(0)
    newHead.next = reverse(a, b)
    a.next = reverseKGroup(b, k)
    return newHead.next
};
function reverse(a, b) {
    // 翻转a->b
    let pre = null, cur = a, next = a
    while(cur != b) {
        //每次处理一个节点，指向当前节点的前一个节点
        next = cur.next
        cur.next = pre

        pre = cur
        cur = next
    }
    return pre
}
// @lc code=end

