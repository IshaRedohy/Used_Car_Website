# This python program was run solely to add the images from the "images.csv" file to my SQL database. Ignore the config file

import os
import mysql.connector
import base64

# Function to encode an image to base64
def encode_image_to_base64(image_path):
    with open(image_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
        return encoded_string.decode('utf-8')

# Directory containing your images
image_directory = '/Users/shahisharedohy/Desktop/my_aws/cars/car_images'

# MySQL connection configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': '',
}

# Connect to MySQL
connection = mysql.connector.connect(**db_config)
cursor = connection.cursor()

# Create table if not exists
create_table_query = '''
CREATE TABLE IF NOT EXISTS car_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_path VARCHAR(255),
    image_data LONGBLOB
);
'''
cursor.execute(create_table_query)
connection.commit()

# Insert images into MySQL
for filename in os.listdir(image_directory):
    if filename.endswith(('.jpg', '.png', '.jpeg')):
        image_path = os.path.join(image_directory, filename)
        base64_encoding = encode_image_to_base64(image_path)

        # Insert image path and data into the database
        insert_query = '''
        INSERT INTO car_images (image_path, image_data)
        VALUES (%s, %s);
        '''
        with open(image_path, 'rb') as image_file:
            image_data = image_file.read()
            cursor.execute(insert_query, (image_path, image_data))

# Commit changes and close connection
connection.commit()
cursor.close()
connection.close()

print('Images inserted into MySQL database.')