def sort_array(source_array):
    new_arr = [num for num in source_array if num % 2 == 1]
    new_arr.sort()
    for i in range(len(source_array)):
        if source_array[i] % 2 == 0:
            new_arr.insert(i, source_array[i])
    
    return new_arr


print(sort_array([5, 3, 1, 8, 0]))