def likes(names):
  if len(names) == 0:
    return 'no one likes this'
  if len(names) == 1:
    return '{} likes this'.format(names[0])
  if len(names) == 2:
    return '{} and {} like this'.format(names[0], names[1])
  if len(names) == 3:
    return '{}, {} and {} like this'.format(names[0], names[1], names[2])
  if len(names) > 3:
    name_1,name_2, *rest = names
    return '{}, {} and {} others like this'.format(name_1, name_2, len(rest))

