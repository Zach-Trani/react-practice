# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Scope: Practice API requests in React

Goal: Make an HTTP Request and Response using the Unsplash API
Req: Give me some images related to the term 'cars'
Res: Here is an array of objects that each have info about the image

Note: 
React doesn't have the tools to make HTTP requests, React shows content and handles user events.
To make requests: use a JS library called axios
npm install axios


## 1. Overview HTTP reqs + HTTP res
  Go to browser tools > Network tab > click one of the HTTP req's (localhost) > scroll through Headers, Preview, Response


### req                         
Status Line: Get: (url)

Headers:   authentication 

Body:

### res

Status Line: 200 OK

Headers: content length+type 

Body: key:value data



req to an API -->
some time passes -->
console.log(res)
  
## 2. understand unsplash API
  unsplash.com/developers                --> Create the application & receive an access key + secret key 

### (1) Need the root URL
https://unsplash.com/documentation     
--> Go to Schema > Location > The API is available at https://api.unsplash.com/ (this is the root URL). 
Responses are sent as JSON.

### (2) Need the Header around authentication
--> Go to Authorization > Public Authorization > To authenticate requests, pass application's key via the HTTP Authorization header:
Authorization: Client-ID YOUR_ACCESS_KEY

### (3) GET req base URL + query
--> Go to Search > Search Photos > Make a GET req to /search/photos + include the query parameter

HTTP Request
GET https://api.unsplash.com/search/photos?query=oceans (root URL + base URL + query)
Authorization: Client-ID abc123 (authentication header)

Response
Here is an array of objects each having info about an image.
  
## 3. write non-React code to make image-searching req
### Axios Library Outline
first parameter: root url + GET req base url (step 1+2)


second parameter: object with matching header & parameter structure (step 2+3)

```
axios.get('https://api.unsplash.com/search/photos', {
  headers: {
    Authorization: 'Client-ID YOUR_ACCESS_KEY'
  },
  params: {
    query: 'cars'
  }
})
```

## 4. review async code in JS
### Console logging the API response

Use async/await to tell JS to wait for the request to finish before moving on. Hardcoded a query parameter for testing, will replace later with a user submission.

```
import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID YOUR_ACCESS_KEY'
        },
        params: {
            query: 'cars'
        }
    })

    console.log(response)

    return response;
}

export default searchImages;
```

### index.js
```
import searchImages from './api';

searchImages();
```

### Above is the first console log functionality test

Temporarily call the API component in index.js since it is already rendering. Will move API component somewhere else later for when a user enters a submission.

## 5. finish up the req-making code
* Can move from console logging res to rendering the res somewhere

Where do we do data fetching?

Where do we define state?

How do we share info between components?

---
### Parent Component = App.js
### Child Components = SearchBar.js, ImageList.js

---

### This data flow needs to happen:
* term (SearchBar.js) --> searchImages() --> images --> ImageList.js 

### Problem:
* sibling components cannot directly communicate.

### Solution:
* To share info between sibling components, we have to involve the parent components (use prop to communicate from parent to child).
* App.js can send the list of images down to ImageList using props!

### Sub-Problem:
* When user presses enter key we need to move search term up to the App


### Solution:
* We will create a way to pass a term from a child component to a parent component (see iPad Goodnotes app)


---


