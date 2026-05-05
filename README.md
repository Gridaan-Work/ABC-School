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
```

---

## 🗄️ Database Info

* Database: `schooldata`
* Collection: `enquiries`
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
```
