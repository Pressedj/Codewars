def find_it(seq):
    for i in range(0, len(seq)):
        num = seq.count(seq[0])
        x = seq[0]
        if num % 2 != 0:
            # print(seq[0])
            return seq[0]
        else:
            for i in range(0, num):
                seq.remove(x)
                # print(seq)

# used for loops
# line 3:   counts the amount of times the first element is in the list
# line 4:   stores the variable and it updates when its out of the if statement
# line 5:   if theres an odd amount the the remainder won't = 0
# line 6:   returns the odd number
# line 8:   else statement if the number of seq[0]
# line 9    for statement that occurs the total count of seq[0]
# line 10:  removes the element from the list
#           so the function doesn't have to search that number again
