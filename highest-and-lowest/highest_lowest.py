def high_and_low(numbers):
    numbers_arr = numbers.split(" ")
    numbers_arr = [int(num) for num in numbers_arr]
    high_number = numbers_arr[0]
    low_number = numbers_arr[0]
    for num in numbers_arr:
        if(num > high_number):
            high_number = num
            low_number = high_number
    for num in numbers_arr:
        if(num < low_number):
            low_number = num
    return f"{high_number} {low_number}"

print(high_and_low("1 2 3 4 5"))