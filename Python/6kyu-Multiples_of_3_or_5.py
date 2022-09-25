def solution(number):
    total = 0
    if number < 3:
        return total
    else:
        if 0 < number % 3 <= 2:
            num3 = int(number//3) + 1
        else:
            num3 = int(number//3)
        if 0 < number % 5 <= 4:
            num5 = int(number//5) + 1
        else:
            num5 = int(number//5)
        for i in range(1,num3):
            if i % 5 == 0:
                pass
            else:
                total += 3 * i
        for i in range(1,num5):
            total += i * 5
        return total
# Too many if statements!
# It works but at what cost?!
# Where's the elegance?!
# New goal for september >~<
