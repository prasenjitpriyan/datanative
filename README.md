# 📚 **Course Syllabus**

## **Course Content**

This course builds on the knowledge acquired from the **React Native course**, equipping you with skills to make informed decisions about accessing, storing, retrieving, and presenting data in React Native applications.

### **Course Duration**

🕒 **5 Weeks**

### **Course Overview**

- Learn about **data and databases** in a general sense.
- Explore tools and practices for working with data in **React Native**.

---

## **Weekly Breakdown**

### **Week 1: Introduction to REST APIs**

🔍 Dive into the fundamentals of APIs, focusing on REST architecture and RESTful APIs.

#### **Key Takeaways**

- 🌟 Identify characteristics, benefits, and uses of REST APIs.
- ✅ Create API routes following naming conventions and best practices.
- 🔑 Explain authentication principles and differentiate between authentication and authorization.
- 🔄 Understand the API request lifecycle.
- 🛠️ Use tools for API development like Postman or Insomnia.

#### **Hands-On**

- Create a basic API project.
- Work with various API outputs like JSON and XML.

---

### **Week 2: Interacting with REST APIs in React Native**

📱 Learn how to integrate REST APIs in a React Native app for seamless server communication.

#### **Key Takeaways**

- 📡 Create HTTP requests in React Native.
- 📤 Handle server responses effectively.
- 📊 Process and work with JSON data.

---

### **Week 3: Introduction to Databases and SQL**

🗃️ Discover the world of databases and the Structured Query Language (SQL).

#### **Key Takeaways**

- 🧠 Understand the concept of relational databases and data relationships.
- 💾 Perform CRUD (Create, Read, Update, Delete) operations using SQL.
- 🛠️ Learn database table structures, common data types, and default values.

#### **Hands-On**

- Write SQL statements with commands like `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.
- Build and modify database tables.

---

### **Week 4: Data in React Native**

🔗 Integrate local data storage solutions in React Native using AsyncStorage and SQLite.

#### **Key Takeaways**

- 🗂️ Store and retrieve data using AsyncStorage.
- 🛠️ Use SQLite to perform advanced read and write operations.

#### **Comparison**

| Feature      | AsyncStorage             | SQLite                  |
| ------------ | ------------------------ | ----------------------- |
| **Use Case** | Simple key-value storage | Complex relational data |
| **Example**  | Save user preferences    | Store app data offline  |

---

### **Week 5: Graded Assessment**

📈 **Capstone Project:** Create a fully functional **Little Lemon mobile app**.

#### **Project Goals**

- 📥 Fetch JSON data using a REST API.
- 📂 Store data in SQLite and retrieve it for rendering.
- 🔄 Implement filtering and sorting for improved user experience.

#### **Assessment**

- Demonstrate REST API integration.
- Showcase SQLite data handling.
- Submit the project for peer review and evaluation.

---

## **Final Reflection**

🎓 At the end of this course, reflect on your learning journey and plan the next steps to enhance your skills in React Native development.

---

# 🌐 **HTTP Essentials**

## **Key Components of HTTP Requests and Responses**

### 📨 **HTTP Request Components**

1. **HTTP Version**: Specifies the version of HTTP (e.g., 1.1, 2.0).
2. **URL/Path**: Address of the resource being requested.
3. **HTTP Method**: Action to be performed (e.g., GET, POST, PUT, DELETE).
4. **HTTP Request Headers**: Extra information sent with the request (e.g., cookies, user-agent).
5. **HTTP Body** _(optional)_: Contains data sent to the server (e.g., form data, JSON).

### 📦 **HTTP Response Components**

1. **Status Code**: Indicates the result of the request (e.g., 200 OK, 404 Not Found).
2. **Response Headers**: Additional details about the response (e.g., content type, content length).
3. **Response Body**: The content returned by the server (e.g., HTML, JSON, images).

---

## **Using HTTP Methods in Web Applications**

### 🚀 **1. GET**

- **Purpose**: Retrieve data from the server.
- **Usage**: Fetching webpage content or API data.
- **Example**:

```javascript
fetch('https://api.example.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data))
```

### ✉️ **2. POST**

- **Purpose**: Send data to create a new resource on the server.
- **Usage**: Submitting forms or adding new items.
- **Example**:

```javascript
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'newuser', password: 'password123' })
})
```

### 🛠️ **3. PUT**

- **Purpose**: Completely update an existing resource.
- **Usage**: Overwriting user profile information.
- **Example**:

```javascript
fetch('https://api.example.com/users/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'updateduser', password: 'newpassword' })
})
```

### ✏️ **4. PATCH**

- **Purpose**: Partially update an existing resource.
- **Usage**: Updating specific fields.
- **Example**:

```javascript
fetch('https://api.example.com/users/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'partiallyupdateduser' })
})
```

### ❌ **5. DELETE**

- **Purpose**: Remove a resource from the server.
- **Usage**: Deleting a user account or item.
- **Example**:

```javascript
fetch('https://api.example.com/users/1', { method: 'DELETE' })
```

---

## **HTTP vs HTTPS: What's the Difference?**

| **Feature**    | **HTTP**                           | **HTTPS**                                  |
| -------------- | ---------------------------------- | ------------------------------------------ |
| **Encryption** | ❌ None (plain text)               | ✅ SSL/TLS ensures encrypted communication |
| **Port**       | 80                                 | 443                                        |
| **Security**   | No protection against interception | Secure and private                         |
| **Use Cases**  | Public, non-sensitive content      | Sensitive data like login, banking         |

### 🔒 **Benefits of HTTPS**

1. **Data Integrity**: Prevents data tampering during transmission.
2. **Authentication**: Ensures communication with the legitimate server.
3. **Confidentiality**: Encrypts data to protect sensitive information.

---

## **How Encryption Works in HTTPS**

1. **Secure Handshake**:

   - The server sends its SSL/TLS certificate to the client.
   - The client verifies the certificate.
   - A unique session key is created for the secure session.

2. **Data Encryption**:

   - All data exchanged is encrypted using the session key.

3. **Data Decryption**:
   - Data is decrypted by the recipient using the session key.

### 🌟 **Key Takeaways**

- HTTPS ensures **secure**, **authenticated**, and **encrypted** communication.
- HTTP is suitable only for non-sensitive data transmission.

---

# 🚦 **Range of HTTP Status Codes and Their Meanings**

Understanding HTTP status codes is vital for diagnosing and troubleshooting web application issues. Here’s a detailed breakdown:

---

## **1xx: Informational Responses**

These codes indicate that the request has been received and understood, and further action is needed.

- **100 Continue**: The initial part of the request has been received; the client can continue.
- **101 Switching Protocols**: The server is switching protocols as requested by the client.

---

## **2xx: Successful Responses**

These codes signify that the request was successfully received, understood, and accepted.

- **200 OK**: The request was successful, and the server returned the requested data.
- **201 Created**: The request was successful, and a new resource was created.
- **204 No Content**: The request was successful, but there is no content to return.

---

## **3xx: Redirection Messages**

These codes indicate that further action is needed to complete the request.

- **301 Moved Permanently**: The resource has been permanently moved to a new URL.
- **302 Found**: The resource is temporarily located at a different URL.
- **304 Not Modified**: The resource has not changed; the client can use the cached version.

---

## **4xx: Client Error Responses**

These codes indicate an error caused by the client.

- **400 Bad Request**: The server cannot process the request due to invalid syntax.
- **401 Unauthorized**: Authentication is required but missing or invalid.
- **403 Forbidden**: The server understands the request but refuses to authorize it.
- **404 Not Found**: The requested resource could not be found on the server.

---

## **5xx: Server Error Responses**

These codes indicate that the server failed to fulfill a valid request.

- **500 Internal Server Error**: The server encountered an unexpected condition.
- **502 Bad Gateway**: The server, acting as a gateway, received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is temporarily unable to handle the request due to overload or maintenance.

---

## **📊 Summary Table**

| **Category** | **Description**      | **Examples**       |
| ------------ | -------------------- | ------------------ |
| **1xx**      | Informational        | 100, 101           |
| **2xx**      | Successful Responses | 200, 201, 204      |
| **3xx**      | Redirection Messages | 301, 302, 304      |
| **4xx**      | Client Errors        | 400, 401, 403, 404 |
| **5xx**      | Server Errors        | 500, 502, 503      |

---

### 🌟 **Key Takeaways**

- **1xx**: Informational - Request received, continue.
- **2xx**: Success - Request was processed successfully.
- **3xx**: Redirection - Additional action required.
- **4xx**: Client Errors - Issue with the request.
- **5xx**: Server Errors - Problem on the server side.

These codes provide critical insight into the state of HTTP requests and responses, aiding in troubleshooting and improving application reliability.

---
