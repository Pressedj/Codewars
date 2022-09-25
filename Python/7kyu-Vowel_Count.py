def get_count(s):
    vowels = ["a", "e", "i", "o", "u"]
    # putting vowels in a list to iterate thru them
    # will hopefully cut down on repetitive code
    total = 0
    # this will store the count of vowels in the string
    for i in range(0, len(vowels)):
        print (vowels[i])
    # test to see if iteration works and was successful
        print(s.lower().count(vowels[i]))
    # checking that iteration can be applied to string
    # successful
        total += s.lower().count(vowels[i])
    # adding the number to total for vowel count
    return total
    # will return total to the terminal


a = "Should count all vowels"
get_count(a)

