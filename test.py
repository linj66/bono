import csv

with open("data/session_20240205_211242_v3.csv", newline='') as csv_data:
    data = list(csv.reader(csv_data))
    print(data)