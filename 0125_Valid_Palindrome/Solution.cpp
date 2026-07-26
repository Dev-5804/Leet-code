#include <iostream>
#include <cctype>

using namespace std;

bool isPalindrome(string s)
{
    int j = size(s) - 1;

    for (int i = 0; i < j; i++)
    {
        while (isalnum(s[i]) == false)
        {
            i++;
        }

        while (isalnum(s[j]) == false)
        {
            j--;
        }

        if ((tolower(s[i]) != tolower(s[j])) && (i < j))
        {
            return false;
        }
        j--;
    }

    return true;
}

int main()
{
    string str = " ";
    bool ans = isPalindrome(str);
    cout << ans << endl;
    return 0;
}