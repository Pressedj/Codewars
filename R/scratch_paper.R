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

# a <- c("bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps")
b <- c("lets", "talk", "about", "javascript", "the", "best", "language")

two_sort(b)
# Currently sorts out the combined values
# Now need to add the astericks inbetween each letter

b <- c("lets", "talk", "about", "javascript", "the", "best", "language")
#print (sort(b)[1])

v <- sort(b)[1]
#print(typeof(v))
q <- strsplit(v, "")[[1]]
m <- ""
# <- paste(val in q, sep = "***", collapse = NULL)
# print (d)
#print(q)
# now that v stores the first sorted element I can edit it
# Editing the element prolly with a for loop
for (val in q[1:nchar(v)-1]) {
  print(val)
  d <- paste(val, "***", sep="")
  print(d)
  m <- paste(m, d, sep="")
}
m <- paste(m, q[nchar(v)], sep="")
print(m)
