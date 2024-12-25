# Backend User API Documentation

## Description

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
    "_id": "string"
  }
}
```

#### Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

### Validation Rules

- First name is required and must be at least 3 characters long
- Email is required and must be in valid email format
- Password is required and must be at least 6 characters long
- Last name is optional but if provided must be at least 3 characters long
