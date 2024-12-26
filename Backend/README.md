# Backend User API Documentation

## Register User

Register a user by creating a new user account with provided information.

**HTTP:** `POST`

**Endpoint:** `/users/register`

### Request Body

```json
{
  "fullname": {
    "firstname": "string", // minimum 3 characters
    "lastname": "string" // optional, minimum 3 characters if provided
  },
  "email": "string", // valid email format
  "password": "string" // minimum 6 characters
}
```

### Response

#### Success (201 Created)

```json
{
  "token": "jwt_token_string",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "_id": "string"
  }
}
```

### Validation Rules

- First name is required and must be at least 3 characters long
- Email is required and must be in valid email format
- Password is required and must be at least 6 characters long
- Last name is optional but if provided must be at least 3 characters long

## Login User

Authenticate a user using their email and password, returning a JWT token upon success.

**HTTP:** `POST`

**Endpoint:** `/users/login`

### Request Body

```json
{
  "email": "string", // valid email format
  "password": "string" // minimum 6 characters
}
```

### Response

#### Success (200 OK)

```json
{
  "token": "jwt_token_string",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "_id": "string"
  }
}
```

#### Error (401 Unauthorized)

```json
{
  "message": "Invalid email or password"
}
```

### Validation Rules

- Email is required and must be in valid email format
- Password is required and must be at least 6 characters long

## Get User Profile

Retrieve the currently authenticated user's profile information.

**HTTP:** `GET`

**Endpoint:** `/users/profile`

### Authentication

Requires a valid JWT token in the Authorization headers: `Authorization: Bearer <token>`

### Response

#### Success (200 OK)

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "_id": "string"
}
```

#### Error (401 Unauthorized)

```json
{
  "message": "Unauthorized"
}
```

## Logout User

Invalidate the current user's token and blacklist the token provided in cookie or headers.

**HTTP:** `GET`

**Endpoint:** `/users/logout`

### Authentication

Requires a valid JWT token in the Authorization headers or cookie.

### Response

#### Success (200 OK)

```json
{
  "message": "Logged out successfully"
}
```

#### Error (401 Unauthorized)

```json
{
  "message": "Unauthorized"
}
```

# Captain API Documentation

## Register Captain

Register a new captain account with vehicle information.

**HTTP:** `POST`

**Endpoint:** `/captains/register`

### Request Body

```json
{
  "fullname": {
    "firstname": "string", // minimum 3 characters
    "lastname": "string" // optional
  },
  "email": "string", // valid email format
  "password": "string", // minimum 6 characters
  "vehicle": {
    "color": "string", // minimum 3 characters
    "plate": "string", // minimum 3 characters
    "capacity": "number", // minimum 1
    "vehicleType": "string" // must be "car", "motorcycle", or "auto"
  }
}
```

### Response

#### Success (201 Created)

```json
{
  "token": "jwt_token_string",
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    },
    "_id": "string"
  }
}
```

### Validation Rules

- First name is required and must be at least 3 characters long
- Email is required and must be in valid email format
- Password is required and must be at least 6 characters long
- Vehicle color is required and must be at least 3 characters long
- Vehicle plate number is required and must be at least 3 characters long
- Vehicle capacity is required and must be at least 1
- Vehicle type is required and must be one of: "car", "motorcycle", "auto"
