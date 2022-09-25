#7 kyu: Sort and Star 

two_sort <- function(s){
  v <- sort(s)[1]
  q <- strsplit(v, "")[[1]]
  d <- ""
  for (val in q[1:nchar(v)-1]) {
    d <- paste(d, val, "***", sep="")
    print(d)
  }
  d <- paste(d, q[nchar(v)], sep="")
  print(d)
  
}
# Line 3 Currently sorts out the combined values and stores them in a value
# Line 5 Splits the characters indiviually
# Line 6 delcares d as an empty string
# With everything store in a variable, decided to 
# Edit the element with a for loop (Pythonesque thinking)
# Line 7 For loop goes thru each character val in variable q - the last character
#   Subtracted the last character because *** only goes inbetween characters not on ends
# Line 8 Since R lacks += the best alternative is to include it in the paste function
# This adds everything we need
# Line 9: print(d) is there for my own debugging unfortunately I forgot to remove it
# Line: 11 adds the last character to finish of the word
# Line 12 prints the finished product
# This improves on the previous solution slightly which used a second empty string
# Still when compared to the other solutions there is much room for improvement
# Will review other solutions at a later date 