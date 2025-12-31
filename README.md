##VIAHAUS

ViaHaus is a full-stack accommodation listing web application built using Node.js, Express.js, MongoDB, and EJS.

The platform allows users to browse, create, and manage accommodation listings with images and location details.


## Features

- **User Authentication**: Secure user registration and login using Passport.js
- **Property Listings**: Create, read, update, and delete property listings
- **Image Upload**: Cloudinary integration for storing listing images
- **Reviews System**: Users can leave reviews and ratings for properties
- **Search Functionality**: Search for properties by location or other criteria
- **Interactive Maps**: Mapbox integration for displaying property locations
- **Session Management**: Persistent sessions using MongoDB session store
- **Authorization**: Owner-based access control for editing and deleting listings

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Authentication**: Passport.js with Local Strategy
- **Session Store**: connect-mongo
- **Templating**: EJS with ejs-mate
- **File Upload**: Multer with Cloudinary storage
- **Validation**: Joi
- **Maps**: Mapbox SDK
- **Styling**: Custom CSS

## Prerequisites

- Node.js (v22.18.0)
- MongoDB Atlas account (or local MongoDB instance)
- Cloudinary account
- Mapbox account (optional, for map features)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ViahausProject
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
ATLAS_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAPBOX_TOKEN=your_mapbox_access_token (optional)
NODE_ENV=development
```

4. Start the server:
```bash
node app.js
```

The server will start on `http://localhost:8080/listings`

## Project Structure

```
ViahausProject/
├── app.js                 # Main application entry point
├── cloudConfig.js         # Cloudinary configuration
├── Schema.js              # Joi validation schemas
├── middleware.js          # Custom middleware functions
├── controllers/           # Route controllers
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── models/                # Mongoose models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/                # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/                 # EJS templates
│   ├── listings/
│   ├── users/
│   └── includes/
├── public/                # Static assets
│   ├── css/
│   └── js/
└── utils/                 # Utility functions
    ├── ExpressError.js
    └── wrapAsync.js
```

## API Routes

### User Routes
- `GET /login` - Login page
- `POST /login` - User login
- `GET /signup` - Signup page
- `POST /signup` - User registration
- `POST /logout` - User logout

### Listing Routes
- `GET /listings` - View all listings
- `GET /listings/new` - Create new listing form (requires authentication)
- `POST /listings` - Create new listing (requires authentication)
- `GET /listings/:id` - View single listing
- `GET /listings/:id/edit` - Edit listing form (requires owner authentication)
- `PUT /listings/:id` - Update listing (requires owner authentication)
- `DELETE /listings/:id` - Delete listing (requires owner authentication)
- `GET /listings/search` - Search listings

### Review Routes
- `POST /listings/:id/reviews` - Create review (requires authentication)
- `DELETE /listings/:id/reviews/:reviewId` - Delete review (requires author authentication)

## Features in Detail

### Authentication & Authorization
- User registration and login with password hashing
- Session-based authentication
- Protected routes for authenticated users
- Owner-based authorization for listing modifications
- Review author verification for review deletion

### Listings
- Full CRUD operations for property listings
- Image upload with Cloudinary integration
- Location-based search
- Geographic coordinates storage for map integration
- Filter support for property types

### Reviews
- Users can leave reviews and ratings
- Reviews are associated with listings
- Only review authors can delete their reviews
- Automatic cleanup when listings are deleted

## Environment Variables

Make sure to set up the following environment variables in your `.env` file:

- `ATLAS_URL`: MongoDB Atlas connection string
- `SECRET`: Secret key for session encryption
- `CLOUD_NAME`: Cloudinary cloud name
- `CLOUD_API_KEY`: Cloudinary API key
- `CLOUD_API_SECRET`: Cloudinary API secret
- `MAPBOX_TOKEN`: Mapbox access token
- `NODE_ENV`: Environment mode (development/production)

## Development

The application uses:
- Express.js for routing and middleware
- Mongoose for MongoDB object modeling
- Passport.js for authentication
- EJS for server-side rendering
- Joi for input validation
- Multer for file uploads
- Cloudinary for cloud storage

## Error Handling

The application includes custom error handling:
- 404 errors for non-existent routes
- 400 errors for validation failures
- 500 errors for server issues
- Custom error pages with user-friendly messages

## Security Features

- Password hashing with passport-local-mongoose
- Session management with secure cookies
- CSRF protection considerations
- Input validation with Joi schemas
- Authorization checks for protected routes




---

For questions or issues, please open an issue on the repository.

