import pandas as pd

from faker import Faker


fake = Faker()

data = {
    'full-name': [],
    'numberPhone': [],
    'gender': [],
    'email': [],
    'password': [],
}

for i in range(1, 101):
    data['full-name'].append(fake.name())
    data['numberPhone'].append(fake.phone_number())
    data['gender'].append(fake.random_element(elements=('Male', 'Female')))
    data['email'].append(fake.email())
    data['password'].append(fake.password())
    print("row done", i)

df = pd.DataFrame(data)

df.to_json('input.json', orient='records', indent=2)


print(df.head())

