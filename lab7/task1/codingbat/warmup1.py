import math

def sleep_in(weekday, vacation):
    return not weekday or vacation 

def monkey_trouble(a_smile, b_smile):
    return a_smile and b_smile or not a_smile and not b_smile 

def sum_double(a, b):
    if(a == b):
        return ((a+b)* 2)
    else:
        return a + b

def diff21(n):
    if(n == 21):
        return ((21 - n) * 2)
    else:
        return 21 - n 
    
def parrot_trouble(talking, hour):
  if talking and hour < 7 :
    return True
  elif talking and hour > 20 :
    return True
  else:
    return False
  
def makes10(a, b):
  if a == 10 or b == 10:
    return True 
  elif a + b == 10:
    return True 
  else :
    return False 

def near_hundred(n):
  if abs(100 - n) <= 10 or abs(200 - n) <= 10 :
    return True 
  else :
    return False
  
def pos_neg(a, b, negative):
  if negative :
    return a < 0 and b < 0 
  else:
    return (a < 0 and b > 0) or (a > 0 and b < 0)

def not_string(str):
  if len(str) >= 3 and str[:3] == "not" :
    return str
  return 'not ' + str

def missing_char(str, n):
  front = str[:n]   
  back = str[n+1:]
  return front + back

def front_back(str):
  if len(str) <= 1:
    return str
  
  mid = str[1:-1] 
  
  return str[len(str)-1] + mid + str[0]

def front3(str):
  front = str[:3]
  return front + front + front