import string
import random

def generateName():
    lowercase_letters = string.ascii_lowercase
    uppercase_letters = string.ascii_uppercase
    combined_letters = []
    name = ""
    for a in lowercase_letters:
        combined_letters.append(a)
    for a in uppercase_letters:
        combined_letters.append(a)
    for i in range(6):
        name += random.choice(combined_letters)
    if(photoManager.nameExists(name)):
        generateName()
    else:
        return name
       
generateName()
