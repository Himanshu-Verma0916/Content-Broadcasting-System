## Content Broadcasting System (Backend)

Backend technical assignment for Backend Developer role.

## Overview

This project is a role-based Content Broadcasting System where:

- Teachers upload educational content
- Admin (Principal) reviews and approves/rejects content
- Students access approved content through a public broadcasting API
- Approved content rotates dynamically based on scheduling logic
---

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- Multer (File Uploads)
- Helmet (Security Headers)
- Express Rate Limiter
- CORS

---

## Features

### Authentication & RBAC
- JWT-based authentication
- Role-based access control:
  - Teacher
  - Admin
  - Student/Public Access

---

## Teacher Features

Teacher can:

- Register/Login
- Upload content
- View uploaded content
- Define:
  - Title
  - Subject
  - Description
  - Start Time
  - End Time
  - Rotation Duration
  - Rotation Order
  - File Upload

Content initially enters:

pending state

---

## Admin Features

Admin can:

- View pending content
- Approve content
- Reject content with reason
- View all content
- Filter by status

Content lifecycle:

uploaded → pending → approved / rejected

---

## Public Broadcasting API

Students can access:

GET /api/content/live/:teacherId

Optional subject filter:

GET /api/content/live/:teacherId?subject=Maths

Returns:

- Only approved content
- Only active scheduled content
- Rotating content based on duration

If no live content:

```json
{
 "message":"No content available"
}
```

---

## Scheduling / Rotation Logic

Each subject supports rotating content display.

Example:

Content A -> 5 mins  
Content B -> 5 mins  
Content C -> 5 mins

Loop continues using:

(Current Time / Duration) % Number of Contents

This determines active content dynamically without cron jobs.

---

## Project Structure

```bash
server/
│
├── config/
├── controllers/
│   ├── userController.js
│   ├── adminController.js
│   └── contentController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── roleAuth.js
│   └── uploadMiddleware.js
│
├── models/
│   ├── userModel.js
│   └── contentModel.js
│
├── routes/
│   ├── userRoutes.js
│   ├── adminRoutes.js
│   └── contentRoutes.js
│
└── index.js
```

---

## API Endpoints

### Auth

POST /api/user/register

POST /api/user/login

GET /api/user/profile


---

### Teacher

POST /api/content/upload

GET /api/content/my-content


---

### Admin

GET /api/admin/pending

PUT /api/admin/approve/:id

PUT /api/admin/reject/:id

GET /api/admin/all


---

### Public

GET /api/content/live/:teacherId


---

## Installation

Clone repository

```bash
git clone <repo-url>
cd project
```

Install dependencies

```bash
npm install
```

Create .env

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Run server

```bash
npm run dev
```

---

## Security Features

Implemented:

- JWT route protection
- Role authorization
- Helmet headers
- Rate limiting
- File type validation
- File size restriction

---

## Assumptions

- Only approved content can go live
- Teacher defines valid scheduling window
- Admin is seeded manually (admin signup restricted)
- Rotation duration assumed uniform per subject in current implementation
- Public live content endpoint does not require authentication

---

## Limitations

Current implementation limitations:

- Local disk storage used (Cloudinary/S3 not enabled by default)
- Rotation currently assumes same duration across active content set
- No Redis caching implemented
- No queue-based processing
- No analytics module included
- Pagination not implemented
- HTTPS expected at deployment layer (SSL termination)

---

## Optional Improvements (Future Scope)

- Redis cache for /live API
- Cloudinary/S3 uploads
- Subject analytics
- Pagination and filtering
- Queue-driven scheduling
- Different duration per content item

---

## Edge Cases Handled

- No content available
- Approved but inactive scheduled content
- Invalid subject returns empty response
- Duplicate user prevention
- Invalid upload type blocked
- Oversized upload blocked

---

## Notes

This implementation prioritizes:

- Clean architecture
- Real-world backend logic
- Scalability-friendly structure
- Assignment correctness

---

## Author

Himanshu Verma
