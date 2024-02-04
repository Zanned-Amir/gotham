import pandas as pd
import random
from geopy.geocoders import Nominatim
from faker import Faker


fake = Faker()


def generate_random_datetime(start_date, end_date):
    return pd.to_datetime(random.uniform(start_date.timestamp(), end_date.timestamp()), unit='s')


def generate_random_imei():
    return ''.join([str(random.randint(0, 9)) for _ in range(15)])


def get_location_name(latitude, longitude):
    geolocator = Nominatim(user_agent="reverse_geocode_example")
    location = geolocator.reverse((latitude, longitude), language='en')
    return location.address if location else None

data = {
    'imei': [],
    'full-name': [],
    'numberPhone': [],
    'gender': [],
    'email': [],
    'password': [],
    'location': [],
    'dateofcrime': [],
    'dateofinput': [],
    'Latitud': [],
    'Longitude': [],
    'type': []
}

for i in range(1, 101):
    latitude = random.uniform(36.5, 37.5)
    longitude = random.uniform(9.0, 10.0)

    location_name = get_location_name(latitude, longitude)

    dateofinput = generate_random_datetime(pd.to_datetime('2023-01-01'), pd.to_datetime('2023-12-31'))
    dateofcrime = generate_random_datetime(pd.to_datetime('2023-01-01'), pd.to_datetime('2024-01-31'))

    data['full-name'].append(fake.name())
    data['numberPhone'].append(fake.phone_number())
    data['gender'].append(fake.random_element(elements=('Male', 'Female')))
    data['email'].append(fake.email())
    data['password'].append(fake.password())
    data['location'].append(location_name)
    data['dateofinput'].append(dateofinput.strftime('%y/%m/%d %H:%M:%S'))
    data['dateofcrime'].append(dateofcrime.strftime('%y/%m/%d %H:%M:%S'))
    data['Latitud'].append(latitude)
    data['Longitude'].append(longitude)
    data['type'].append(random.randint(1, 4))
    data['imei'].append(generate_random_imei())
    print("row done", i)


df = pd.DataFrame(data)


df.to_json('stolen.json', orient='records', indent=2)


print(df.head())

