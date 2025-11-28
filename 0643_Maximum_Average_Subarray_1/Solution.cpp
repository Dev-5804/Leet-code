#include <iostream>
#include <vector>

class Solution
{
public:
    double findMaxAverage(std::vector<int> &nums, int k)
    {
        int size = nums.size();

        int sum = 0;
        for(int i = 0; i < k; i++){
            sum += nums[i];
        }

        int maxSum = sum;

        for(int i = k; i < size; i++){
            sum += nums[i];
            sum -= nums[i - k];
            if(sum > maxSum){
                maxSum = sum;
            }
        }
        return (maxSum + 0.0)/k;
    }
};

int main()
{
    std::vector<int> nums;

    nums = {1,12,-5,-6,50,3};

    int k = 4;
    Solution a;
    double ans = a.findMaxAverage(nums, k);
    std::cout << "Final Ans " << ans << std::endl;
    return 0;
}