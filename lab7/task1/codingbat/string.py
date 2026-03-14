def hello_name(name):
  return "Hello " + name + "!" 

def make_abba(a, b):
  return a + b + b + a

def make_tags(tag, word):
  return "<" + tag +">" + word + "</" + tag + ">"

def make_out_word(out, word):
    return out[:2] + word + out[2:]

def extra_end(str):
  end = str[-2:]
  return end * 3

def first_two(str):
  fs = str[:2]
  return fs

def first_half(str):
  fs = str[:len(str)/2]
  return fs

def without_end(str):
  w = str[1:-1]
  return w

def combo_string(a, b):
  if(len(a) > len(b)):
    return b + a + b
  else:
    return a + b + a

def non_start(a, b):
  f = a[1:]
  l = b[1:]
  return f + l

def left2(str):
  end = str[:2]
  st = str[2:]
  return st + end