import pandas as pd
import json


with open('stolen.json') as json_file:
    data = json.load(json_file)

df = pd.json_normalize(data)

type_counts = df['type'].value_counts()

result_list = []
for type_, count in type_counts.items():
    result_list.append({
        'id': str(type_),
        'label': f'Type {type_}',
        'value': int(count),
        'color': f'hsl({hash(type_) % 360}, 70%, 50%)'
    })


with open('nivo_pie_chart_data.json', 'w') as json_file:
    json.dump(result_list, json_file, indent=2)


