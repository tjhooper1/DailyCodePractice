def get_order(order):
    new_order = list()
    menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"]
    for item in menu:
        for _ in range(order.count(item.lower())):
            new_order.append(item)
    return ' '.join(new_order)
    

# 1. Burger
# 2. Fries
# 3. Chicken
# 4. Pizza
# 5. Sandwich
# 6. Onionrings
# 7. Milkshake
# 8. Coke

print(get_order("pizzachickenfriesburgercokemilkshakefriessandwich"))
