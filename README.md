# ShopifyBackendChallenge2021
This is my solution for the Shopify Backend Developer Intern Challenge - Summer 2021. It consists of an API server that is supposed to serve as the backend for a simple image repository. This API provides the ability to manage inventory, set prices, and discounts for the images. The API was built using MongoDB, ExpressJS, and NodeJS. To add an image, simply add the image to the images folder and then use the **Add an image** endpoint.


## Installing
1. Clone the repo
2. Navigate to the backend directory and install the NPM packages through `npm install`
3. Start the application using either `npm start` or `nodemon`

## API
The API has 4 endpoints:
- **Add an image**: `POST /image`

Request content example
```json
{
	"Filepath": "toronto.jpg",
	"Price": 10.50,
  	"Discount": 1.00,
	"Quantity": 12
}
```
- **Get all images**: `GET /image`

Response content example
```json
[
    {
        "_id": "5fdd516821166c02a90a3445",
        "Filepath": "toronto.jpg",
        "Price": 3.5,
        "Quantity": 51,
        "Timestamp": "2020-12-19T01:03:36.359Z",
        "__v": 0
    }
]
```
- **View an image**: `GET /image/:id`

- **Update an image**: `PUT /image/:id`

Request content example
```json
{
	"Price": 11.58,
  	"Discount": 1.25,
	"Quantity": 55
}
```
