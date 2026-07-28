#include <iostream>
#include <vector>

using namespace std;

int removeDuplicates(vector<int> &nums) {
    int i = 0;
    int j = 1;
    int dup = 0;
    int k = 1;
    if (size(nums) == 1)
    {
        return k;
    }

    while(i < size(nums) - 1) {
        if(nums[i] == nums[j]) {
            nums.erase(nums.begin() + j);
            dup++;
        }
        else if(nums[i] != nums[j]) {
            i = j;
            k++;
            j++;
        }
    }
    for (int index = 0; index < dup; index++) {
        nums.push_back(101);
    }
    return k;
}

int main() {
    vector<int> nums = {1, 1, 2};
    int ans = removeDuplicates(nums);
    cout << ans << endl;
    for (int i = 0; i < size(nums); i++) {
        cout << nums[i] << ", ";
    }
    cout << endl;
    return 0;
}