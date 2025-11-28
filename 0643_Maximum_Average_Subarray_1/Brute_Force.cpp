#include <iostream>
#include <vector>
#include <cmath>
#include <iomanip>
#include <string>
#include <sstream>

class Solution
{
public:
    double findMaxAverage(const std::vector<int> &nums, int k)
    {
        int totalsum = 0;
        int s = nums.size();
        if (nums.size() == k)
        {
            s += 1;
        }
        for (int i = 0; i <= s - k; i++)
        {
            int tempsum = 0;
            for (int j = i; j < i + k; j++)
            {
                tempsum += nums[j];
            }

            if (tempsum > totalsum)
            {
                totalsum = tempsum;
            }
            else if (tempsum < 0)
            {
                if(totalsum == 0){
                    totalsum = tempsum;
                }
            }
        }

        return (totalsum + 0.0) / k;
    }
};

int main()
{
    std::vector<int> nums;

    nums = {9, 7, 35, 1, 0, 8};

    int k = 5;
    Solution a;
    double ans = a.findMaxAverage(nums, k);
    std::cout << "Final Ans " << ans << std::endl;
    return 0;
}