def find_it(seq):
    for i in range(0, len(seq)):
        num = seq.count(seq[0])
        x = seq[0]
        if num % 2 != 0:
            print(seq[0])
            return seq[0]
        else:
            for i in range(0, num):
                seq.remove(x)
                print(seq)


v = [10]
q = [20,1,1,2,2,3,3,5,5,4,20,4,5]
find_it(q)

