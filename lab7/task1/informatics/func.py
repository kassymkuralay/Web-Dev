def xor(x, y):
    return x != y

x, y = map(int, input().split())
print(int(xor(x, y)))


def power(a, n):
    return a ** n

a, n = map(int, input().split())
print(power(a, n))


def minimum(a, b, c, d):
    return min(a, b, c, d)

a, b, c, d = map(int, input().split())
print(minimum(a, b, c, d))