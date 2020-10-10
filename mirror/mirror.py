def mirror(data: list) -> list:
    data_copy = data[:]
    reversed_data = data[:]
    data_copy.sort()
    reversed_data.sort(reverse=True)
    complete_arr = [*data_copy, *reversed_data[1:]]
    return complete_arr
    
    

print(mirror([5,2,6,4]))