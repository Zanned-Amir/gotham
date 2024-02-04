import pandas as pd
import json

df = pd.read_json('stolen.json', lines=True)

df['dateofcrime'] = pd.to_datetime(df['dateofcrime'])

df['weekday'] = df['dateofcrime'].dt.weekday
df['month'] = df['dateofcrime'].dt.month
df['hour'] = df['dateofcrime'].dt.hour


all_weekdays = pd.DataFrame({'weekday': range(7)})
all_months = pd.DataFrame({'month': range(1, 13)})
all_hours = pd.DataFrame({'hour': range(24)})


weekday_peaks = all_weekdays.merge(df.groupby('weekday').size().reset_index(name='count'), how='left', on='weekday').fillna(0).astype({'count': int})
month_peaks = all_months.merge(df.groupby('month').size().reset_index(name='count'), how='left', on='month').fillna(0).astype({'count': int})
hour_peaks = all_hours.merge(df.groupby('hour').size().reset_index(name='count'), how='left', on='hour').fillna(0).astype({'count': int})


weekday_list = weekday_peaks.to_dict(orient='records')
month_list = month_peaks.to_dict(orient='records')
hour_list = hour_peaks.to_dict(orient='records')


with open('weekday_peak.json', 'w') as json_file:
    json.dump(weekday_list, json_file, indent=2)

with open('month_peak.json', 'w') as json_file:
    json.dump(month_list, json_file, indent=2)

with open('hour_peak.json', 'w') as json_file:
    json.dump(hour_list, json_file, indent=2)




print(df.head())



