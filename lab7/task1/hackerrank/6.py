students = []

n = int(input())

for i in range(n):
    name = input()
    score = float(input())
    students.append([name, score])

scores = []

for s in students:
    scores.append(s[1])

scores = sorted(set(scores))
second = scores[1]

names = []

for s in students:
    if s[1] == second:
        names.append(s[0])

names.sort()

for name in names:
    print(name)