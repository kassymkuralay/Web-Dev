def count_evens(nums):
  count = 0
  for num in nums:
    if(num % 2 == 0):
      count += 1
  return count

def big_diff(nums):
  m = max(nums) 
  mi = min(nums)
  return m - mi

def centered_average(nums):
  nums.remove(max(nums))
  nums.remove(min(nums))
  return sum(nums)/len(nums)

def sum13(nums):
  total = 0
  i = 0 
  while i < len(nums):
    if nums[i] == 13:
      i += 2
    else :
      total += nums[i]
      i += 1
  return total

def sum67(nums):
  total = 0 
  skip = False
  
  for num in nums:
    if num == 6 :
      skip  = True
    elif num == 7 and skip :
      skip = False
    elif not skip :
      total += num
  return total

def has22(nums):
  for i in range(len(nums) - 1):
    if nums[i] == 2 and nums[i + 1] == 2:
      return True
  return False
    