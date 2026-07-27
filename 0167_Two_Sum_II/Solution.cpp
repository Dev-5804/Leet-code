#include <iostream>
#include <vector>

using namespace std;

vector<int> twoSum(vector<int> &numbers, int target) {
    int left = 0;
    int right = size(numbers) - 1;
    vector<int> ans = {};

    while (left < right)
    {
        if (numbers[left] + numbers[right] == target)
        {
            ans.push_back(left + 1);
            ans.push_back(right + 1);
            break;
        }
        else if (numbers[left] + numbers[right] < target)
        {
            left++;
        }
        else if (numbers[left] + numbers[right] > target)
        {
            right--;
        }
    }
    return ans;
}

int main() {
    
    return 0;
}