a = int(input("a "))
b = int(input("b "))
if(a > b):
    print(a)
else:
    print(b)


year = int(input())
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")


a, b = map(int, input().split())
if a == b or (a != 1 and b != 1):
    print("YES")
else:
    print("NO")


x = int(input())
if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)


a, b = map(int, input().split())
if a > b:
    print(1)
elif b > a:
    print(2)
else:
    print(0)