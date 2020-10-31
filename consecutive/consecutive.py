def consecutive(arr, a, b):
    pos_a = arr.index(a)
    print(arr.index(b))
    if pos_a + 1 == arr.index(b) or pos_a - 1 == arr.index(b):
        return True
    else:
        return False
print(consecutive([1,3,5,7], 3,7))