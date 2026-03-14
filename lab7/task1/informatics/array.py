n = int(input())
a = list(map(int, input().split()))
for i in range(0, n, 2):
    print(a[i], end=' ')


n = int(input())
a = list(map(int, input().split()))
a.reverse()
print(*a)


n = int(input())
a = list(map(int, input().split()))
count = 0
for i in range(1, n-1):
    if a[i] > a[i-1] and a[i] > a[i+1]:
        count += 1
print(count)


n = int(input())
a = list(map(int, input().split()))
ans = "NO"
for i in range(n-1):
    if a[i] > 0 and a[i+1] > 0 or a[i] < 0 and a[i+1] < 0:
        ans = "YES"
print(ans)


n = int(input())
a = list(map(int, input().split()))
count = 0
for i in range(1, n):
    if a[i] > a[i-1]:
        count += 1
print(count)


n = int(input())
a = list(map(int, input().split()))
count = 0
for x in a:
    if x > 0:
        count += 1
print(count)


n = int(input())
a = list(map(int, input().split()))
for x in a:
    if x % 2 == 0:
        print(x, end=' ')

