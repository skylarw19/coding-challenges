// 9/18/2020
/** leetcode 206. reverse linked list
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head;
    if(!current) return current;
    let newCur = head.next;
    current.next = null;
    while(newCur){
        let temp = newCur.next;
        newCur.next = current;
        current = newCur;
        newCur = temp;
    }
    return current;
};