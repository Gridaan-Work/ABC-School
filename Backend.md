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

## 🎓 Alumni API

### Endpoints Overview

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/alumni` | Get all alumni records | Public |
| POST | `/api/alumni` | Create a new alumni record | Admin |
| PUT | `/api/alumni/:id` | Update an alumni record | Admin |
| DELETE | `/api/alumni/:id` | Delete an alumni record | Admin |

> **Note:** Create and Update requests with file uploads must use `multipart/form-data`.

---

### 1. Get All Alumni

**URL:** `GET /api/alumni`

**Success Response:**

```json
{
  "success": true,
  "data": [
    {
      "_id": "664abc123...",
      "name": "S Sadhiksh Velamuri",
      "passingYear": 2024,
      "school": "The Kalyani school",
      "college": "Narsee Monjee Institute of Management Studies, Mumbai",
      "major": "Business Management",
      "image": "uploads/alumni-images/1234567890.jpg",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

---

### 2. Create a New Alumni

**URL:** `POST /api/alumni`

**Body:** `form-data`

| Key | Value | Type |
|-----|-------|------|
| `name` | S Sadhiksh Velamuri | Text |
| `passingYear` | 2024 | Text |
| `school` | The Kalyani school | Text |
| `college` | Narsee Monjee Institute of Management Studies, Mumbai | Text |
| `major` | Business Management | Text |
| `image` | *(select image file)* | File |

> **Supported image formats:** JPEG, JPG, PNG, WEBP — Max size: 2MB

**Success Response:**

```json
{
  "success": true,
  "message": "Alumni created successfully",
  "data": {
    "_id": "664abc123...",
    "name": "S Sadhiksh Velamuri",
    "passingYear": 2024,
    "school": "The Kalyani school",
    "college": "Narsee Monjee Institute of Management Studies, Mumbai",
    "major": "Business Management",
    "image": "uploads/alumni-images/1234567890.jpg"
  }
}
```

---

### 3. Update an Alumni

**URL:** `PUT /api/alumni/:id`

**Body:** `form-data` (Same fields as Create, all optional)

**Success Response:**

```json
{
  "success": true,
  "message": "Alumni updated successfully",
  "data": { ... }
}
```

---

### 4. Delete an Alumni

**URL:** `DELETE /api/alumni/:id`

**Success Response:**

```json
{
  "success": true,
  "message": "Alumni deleted successfully"
}
```

---

## 📅 Recent Activities API

### Endpoints Overview

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/activities` | Get all recent activities | Public |
| POST | `/api/activities` | Create a new activity | Admin |
| PUT | `/api/activities/:id` | Update an activity | Admin |
| DELETE | `/api/activities/:id` | Delete an activity | Admin |

> **Note:** Create and Update requests with file uploads must use `multipart/form-data`.

---

### 1. Get All Activities

**URL:** `GET /api/activities`

**Success Response:**

```json
{
  "success": true,
  "data": [
    {
      "_id": "664cde123...",
      "title": "Founder's Day Celebration 2024",
      "image": "uploads/activity-images/1234567890.jpg",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

---

### 2. Create a New Activity

**URL:** `POST /api/activities`

**Body:** `form-data`

| Key | Value | Type |
|-----|-------|------|
| `title` | Founder's Day Celebration 2024 | Text |
| `image` | *(select image file)* | File |

> **Supported image formats:** JPEG, JPG, PNG, WEBP — Max size: 2MB

**Success Response:**

```json
{
  "success": true,
  "message": "Activity created successfully",
  "data": { ... }
}
```

---

### 3. Update an Activity

**URL:** `PUT /api/activities/:id`

**Body:** `form-data` (Same fields as Create, all optional)

**Success Response:**

```json
{
  "success": true,
  "message": "Activity updated successfully",
  "data": { ... }
}
```

---

### 4. Delete an Activity

**URL:** `DELETE /api/activities/:id`

**Success Response:**

```json
{
  "success": true,
  "message": "Activity deleted successfully"
}
```

---

## 📰 Latest Updates API

### Endpoints Overview

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/updates` | Get all latest updates | Public |
| POST | `/api/updates` | Create a new update | Admin |
| PUT | `/api/updates/:id` | Edit an existing update | Admin |
| DELETE | `/api/updates/:id` | Delete an update | Admin |

> **Note:** Create and Update requests with file uploads must use `multipart/form-data`.

---

### 1. Get All Updates

**URL:** `GET /api/updates`

**Success Response:**

```json
{
  "success": true,
  "data": [
    {
      "_id": "664cde123...",
      "title": "Honoring the Visionary - Dr. B.R. Ambedkar Jayanti",
      "description": "Special assembly of grade XII A...",
      "link": "https://instagram.com/p/...",
      "image": "uploads/update-images/1234567890.jpg",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

---

### 2. Create a New Update

**URL:** `POST /api/updates`

**Body:** `form-data`

| Key | Value | Type |
|-----|-------|------|
| `title` | Honoring the Visionary... | Text |
| `description` | Special assembly... | Text |
| `link` | https://instagram.com/p/... | Text |
| `image` | *(select image file)* | File |

> **Supported image formats:** JPEG, JPG, PNG, WEBP — Max size: 2MB

**Success Response:**

```json
{
  "success": true,
  "message": "Latest Update created successfully",
  "data": { ... }
}
```

---

### 3. Update a Latest Update

**URL:** `PUT /api/updates/:id`

**Body:** `form-data` (Same fields as Create, all optional)

**Success Response:**

```json
{
  "success": true,
  "message": "Latest Update updated successfully",
  "data": { ... }
}
```

---

### 4. Delete a Latest Update

**URL:** `DELETE /api/updates/:id`

**Success Response:**

```json
{
  "success": true,
  "message": "Latest Update deleted successfully"
}
```

---

## 🗄️ Database Info

* Database: `schooldata`
* Collections: `enquiries`, `careers`, `alumnis`, `activities`, `latestupdates`
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

// Alumni
db.alumnis.find().pretty()

// Activities
db.activities.find().pretty()

// Latest Updates
db.latestupdates.find().pretty()
 
```
