#import numpy as np
# def multiplication_table(size):
#     empty = []
#     x = np.array([i for i in range(1,size+1)])
#     # x.append([2,4,6])
#     print(x)
#     for s in range(1, size + 1):
#         empty.append(s*x)
#     print(empty)
# Tried with numpy arrays it didn't work as I thought it would

def multiplication_table(size):
    empty = []
    x = [i for i in range(1, size + 1)]
    empty.append(x)
    for s in range(2, size + 1):
        y = list(map(lambda t: s*t, x))
        empty.append(y)
    return empty
#     for i in range(0, len(empty)):
#         print(empty[i])
#      Line 20-21 return the list in a format similar to a
#                 multiplication table


# Line 13:   Declared an empty list
# Line 14:  list comprehension to start the first row
#           added 1 to the size so that it would go to the number completely
# Line 15:  x is appended to empty to fill out the first row
# Line 16:  starts for statement at 2 since row 1 is already made.
#             size is + 1 for the same reason in Line 15
# Line 17:  Use list to keep all the map values in a list stored in the variable (y)
#           s cycles through the numbers
# Line 18:  Appends updated row to the list

multiplication_table(9)