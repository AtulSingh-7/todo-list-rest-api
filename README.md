# **To-Do List REST API**

This is a simple **REST API** built using **Node.js** and **Express.js** to manage a to-do list. Tasks are stored in a **JSON file** for simplicity.

---

## 🚀 **Features**

- **Create a Task**: Add a new task with title and description.
- **Get All Tasks**: Retrieve all tasks.
- **Get Task by ID**: Fetch a single task using its ID.
- **Update Task Status**: Change the status of a task (`pending`, `in-progress`, `completed`).
- **Delete a Task**: Remove a task by its ID.

---

## 📂 **Project Structure**

```Plaintext
todo-api/
│
├── data/
│   └── tasks.json          # JSON file for storing tasks
├── routes/
│   └── tasks.js            # API routes for task management
├── app.js                  # Main server file
└── README.md               # Project documentation
```





## 🛠️ **Technologies Used**

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for building REST APIs.
- **uuid**: For generating unique IDs.
- **body-parser**: To parse JSON request bodies.

---

## 💻 **Setup Instructions**

### **1. Prerequisites**
Ensure **Node.js** is installed on your machine. Download it here: [Node.js Official Website](https://nodejs.org/).

---

### **2. Installation**

Clone the repository:

```bash
git clone https://github.com/yourusername/todo-api.git
cd todo-api
```

Install dependencies:
```bash
npm install
```
### **3. Run the Server**

```bash
node app.js
```

The API will be running at:
```bash
http://localhost:3000
```

## 🔗 **API ENDPOINTS**

## 🔗 **API Endpoints**

| **Method** | **Endpoint**     | **Description**                  | **Request Body**                 |
|------------|------------------|----------------------------------|---------------------------------|
| **POST**   | `/tasks`         | Create a new task                | `{ "title": "Task", "description": "Details" }` |
| **GET**    | `/tasks`         | Fetch all tasks                  | None                            |
| **GET**    | `/tasks/:id`     | Fetch a single task by ID        | None                            |
| **PUT**    | `/tasks/:id`     | Update task status               | `{ "status": "completed" }`     |
| **DELETE** | `/tasks/:id`     | Delete a task by ID              | None                            |


## 📝 **Example Requests**

### **1. Create a Task**

**Request:**

```http
POST /tasks
Content-Type: application/json

{
    "title": "Finish Node.js Project",
    "description": "Complete the backend task using JSON file"
}
```


Response: 
```json
{
    "id": "unique-task-id",
    "title": "Finish Node.js Project",
    "description": "Complete the backend task using JSON file",
    "status": "pending"
}
```

### **2. Fetch All Tasks**

**Request:**

```http
GET /tasks

```


Response: 
```json
[
    {
        "id": "unique-task-id",
        "title": "Finish Node.js Project",
        "description": "Complete the backend task using JSON file",
        "status": "pending"
    }
]

```

### **3. Update Task Status**

**Request:**

```http
PUT /tasks/:id
Content-Type: application/json

{
    "status": "completed"
}

```


Response: 
```json
{
    "id": "unique-task-id",
    "title": "Finish Node.js Project",
    "description": "Complete the backend task using JSON file",
    "status": "completed"
}

```
### **4. Delete a Task**

**Request:**

```http
DELETE /tasks/:id

```


Response: 
```json
{ "message": "Task deleted successfully" }

```

## 👨‍💻 ** Author**
Developed by Atul Singh.




