# Car-website

### **Stack: MySQL, Python, Node.js, React, Express.js**

Thank you for visiting this repository. In this project, I’ve used two different datasets from [Kaggle.](https://www.kaggle.com/) One of the datasets contain details of over twenty thousand used vehicles for sale called [usa_cars_datasets](https://www.kaggle.com/datasets/doaaalsenani/usa-cers-dataset?rvi=1) (Refer to the SQL table below for column details) However, I couldn’t find a dataset with both, car details and images. Therefore, I downloaded this image folder from [here.](https://www.kaggle.com/datasets/prondeau/the-car-connection-picture-dataset?rvi=1) Therefore, you won’t see the details of the vehicle matching the vehicle you see in pictures. Also, I limited the application to use only 210 products for better latency and to save storage as it’s only a personal development project to emphasize my skills in MySQL, RDBMS and Python. I’ve previously made some projects using the MERN stack. Such as, [Comicdex](https://www.youtube.com/watch?v=iDOhSUJ2KJM) so I won’t be elaborating on the JavaScript part of this project in this readme portion. However, please reach out to my email(shahisharedohy@gmail.com) if you’d like to learn more on how I used Node.js, express.js and React in this application. I would be more than happy to explain. 

## Setting up the database

These are the steps I took to set up my SQL database:

**Tools used: Python, MySQL Workbench, VS code, Mac Terminal**

1. Create a table in my local database with the help of MySQL Workbench(all operations were implemented by using SQL commands. GUI wasn’t used) and import the downloaded `usa_cars_datasets.csv` file. 

![usa_cars_datasets](https://github.com/IshaRedohy/Used_Car_Website/blob/main/assets/details.png)

2. The used_car_datasets was downloaded as a .csv file. So, I only had to import it in a table in my database. However, the images were downloaded as a regular folder. In order to use it in my SQL database, I needed to convert all the images in a single .csv file and then load it in a SQL table, which was accomplished via Python libraries **os, base64 and mysql.connector.** At First, I encoded the **.jpeg/.jpg** images using **base64.** So that, I could use the images as a **BLOB** object in the database. Please refer to [toSQL.py](https://github.com/IshaRedohy/Used_Car_Website/blob/main/Transform_images_csv/toSQL.py) for the entire process.

![car_images](https://github.com/IshaRedohy/Used_Car_Website/blob/main/assets/images.png)

3. Now that both tables were created and filled with values in my local database, I needed to establish a relation between these tables. I decided to make `car_id` as the primary key of both tables first. Then I decided to make `car_images.car_id` the **foreign key** that references the `usa_cars_datasets(car_id)` table. Notice the **ER diagram** below for further clarifications.

![Foreign key](https://github.com/IshaRedohy/Used_Car_Website/blob/main/assets/ERD.png) ![Foreign_key](https://github.com/IshaRedohy/Used_Car_Website/blob/main/assets/Foreign.png)

## Decoding the base64 encryption into images in my backend.

1. In my [routes/Products.js](https://github.com/IshaRedohy/Used_Car_Website/blob/main/server/routes/Products.js) file, I decoded the BLOB objects from the database into .jpeg file using the `sharp` module. Refer the file for further clarifications 
2. I stored the converted jpeg files into the [Images](https://github.com/IshaRedohy/Used_Car_Website/tree/main/server/routes/images) folder and made the files in the directory publicly accessible static files to use them in the client portion of the application. 

The later steps were simple. I just had to make proper routing in the server side using the `express.Router()` module and connect to the SQL database. I used `axios` in the client side to gather data from the server and used `react-router-dom` for routing through the pages in the browser. 

Lastly, I would like to apologize as you might find the UI disappointing. I didn’t put much effort in the UI here. I simply used Bootstrap and couple of lines of CSS to make the website visually acceptable. However, you can visit these projects of mine to judge my designing skills. 