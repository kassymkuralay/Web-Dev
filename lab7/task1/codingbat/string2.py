def double_char(str):
  res = ""
  for i in range(len(str)):
    res = res + (str[i] + str[i] )
  
  return res

def count_hi(str):
  count = 0 
  for i in range(len(str)):
    if(str[i : i + 2] == 'hi'):
      count += 1 
  return count
    
def cat_dog(str):
  return str.count("cat") == str.count("dog")

def end_other(a, b):
  a = a.lower()
  b = b.lower()
  return a.endswith(b) or b.endswith(a)

def xyz_there(str):
  for i in range(len(str)-2):
    if str[i:i+3] == "xyz":
      if i == 0 or str[i-1] != ".":
        return True
  return False