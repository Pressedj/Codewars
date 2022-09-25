def order(sentence):
    v = sentence.split()
    q = []
    count = 1
    if sentence == "":
        return ""
    else:
        while len(q) < len(v):
            for s in range(0, len(v)):
                if str(count) in v[s]:
                    q.append("".join(v[s]))
                    count += 1
            return (" ".join(q))
# Line 2:  takes the string and splits it into list elements
# Line 3   declares q as an empty list for storage
# Line 4:  count is whats used to iterate the number in the string
#          the function is currently searching for
# Line 5:  sets the condition to return empty string if sentence is empty
# Line 6:  returns empty string in response to line 5
# Line 7   starts the else statement if senetence has strings
# Line 8:  Condition meaning When the length of q is same as length of v
#          The proper list should be complete
# Line 9:  Iterates through all strings in sentence using s as an int
#          The range is 0, because lists start at 0, to the length of v
# Line 10: If the number is in the list element it satisfies the condition
# Line 11: Since the if statement is satisfied the element is stored in list q
#          join puts all the characters into one string so the element is a complete word
# Line 12: adds 1 to count telling the function to move on
# Line 13: When complete it joins the list into a string that should be correct


