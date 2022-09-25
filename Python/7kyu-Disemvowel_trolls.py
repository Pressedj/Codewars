def disemvowel(s):
    vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    # ^ Fix this its ugly
    # putting vowels in a list to iterate thru them
    # will hopefully cut down on repetitive code
    new_s = s
    # saved to a new variable to keep original intact
    for i in range(0, len(vowels)):
        # for loop iterates through vowels
        new_s = new_s.replace(vowels[i], "")
        # update new_s everytime for loop changes
        print(new_s)
    print(new_s)

disemvowel("This website is for losers LOL!")

print("Hi")