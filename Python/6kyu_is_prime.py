#is_prime solutions

def is_primedraft(num):
    print(num)
    divisors = [x for x in range(2, 1000) if num % x == 0]
    print(divisors)
    if num <= 1:
        return False
    else:
        return len(divisors) < 2
# this is the first solution I came up with and it worked.
# Passes tests but unfortunately it didn't past the attempt
# I used range 2, 1000 because it prevents timeout and works for most numbers
# Problem is it's not best practice a better answer is below:

def is_prime(num):
    if num <= 2:
        return False
    i = 2
    while (i <= num ** 0.5):
        if num % i == 0:
            return False
        i += 1
    return True
# This solution passes both Test and Attempt on codewars
# Line by line explination:
# Line 17: any number that is less than or equal to 1 is not prime
#   Line 18: Catches all these numbers and writes them as false
# Line 18 start i with 2 to prevent any redundancies
#   If start with 1 it would trigger line 21 and fail tests as result
# Line 20: initiates a while Loop
#  The reason num is squared a.k.a ^.5: anything above the sqrt is a redundant number
#   Example: if num == 36, sqrt(36) = 6 all numbers below 6 are the other side pair
# Line 21 & 22: checks for a remainder if there is no remainder it returns False
#   Reason: as soon as a number proves num is not prime its best for the function to end
# Line 23 adds 1 to i
# Line 24: If these checks fail the final  result is that the num must be prime a.k.a True
