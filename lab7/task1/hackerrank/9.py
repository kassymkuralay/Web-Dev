def solve(s):
    words = s.split(" ")
    result = []

    for w in words:
        result.append(w.capitalize())

    return " ".join(result)

s = input()
print(solve(s))