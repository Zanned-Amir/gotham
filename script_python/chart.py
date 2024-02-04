import pandas as pd
import json

df = pd.read_json('stolen.json')


df['dateofcrime'] = pd.to_datetime(df['dateofcrime'], format='%d/%m/%y %H:%M:%S')


df['day_of_week'] = df['dateofcrime'].dt.day_name()


daily_crime_counts = df.groupby(['day_of_week', 'type']).size().reset_index(name='count')


data_dict = {}


for crime_type in daily_crime_counts['type'].unique():
    crime_data = daily_crime_counts[daily_crime_counts['type'] == crime_type]


    crime_list = crime_data.rename(columns={'day_of_week': 'x', 'count': 'y'}).to_dict(orient='records')


    data_dict[crime_type] = {
        'id': f'type_{crime_type}',
        'color': f'hsl({hash(crime_type) % 360}, 70%, 50%)',
        'data': crime_list
    }


result_list = list(data_dict.values())


with open('daily_crime_counts_nivo.json', 'w') as json_file:
    json.dump(result_list, json_file, indent=2)


print(df.head())






