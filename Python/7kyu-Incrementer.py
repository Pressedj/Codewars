def incrementer(nums):
    for i in range(0, len(nums)):
        # for loops to iterate through the array
        x = int(nums[i]) + (i+1)
        # increments the array element for each loop
        if x < 10:
            # seperates elements that add to numbers greater than 10
            nums[i] = x
            # replaces numbers that are less than 10 with increment
        else:
            # deals with numbers greater than 10
            last = x % 10
            # modulus of 10 leaves that last digit
            # put it into a different variable in case it ever needs changes
            nums[i] = last
            # replaces the element with the last digit of incremented element
    return nums
        # returns final value

# Scratch paper stuff
        # print(nums)
        # how to deal with numbers that are double digit



a = [1, 2, 3]
b = [4, 6, 7, 1, 3]
# 7 should return 0
c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]
incrementer(c)
