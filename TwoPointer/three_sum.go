package main

import (
	"fmt"
	"sort"
)

func main() {
	array := []int{-1, 2, 1, -4}
	value := threeSumClosest(array, 1)
	fmt.Println(value)
}

func threeSumClosest(nums []int, target int) int {

	sort.Ints(nums[:])
	fmt.Println(nums)
	close_value := nums[0] + nums[1] + nums[2]

	for i := 0; i < len(nums)-2; i++ {
		j, k := i+1, len(nums)-1
		for j < k {
			if absoluteDifferenceInt(target, nums[i]+nums[j]+nums[k]) < absoluteDifferenceInt(target, close_value) {
				close_value = nums[i] + nums[j] + nums[k]
				fmt.Println(i, j, k)
			}
			if nums[i]+nums[j]+nums[k] < target {
				j++
			} else {
				k--
			}
		}
	}
	return close_value
}

func absoluteDifferenceInt(num1, num2 int) int {
	diff := num1 - num2
	if diff < 0 {
		return -diff
	}
	return diff
}
