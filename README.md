# Travel in Viet Nam

+ **Content:** A website where users can search for information about tourist destinations in Vietnam and share their travel experiences.

+ **Development Period:** 1 month

+ **Purpose:** To improve web development skills.

<div align="center">
  <img width="472" alt="Ảnh màn hình 2024-08-27 lúc 21 35 19" src="https://github.com/user-attachments/assets/064a09b3-3253-44a5-b848-60541fca1a42">
</div>


## Build Notes
### Frontend

To run the frontend, follow these steps:
``` bash

# 1. Install dependencies:

    npm install

# 2. Start the development server:

    npm start

```
This will start the frontend development server and you can access the application in your browser.

### Backend

To run the backend, follow these steps: 
``` bash

# 1. Run sql query "CREATE DATABASE TravelinV" in your database

# 2. Install Sequelize CLI globally:

    npm install -g sequelize-cli

# 3. Run migrations to set up the database:

    sequelize db:migrate

# 4. Start the backend server:

    nodemon index.js

```
This will start the backend server, and it will be accessible for API requests.

## Detail
+ Frontend: ReactJS, Material.
+ Backend: ExpressJS.
+ Database: Firebase, MySQL.
+ API: Maps Javascript, Travel Advisor, Cloudinary, db-ip, ninjas.

## Feature

+ **Post Articles:** A feature that allows users to post articles about their travel experiences.
<div align="center">
<img width="586" alt="Ảnh màn hình 2024-08-27 lúc 21 34 24" src="https://github.com/user-attachments/assets/00b3e848-f2ab-44df-9a83-bfa762883b05">

<img width="136" alt="Ảnh màn hình 2024-08-27 lúc 21 34 32" src="https://github.com/user-attachments/assets/58135f70-2652-4498-82d2-a393c5659149">
</div>
<div align="center">
<img width="725" alt="Ảnh màn hình 2024-08-27 lúc 21 38 51" src="https://github.com/user-attachments/assets/b2ab78d2-6dd9-4319-bbec-82980b61d57a">
</div>

+ **Interaction:** Users can like, comment on, and archive other people's posts.


<img align="center" width="966" alt="Ảnh màn hình 2024-08-27 lúc 21 40 02" src="https://github.com/user-attachments/assets/2ef9756f-85f0-4261-a667-8bc3895136ff">



+ **Map:** Provides users with information about nearby restaurants, hotels, and notable places.

<img width="829" alt="Ảnh màn hình 2024-08-27 lúc 21 43 01" src="https://github.com/user-attachments/assets/5ad7afba-77d2-4246-b698-d980fc5a7bad">

**If the user does not grant permission to use their location in the browser, the system will use two APIs, db-ip and ninjas, to determine the user's approximate location based on their IP address**.

```javascript
const getLocationByCityName = async (name) => {
    try {
      const res = await axios.get(
        `https://api.api-ninjas.com/v1/city?name=${name}`,
        {
          headers: {
            "X-Api-Key": "sycEOmug3GpUajiEHTFeUw==pSeXtHtQGiOYhBHS",
            "Content-Type": "application/json",
          },
        }
      );

      setCoordinates({ lat: res.data[0].latitude, lng: res.data[0].longitude });
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  const getLocationByIP = async () => {
    try {
      const response = await axios.get("https://api.db-ip.com/v2/free/self");
      getLocationByCityName(response.data.city);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      },
      (error) => {
       getLocationByIP();
      }
    );
  }, []);

```

## Difficulties

+ **Challenges:**
    + The difficulty was in calling the API. Since I used a free API, there were many limitations on the number of requests, which affected the progress of the work.

+ **Solution:**
    + I used `redux-persist` to store data from Redux into local storage, reducing the number of daily data requests. When the request limit was reached, the project could still progress by using the previously stored data in local storage.

```bash
# How to install redux-persist

npm install redux-persist

```

```javascript
// ./redux/store.js
// Set up "redux-persist" with redux

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist"; // import "redux-persist"
import { placesReducers } from "./reducers/places.reducers";
import { weatherReducers } from "./reducers/weather.reducer";

const rootReducer = combineReducers({places: placesReducers, weather: weatherReducers});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer, // add 
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export const persistor = persistStore(store); // add 

```

```javascript
// index.js

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store, { persistor } from "./redux/store"; // add
import { PersistGate } from "redux-persist/integration/react"; // add
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> // add
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

```


## Demo
[This is video demo.](https://drive.google.com/file/d/1cwMPK0p0rKJXeuGM1jNz7HcWEmxgA-3f/view?resourcekey)



