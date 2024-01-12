***###***

[all two pointers in leetcode](https://leetcode.com/discuss/study-guide/1688903/Solved-all-two-pointers-problems-in-100-days)

***The idea here is to iterate two different parts of the array simultaneously to get the answer faster.***

### **Implementation**

#### **1. One ponter at each end**

One pointer starts from beginning and other from the end and they proceed towards each other.

![image](https://assets.leetcode.com/users/images/43ba6a53-5488-4b03-97be-bf8a0b9c41ed_1648876947.1375144.png)

Example : In a sorted array, find if a pair exists with a given sum

Approch

```
bool pairExists(int arr[], int n, int S)
{
    i = 0
    j = n-1
    while( i < j)
    {
        curr_sum = arr[i] + arr[j]
        if ( curr_sum == S)
            return true
        else if ( curr_sum < X )
            i = i + 1
        else if ( curr_sum > X )
            j = j - 1
    }
    return false
}
```

#### **2. Different paces(fast and slow pointer)**

Both pointers start from the beginning but one pointer moves at a faster pace than the other one.![image](https://assets.leetcode.com/users/images/ce642c9c-90c9-45af-a7e8-a5a70b146843_1648877375.811001.png)

> check find duplicates [click](https://github.com/snow-2357/myDSA/blob/master/array/Medium/Find_Duplicate.js)
