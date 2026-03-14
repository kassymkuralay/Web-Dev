a, b = map(int, input().split())
for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=' ')


x = int(input())
for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break

x = int(input())
print(int(str(x)[::-1]))


x = int(input())
s = 0
for digit in str(x):
    s += int(digit)
print(s)


x, d = input().split()
count = 0
for digit in x:
    if digit == d:
        count += 1
print(count)


a, b = map(int, input().split())
for i in range(a, b + 1):
    if int(i ** 0.5) ** 2 == i:
        print(i, end=' ')


a, b, c, d = map(int, input().split())
for i in range(a, b + 1):
    if i % d == c:
        print(i, end=' ')


n, *nums = map(int, input().split())
print(nums.count(0))


b = input()
print(int(b, 2))


n, *nums = map(int, input().split())
print(sum(nums))


nums = list(map(int, input().split()))
print(sum(nums))


x = int(input())
count = 0
for i in range(1, x + 1):
    if x % i == 0:
        count += 1
print(count)


x = int(input())
for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=' ')


n = int(input())
k = 0
p = 1
while p < n:
    p *= 2
    k += 1
print(k)


n = int(input())
p = 1
while p < n:
    p *= 2
if p == n:
    print("YES")
else:
    print("NO")


n = int(input())
p = 1
while p <= n:
    print(p, end=' ')
    p *= 2


n = int(input())
k = 0
p = 1
while p * 2 <= n:
    p *= 2
    k += 1
print(k)


n = int(input())
i = 1
while i * i <= n:
    print(i * i, end=' ')
    i += 1

