# Backend

## MongoDB Run Guide (Docker)

### 1. Start MongoDB

```bash
docker-compose up -d
```

### 2. Check Running Containers

```bash
docker ps
```

---

## 🚀 Running the Backend Server

### 1. Install dependencies

```bash
npm install
```

### 2. Start server (development)

```bash
npm run dev
```

### 3. Start server (production)

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 📌 Enquiry API

### Endpoint

```
POST /api/enquiry
```

### Description

Creates a new enquiry and stores it in the database.

---

### 🧾 Example Request

**URL:**

```
http://localhost:5000/api/enquiry
```

**Method:**

```
POST
```

**Headers:**

```
Content-Type: application/json
```

**Body:**

```json
{
  "board": "cbse",
  "admissionFor": "i",
  "childName": "Aarav Sharma",
  "dateOfBirth": "2018-06-15",
  "primaryContact": "father",
  "parentName": "Rajesh Sharma",
  "mobileNumber": "9876543210",
  "email": "aarav@example.com",
  "sourceOfEnquiry": "website",
  "motherTongue": "hindi",
  "address": "Delhi",
  "comments": "Interested in admission"
}
```

---

### ✅ Success Response

```json
{
  "success": true,
  "message": "Enquiry submitted successfully",
  "data": {
    "_id": "some_id",
    "board": "cbse",
    "childName": "Aarav Sharma",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
## 💼 Careers API
 
### Endpoints Overview

| GET | `/api/careers` | Get all active vacancies | Public |
| POST | `/api/careers/:vacancyId/apply` | Apply for a vacancy | Public |
| GET | `/api/careers/admin/all` | Get all vacancies (including inactive) | Admin |
| POST | `/api/careers/admin/create` | Create a new vacancy | Admin |
 
> **Note:** All requests with file uploads must use `multipart/form-data` (not `application/json`).
 
---
 
### 1. Get All Active Vacancies
 
**URL:**
 
```
GET /api/careers
```
 
**Headers:**
 
```
Content-Type: application/json
```
 
**Success Response:**
 
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "664abc123...",
      "title": "Software Engineer",
      "description": "We are looking for...",
      "image": "uploads/career-images/1234567890.jpg",
      "isActive": true,
      "postedOn": "2026-05-06T00:00:00.000Z",
      "applications": [],
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```
 
---
 
### 2. Create a New Vacancy (Admin)
 
**URL:**
 
```
POST /api/careers/admin/create
```
 
**Body:** `form-data`
 
| Key | Value | Type |
|-----|-------|------|
| `title` | Software Engineer | Text |
| `description` | We are looking for a skilled developer... | Text |
| `isActive` | true | Text |
| `image` | *(select image file)* | File |
 
> **Supported image formats:** JPEG, JPG, PNG, WEBP — Max size: 2MB
 
**Success Response:**
 
```json
{
  "success": true,
  "message": "Vacancy created",
  "data": {
    "_id": "664abc123...",
    "title": "Software Engineer",
    "description": "We are looking for a skilled developer...",
    "image": "uploads/career-images/1234567890-123.jpg",
    "isActive": true,
    "postedOn": "2026-05-06T00:00:00.000Z",
    "applications": [],
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```
 
---
 
### 3. Apply for a Vacancy
 
**URL:**
 
```
POST /api/careers/:vacancyId/apply
```
 
Replace `:vacancyId` with the `_id` from the vacancy (e.g., `664abc123...`).
 
**Body:** `form-data`
 
| Key | Value | Type |
|-----|-------|------|
| `name` | Rahul Das | Text |
| `email` | rahul@gmail.com | Text |
| `phone` | 9876543210 | Text |
| `specialization` | Full Stack Development | Text |
| `resume` | *(select PDF/DOC/DOCX file)* | File |
 
> **Supported resume formats:** PDF, DOC, DOCX — Max size: 5MB
 
**Success Response:**
 
```json
{
  "success": true,
  "message": "Application submitted",
  "data": {
    "name": "Rahul Das",
    "email": "rahul@gmail.com",
    "phone": "9876543210",
    "specialization": "Full Stack Development",
    "resume": "uploads/resumes/1234567890-456.pdf"
  }
}
```
 
**Error Responses:**
 
```json
{ "success": false, "message": "Vacancy not found" }
{ "success": false, "message": "Vacancy আর active নেই" }
{ "success": false, "message": "name, email, phone, specialization সবগুলো দাও" }
```
 
---
 
```

---

## 🗄️ Database Info

* Database: `schooldata`
* Collection: `enquiries`,`careers`
* Automatically created on first insert

---

## 🔍 Viewing Data in MongoDB

### Using Docker CLI

```bash
docker exec -it mongo-server mongosh -u admin -p password
```

Then:

```js
use schooldata
db.enquiries.find().pretty()

// Careers
db.careers.find().pretty()
 
```
