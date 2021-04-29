def is_valid_walk(walk):
    #determine if walk is valid
    if len(walk) != 10:
        return False
    turns = {
        "n": 0,
        "s": 0,
        "e": 0,
        "w": 0
    }
    for turn in walk:
        turns[turn] += 1
    if turns["n"] == turns["s"] and turns["e"] == turns["w"]:
        return True
    return False

# test.expect(is_valid_walk(['n','s','n','s','n','s','n','s','n','s']), 'should return True');
# test.expect(not is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return False');
# test.expect(not is_valid_walk(['w']), 'should return False');
# test.expect(not is_valid_walk(['n','n','n','s','n','s','n','s','n','s']), 'should return False');