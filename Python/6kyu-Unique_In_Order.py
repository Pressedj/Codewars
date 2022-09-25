<<<<<<< HEAD
def unique_in_order(iterable):
    q = []
    if iterable == "":
        return q
    else:
        q.append(iterable[0])
        c = 0
        for i in range(1, len(iterable)):
            if iterable[i] == q[c]:
                pass
            else:
                q.append(iterable[i])
                c += 1
    return q

# This solution works but it has a lot of room for improvement
# Line 2:       initiates the list to store the unique elements
# Line 3:       if statement filters empty strings through condition
# Line 4:       when if statement is active function returns empty list as result
# Line 5:       else statement: catches the other condition since
#               the opposite of nothing is something
# Line 6:       Appends the element of iterable to list q
# Line 7:       set c to 0 which is used to iterate through list q
# Line 8:       Starts for loop using the range from 1
#               since q already has iterable[0] appended
# Line 9-10:    Starts if statement if the iterable element [i]
#               is the same as element q[c] the function passes
# Line 11:       Hands everything else: If the element is not the same
#               the element iterable[i[ is appended to q and the count c
#               increases by 1 allowing the function to continue parsing

=======
def unique_in_order(iterable):
    q = []
    if iterable == "":
        return q
    else:
        q.append(iterable[0])
        c = 0
        for i in range(1, len(iterable)):
            if iterable[i] == q[c]:
                pass
            else:
                q.append(iterable[i])
                c += 1
    return q

# This solution works but it has a lot of room for improvement
# Line 2:       initiates the list to store the unique elements
# Line 3:       if statement filters empty strings through condition
# Line 4:       when if statement is active function returns empty list as result
# Line 5:       else statement: catches the other condition since
#               the opposite of nothing is something
# Line 6:       Appends the element of iterable to list q
# Line 7:       set c to 0 which is used to iterate through list q
# Line 8:       Starts for loop using the range from 1
#               since q already has iterable[0] appended
# Line 9-10:    Starts if statement if the iterable element [i]
#               is the same as element q[c] the function passes
# Line 11:       Hands everything else: If the element is not the same
#               the element iterable[i[ is appended to q and the count c
#               increases by 1 allowing the function to continue parsing

>>>>>>> ac6bea11187094666b5d4849fe31b6bc74b68c7e
