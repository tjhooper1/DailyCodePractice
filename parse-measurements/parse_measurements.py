def parse_measurements(measurements):
    parsed_measures = []
    for measurement in measurements:
        singleMeasure = measurement.split(" ")
        if singleMeasure[0].isdigit():
            singleMeasure[0] = int(singleMeasure[0])
        else:
            singleMeasure[0] = float(singleMeasure[0])
        parsed_measures.append(tuple(singleMeasure))
    return parsed_measures
    

print(parse_measurements(["2 ft", "5 ft", "8.5 meters"])) # [(2, 'ft'), (5, 'ft'), (8.5, 'meters')]
print(parse_measurements(["5 ft", "3 ft", "8.5 meters"])) # [(5, 'ft'), (3, 'ft'), (8.5, 'meters')]