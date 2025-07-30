class ListNode {
    int val;
    ListNode next;

    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }

    public static ListNode deserialize(String data) {
        if (data == null || data.equals("[]") || data.equals("")) return null;

        data = data.replace("[", "").replace("]", "").replace(" ", "");
        String[] parts = data.split(",");

        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        for (String part : parts) {
            int val = Integer.parseInt(part);
            current.next = new ListNode(val);
            current = current.next;
        }

        return dummy.next;
    }
}

class Solution {
    static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0); 
        ListNode current = dummy;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            int v1 = (l1 != null) ? l1.val : 0;
            int v2 = (l2 != null) ? l2.val : 0;

            int sum = v1 + v2 + carry;
            carry = sum / 10;

            current.next = new ListNode(sum % 10);
            current = current.next;

            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }

        return dummy.next;
    }
}