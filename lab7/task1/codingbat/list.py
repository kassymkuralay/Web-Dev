def first_last6(nums):
  if nums[0] == 6 or nums[len(nums) - 1] == 6:
    return True
  else:
    return False
    
def same_first_last(nums):
  if len(nums) >= 1 and nums[0] == nums[len(nums) - 1]:
    return True
  else :
    return False

def make_pi():
  pi = [3, 1, 4]
  return pi

def common_end(a, b):
  if a[0] == b[0] or a[len(a)-1] == b[len(b)-1]:
    return True
  else:
    return False
  
def sum3(nums):
  sum = 0 
  for num in nums:
    sum += num
    
  return sum 

def rotate_left3(nums):
  arr = [nums[1], nums[2] , nums[0] ]
  return arr

def reverse3(nums):
  arr = [nums[2], nums[1], nums[0]]
  return arr

def max_end3(nums):
  if nums[0] > nums[2]:
    arr = [nums[0], nums[0], nums[0]]
    return arr 
  else:
    arr = [nums[2], nums[2], nums[2]]
    return arr

def sum2(nums):
  if len(nums) > 2 :
    return nums[0] + nums[1]
  elif len(nums) <=2 :
    sum = 0 
    for num in nums:
      sum += num 
    return sum
  elif len(nums) == 0 :
    return 0

def middle_way(a, b):
  arr = [a[1] , b[1]]
  return arr 

def make_ends(nums):
  arr =[ nums[0], nums[-1]]
  return arr

def has23(nums):
  if nums[0] == 2 or nums[0] == 3:
    return True
  elif nums[1] == 3 or nums[1] == 2:
    return True
  else:
    return False