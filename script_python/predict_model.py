import pandas as pd
import random
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import StandardScaler

# Generate sample data
crime_data = [[random.uniform(36.7, 36.9), random.uniform(10.0, 10.4), random.randint(2, 4)] for _ in range(100)]

# Convert the sample data to a DataFrame
crime_df = pd.DataFrame(crime_data, columns=['latitude', 'longitude', 'crime_occurrence'])

# Extract features and target variable
X = crime_df[['latitude', 'longitude']]
y = crime_df['crime_occurrence']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Create a linear regression model
model = LinearRegression()

# Train the model
model.fit(X_train_scaled, y_train)

# Make predictions on the test set
predictions = model.predict(X_test_scaled)

# Evaluate the model
mse = mean_squared_error(y_test, predictions)
r2 = r2_score(y_test, predictions)

print(f'Mean Squared Error: {mse}')
print(f'R-squared: {r2}')

# Now, you can use the trained model to make predictions on new data
# For illustration purposes, let's assume you have a new DataFrame named 'new_data'
# Replace it with your actual new data
new_data = pd.DataFrame([[random.uniform(36.7, 36.9), random.uniform(10.0, 10.4)]], columns=['latitude', 'longitude'])
new_data_scaled = scaler.transform(new_data)
new_predictions = model.predict(new_data_scaled)

# Display the predicted crime occurrences for the new data
print('Predicted Crime Occurrences for New Data:')
print(new_predictions)

# Store the predictions in an array
predicted_array = model.predict(new_data_scaled)
print('Array of Predicted Crime Occurrences:')
print(predicted_array)
