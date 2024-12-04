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

# 📘 **Introduction**

This material dives into the fundamentals of **REST APIs**, their constraints, and the concept of resources—key components for seamless communication between clients and servers.

---

## 🌐 **Understanding REST APIs**

**REST** (Representational State Transfer) is an **architectural style** for designing APIs that simplifies the interaction between the front-end and back-end. It focuses on:

- **Ease of access** to back-end data.
- **Modification** of resources via defined HTTP methods.

To be considered a **RESTful API**, the following constraints must be met:

- **Client-Server Architecture**: Decouples the client (consumer) from the server (provider).
- **Statelessness**: The server doesn’t retain any information about previous requests.
- **Cacheability**: Responses can be cached to enhance performance.
- **Layered System**: Allows intermediaries like load balancers or proxies without impacting functionality.
- **Uniform Interface**: Provides consistency and simplifies communication between components.
- **Code on Demand (Optional)**: Servers can deliver executable code (e.g., JavaScript) to clients.

---

## 🧱 **Key Constraints of REST APIs**

1. **Client-Server Architecture**

   - Separates concerns, enabling independent development and scaling of clients and servers.

2. **Statelessness**

   - Each request from a client must contain all the necessary information since no session state is stored on the server.

3. **Cacheability**

   - Responses should explicitly indicate whether they are cacheable to enhance efficiency.

4. **Layered System**

   - A client cannot tell whether it is directly connected to the server or through an intermediary.

5. **Uniform Interface**
   - Simplifies and standardizes API interactions using consistent resource identifiers, HTTP methods, and formats.

---

## 🗂️ **Resources in REST APIs**

In REST, **resources** are the backbone of the API:

- **Definition**: Resources represent entities or data objects, such as users, products, or orders.
- **Representation**: They are accessed via **unique URLs**, such as `/users` or `/orders`.
- **Filtering**: APIs can apply parameters to filter or customize resource retrieval, ensuring flexibility while maintaining consistency.

For example:

- `/orders?status=pending` retrieves only orders with a pending status.
- `/products?category=electronics` filters products by category.

---

### 🎯 **Why Master REST APIs?**

Understanding the principles of REST APIs empowers developers to:

- Build **scalable and efficient APIs**.
- Design **intuitive and maintainable endpoints**.
- Enable seamless integration between clients and servers.

---

# 📘 **Introduction**

This material highlights the importance of **well-designed API endpoints**, focusing on **naming conventions** and **best practices** to enhance clarity and usability for developers.

---

## 🖋️ **Naming Conventions for API Endpoints**

🔹 **Readable Names**

- Use **lowercase letters** and **hyphens** (`-`) to separate words for better readability.
  - **Example**: `/menu-items`
- Avoid using **underscores**, **camelCase**, or **TitleCase**, except in variable representations.

🔹 **Resource-Based Naming**

- Always use **nouns** to represent resources, such as `orders` or `menu-items`.
  - **Do This**: `/users` or `/orders`
  - **Avoid**: `/getOrders` or `/orders.php`

---

## 🌲 **Hierarchical Relationships and Query Parameters**

🔹 **Hierarchical Relationships**

- Use **forward slashes** (`/`) to represent hierarchy in your API endpoints.
  - **Example**: `/customers/orders` to indicate that customers can have multiple orders.

🔹 **Query Parameters for Filtering**

- Use **query strings** to filter results or specify data formats.
  - **Example**:
    - `/menu-items?category=appetizer` to filter by category.
    - `/data?format=json` to specify the data format.

---

## ✅ **Reinforcing Best Practices**

- 🚫 **Avoid Trailing Slashes**: Exclude trailing slashes (`/`) from the end of your API endpoints for consistency.

  - **Good**: `/api/users`
  - **Not Recommended**: `/api/users/`

- 🛠️ **Consistency Matters**: Adhering to these conventions ensures your APIs are:
  - **Easy to understand**.
  - **Developer-friendly**.
  - **Scalable** for future changes.

---

### 🎯 **Why Follow Best Practices?**

Following these practices makes your APIs:

- Easier to use by other developers.
- Aligned with industry standards.
- More maintainable and extendable.

---

Here's a decorated and organized version of your README section:

---

# 📘 **Good Routes vs. Bad Routes**

## 🏁 **Introduction**

Naming your API properly is the first step in designing a good API. A well-named API provides meaningful information about its purpose and usage. To create impactful API endpoints, follow these **guidelines** and **rules** to distinguish between good and bad routes.

---

## 🛠️ **Rule 01: Use Lowercase, Hyphens, and Full Words**

- ✅ Always use **lowercase** letters.
- ✅ Separate words with **hyphens** (`-`).
- ✅ Avoid **abbreviations**—use full and meaningful words.

### 🔑 Examples:

| **URI**                      | **Status** | **Why**                                                 |
| ---------------------------- | ---------- | ------------------------------------------------------- |
| `/customers`                 | ✅ Good    | Plural and lowercase.                                   |
| `/customers/16/phone-number` | ✅ Good    | Lowercase and hyphens used.                             |
| `/customers/16/address/home` | ✅ Good    | Hierarchical relationship shown with forward slashes.   |
| `/users/{userId}`            | ✅ Good    | Variable in **camelCase**, no hyphen in variable names. |
| `/Customers`                 | ❌ Bad     | Uses Title Case.                                        |
| `/customers/16/tel-no`       | ❌ Bad     | Abbreviation in URI.                                    |
| `/customers/16/phone_number` | ❌ Bad     | Uses underscores.                                       |

---

## 🌲 **Rule 02: Use Forward Slashes for Hierarchy**

- ✅ Represent **hierarchical relationships** using forward slashes (`/`).
- 🚫 Avoid **backslashes** (`\`) to separate elements.

### 🔑 Examples:

| **URI**                                | **Status** | **Why**                                      |
| -------------------------------------- | ---------- | -------------------------------------------- |
| `/store/customers/{customerId}/orders` | ✅ Good    | Shows hierarchy: customers → orders.         |
| `/library/authors/books`               | ✅ Good    | Authors have multiple books.                 |
| `\customers\16\phone-number`           | ❌ Bad     | Uses backslashes instead of forward slashes. |

---

## 📦 **Rule 03: Use Nouns, Not Verbs**

- ✅ Use **plural nouns** for collections and **singular nouns** for single resources.
- ❌ Avoid using verbs like `get`, `update`, or `delete` in the URI.

### 🔑 Examples:

| **URI**           | **Expects**  | **Status** | **Why**                           |
| ----------------- | ------------ | ---------- | --------------------------------- |
| `/orders`         | Collection   | ✅ Good    | Uses plural noun, no verbs.       |
| `/users/{userId}` | Single User  | ✅ Good    | Proper use of noun and hierarchy. |
| `/getOrder`       | Single Order | ❌ Bad     | Uses verb and camelCase.          |
| `/order`          | Collection   | ❌ Bad     | Singular noun for a collection.   |

---

## 🚫 **Rule 04: Avoid Special Characters**

- ✅ Use commas to separate values for multi-item requests.
- 🚫 Avoid special characters like `|`, `^`, or `&`.

### 🔑 Examples:

| **URI**                   | **Status** | **Why**                     |
| ------------------------- | ---------- | --------------------------- |
| `/users/12,23,45/address` | ✅ Good    | Uses commas for separation. |
| `/orders/16/menu^items`   | ❌ Bad     | Uses special character `^`. |

---

## 📝 **Rule 05: Avoid File Extensions**

- ✅ Indicate formats with **query strings** instead of file extensions.

### 🔑 Examples:

| **URI**                   | **Status** | **Why**                            |
| ------------------------- | ---------- | ---------------------------------- |
| `/menu-items?format=json` | ✅ Good    | Query string specifies the format. |
| `/menu-items.json`        | ❌ Bad     | Includes file extension in URI.    |

---

## 🔍 **Rule 06: Use Query Parameters for Filtering**

- ✅ Perform filtering using **query strings**.
- 🚫 Avoid embedding filters directly in the path.

### 🔑 Examples:

| **URI**                                 | **Status** | **Why**                             |
| --------------------------------------- | ---------- | ----------------------------------- |
| `/users/{userId}/locations`             | ✅ Good    | Shows hierarchy and is descriptive. |
| `/users/{userId}/locations?country=USA` | ✅ Good    | Uses query string for filtering.    |
| `/users/{userId}/locations/USA`         | ❌ Bad     | Filters data directly in the path.  |

---

## 🚦 **Rule 07: No Trailing Slash**

- ✅ Avoid including a **trailing slash** (`/`) at the end of your API endpoints.

### 🔑 Examples:

| **URI**            | **Status** | **Why**                  |
| ------------------ | ---------- | ------------------------ |
| `/users/{userId}`  | ✅ Good    | No trailing slash.       |
| `/users/{userId}/` | ❌ Bad     | Includes trailing slash. |

---

## 🏁 **Conclusion**

By following these **naming conventions** and **best practices**, you can design REST API endpoints that are:

- ✅ Consistent.
- ✅ Developer-friendly.
- ✅ Easy to maintain and scale.

Adopting these guidelines ensures your API adheres to industry standards, making it easier for other developers to understand and use effectively. 🎯

---

# Tools for Rapid and Efficient API Development

To work quickly and efficiently as a developer, having the right tools is essential. Intelligent tools can streamline your workflow and help you become a more competent developer. Here, we will explore some command-line and graphical tools for interacting with APIs, including a demonstration of testing APIs with **Insomnia**. These tools are cross-platform, so you can use them on Windows, macOS, and Linux.

---

## **1. Curl: The Command-Line Staple**

**Curl** is a powerful tool for making HTTP calls directly from the command line. It is available on all major operating systems. While it lacks a graphical interface, its simplicity and flexibility make it a must-have for developers.

### **Getting Started with Curl:**

1. Open PowerShell (Windows) or Terminal (macOS/Linux).
2. Type `curl` and press **Enter** to see its options.

### **Examples:**

- **GET Request:**

  ```bash
  curl https://postman-echo.com/get
  ```

  This sends a GET request and displays headers and the request body.

- **POST Request:**
  ```bash
  curl -X POST -d "key=value" https://postman-echo.com/post
  ```
  Use `-X` to specify the HTTP method and `-d` to include the request body.

---

## **2. Postman: The All-in-One API Platform**

**Postman** is a widely-used tool for testing and debugging APIs. Its graphical interface and web version make API development seamless.

### **Why Use Postman?**

- Save time managing API details.
- Build collections of API requests for organized testing.
- Supports authentication, scripting, and mock servers.

For more learning resources, visit the [Postman website](https://www.postman.com).

---

## **3. Insomnia: The Developer-Friendly REST Client**

**Insomnia** is a REST API client designed for managing, organizing, and executing API requests. It's free, cross-platform, and user-friendly.

### **Key Features of Insomnia:**

- Save and organize requests into collections.
- Support for multiple HTTP methods.
- Easily manage request parameters, headers, and body.

### **How to Use Insomnia:**

1. **Create a Collection:**

   - Click the **Create** button and select **Request Collection**.
   - Name it (e.g., _First Collection_) and click **Create**.

2. **Create a Request:**

   - Click the **+** icon on the left sidebar or press `Ctrl + N` / `Cmd + N`.
   - Select **HTTP Request** and give it a name (e.g., _First Request_).
   - Choose the HTTP method (e.g., GET) and enter the API URL.

3. **Send a Request:**

   - Example GET URL: `https://httpbin.org/get?project=LittleLemon`
   - Click **Send** to view the response.

4. **Make a POST Request:**
   - Change the HTTP method to POST and enter `https://httpbin.org/post`.
   - In the **Body** tab, select **Form URL Encoded** or **JSON**.
   - Add arguments like `key: project` and `value: LittleLemon`.

---

## **Practical Example: Using httpbin.org**

**httpbin.org** is a free API for testing HTTP methods. When you send a request, it echoes back the data you provided, making it perfect for experiments.

### Example GET Request:

- URL: `https://httpbin.org/get?project=LittleLemon`

### Example POST Request:

- URL: `https://httpbin.org/post`
- Body:
  ```json
  {
    "project": "LittleLemon"
  }
  ```

---

## **Conclusion**

These tools—**Curl**, **Postman**, and **Insomnia**—are invaluable for testing and debugging APIs. While Curl offers command-line simplicity, Postman and Insomnia provide graphical interfaces for efficient development. Throughout your development journey, tools like these will help you create, test, and perfect your APIs with ease.

---

# **HTTP Methods, Status Codes, and Response Types**

### **Introduction**

HTTP methods and status codes are foundational to building robust and user-friendly REST APIs. Following established conventions ensures:

1. **Error Reduction**: Adhering to standards minimizes bugs during development and deployment.
2. **Collaboration**: Standardized APIs are easier for other developers to understand and use.

This guide outlines key HTTP methods, status codes, and response types to help you create efficient and standardized APIs.

---

## **HTTP Methods**

In REST APIs, a single endpoint can handle various actions depending on the HTTP method used. These methods define the intent of the request and guide how resources should be manipulated.

| **HTTP Method** | **Action**                                                                           |
| --------------- | ------------------------------------------------------------------------------------ |
| **GET**         | Retrieves a resource. Returns a `404 Not Found` if the resource doesn’t exist.       |
| **POST**        | Creates a new resource with a request payload (e.g., JSON or Form URL encoded data). |
| **PUT**         | Replaces an existing resource entirely with the provided data.                       |
| **PATCH**       | Updates part of an existing resource with the provided data.                         |
| **DELETE**      | Removes a resource.                                                                  |

---

### **Example Calls**

| **HTTP Method** | **Sample Endpoints** | **Payload/Query**                                                                                                       |
| --------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **GET**         | `/api/menu-items`    | Filter with query params: `/api/menu-items?category=appetizers&perPage=3&page=2`. No payload required for GET requests. |
| **POST**        | `/api/menu-items`    | Example JSON payload: <br> `{ "title": "Beef Steak", "price": 5.50, "category": "main" }`                               |
| **PUT**         | `/api/menu-items/1`  | Replaces the resource completely: <br> `{ "title": "Chicken Steak", "price": 2.50, "category": "main" }`                |
| **PATCH**       | `/api/menu-items/1`  | Partially updates the resource: <br> `{ "price": 3.00 }`                                                                |
| **DELETE**      | `/api/menu-items/1`  | Deletes the resource at `/api/menu-items/1`.                                                                            |

---

## **HTTP Status Codes**

Proper status codes ensure clear communication between the client and the server. Each code has a specific purpose:

| **Range**   | **Purpose**                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **100-199** | Informational. For example, `102 Processing` indicates the server is handling the request but isn’t ready yet.                                                           |
| **200-299** | Success. For instance, `200 OK` for GET/DELETE, `201 Created` for POST, and `204 No Content` when there’s no response body.                                              |
| **300-399** | Redirection. E.g., `301 Moved Permanently` redirects clients to a new endpoint.                                                                                          |
| **400-499** | Client Errors. Examples: <br> - `400 Bad Request` for invalid payloads, <br> - `404 Not Found` for missing resources, <br> - `401 Unauthorized`, <br> - `403 Forbidden`. |
| **500-599** | Server Errors. Generated when something fails on the server-side, like uncaught exceptions or database connection issues.                                                |

---

## **Response Types**

REST APIs often respond in formats like **JSON**, **XML**, or **plain text**. Frameworks often include built-in tools for formatting responses based on the client’s `Accept` header.

| **Response Type** | **Request Header**                                |
| ----------------- | ------------------------------------------------- |
| **HTML**          | `Accept: text/html`                               |
| **JSON**          | `Accept: application/json`                        |
| **XML**           | `Accept: application/xml` or `Accept: text/xml`   |
| **YAML**          | `Accept: application/yaml` or `Accept: text/yaml` |

---

### **Conclusion**

Understanding and applying HTTP methods, status codes, and response types correctly ensures that your APIs are consistent, user-friendly, and aligned with RESTful standards. Following these conventions makes debugging easier and fosters better collaboration with other developers.

---

Here's a well-structured and visually appealing README section based on your content:

---

# **REST API Best Practices**

Creating a REST API is simple, but building a robust, reliable, and high-performing API requires careful planning and adherence to best practices. Below are the essential guidelines every API developer should follow:

---

### **1. Keep It Simple (KISS)**

A REST API should be designed to handle a single, specific task efficiently. Avoid combining multiple operations into one API.  
**Example:**  
For a menu management system:

- To update the status of an item (e.g., "item of the day"), send an HTTP PATCH/PUT request:
  - **Endpoint:** `/menu-items/16`
  - **Body:** `{ "status": "Off" }`
- For the new "item of the day," use another PATCH/PUT request:
  - **Endpoint:** `/menu-items/21`
  - **Body:** `{ "status": "On" }`

---

### **2. Filtering, Ordering, and Pagination**

APIs should allow clients to filter and sort results while supporting pagination to handle large datasets.  
**Example:**

- **Filters:**
  - Query string parameters like `/menu-items?category=desserts` to fetch specific categories.
- **Pagination:**
  - `/menu-items?page=10&size=4` to fetch 4 items from page 10.
- **Sorting:**
  - `/menu-items?sort=price&order=asc` for ascending price order.

---

### **3. Versioning**

Introduce versioning to avoid breaking client applications when making significant updates.  
**Best Practices:**

- Use versioning in the URL (e.g., `/v1/menu-items`).
- Maintain only the last two versions of an API to reduce complexity.

---

### **4. Caching**

Caching improves performance by reducing database load and network latency.  
**Example:**

- Cache results for endpoints like `/menu-items`.
- Serve cached responses for unchanged data, refreshing only when modifications occur.
- Use HTTP cache headers (`Cache-Control`) for efficient cache management.

---

### **5. Rate Limiting and Monitoring**

To prevent abuse and ensure stability:

- **Rate Limiting:** Restrict the number of requests per time frame (e.g., per minute or per day).
- **Monitoring:**
  - Track status codes (e.g., `400-499` for client errors, `500-599` for server errors).
  - Monitor network bandwidth to detect API misuse.
  - Ensure low latency to optimize response times.

---

By adhering to these best practices—**KISS, filtering, pagination, versioning, caching, rate limiting, and monitoring**—you can build high-quality, sustainable, and scalable REST APIs. These principles will help you deliver a smooth and efficient user experience while maintaining the reliability and performance of your APIs.

---

### Protecting APIs: Best Practices and Security

APIs are essential for making your data accessible, not just for your apps and websites but also for third-party clients, increasing its usefulness. However, their public availability can pose risks to your back-end services. This guide covers **best practices** to secure your APIs and protect your infrastructure.

---

### 1. **SSL: Secure Socket Layer**

- **Purpose**: Encrypts data between the browser and web server.
- **Implementation**:
  - Install SSL certificates from a trusted provider.
  - Serve APIs over **HTTPS** instead of HTTP.
- **Tip**: Always verify that API endpoints start with `https://`.

---

### 2. **Signed URLs**

- **Objective**: Restrict API access to trusted clients.
- **How it Works**:
  - Attach a **signature** to each URL.
  - Server-side code verifies the signature to ensure authenticity.
- **Mechanism**: Use **HMAC (Hash-based Message Authentication Code)**.
  - Combines a secret message and key using a digest algorithm to create the signature.

---

### 3. **Authentication**

- **Token-Based Authentication** (preferred over HTTP Basic Authentication):
  - User logs in with credentials once and receives a **unique token**.
  - Include the token as an HTTP header in subsequent API calls.
- **Tools**:
  - Use **JSON Web Token (JWT)** for a standardized approach.
- **HTTP Status Codes**:
  - `401 Unauthorized`: Invalid username or password.
  - `403 Forbidden`: Valid credentials, but insufficient permissions.

---

### 4. **CORS Policy and Firewalls**

- **CORS (Cross-Origin Resource Sharing)**:
  - Control which domains can access your API.
  - Configure CORS headers to restrict unauthorized access.
- **Firewalls**:
  - Allow access only from specific IP addresses to tighten security.

---

### **Conclusion**

Securing APIs is crucial for protecting your infrastructure and user data. By implementing these strategies—SSL, signed URLs, token-based authentication, CORS policies, and firewalls—you can ensure that your APIs are robust and secure. Start applying these practices today to safeguard your backend services.

---

# Access Control in APIs: Secure Your Data Effectively 🚀

The **Little Lemon API** provides endpoints to view order details, including sensitive customer data such as delivery addresses. Ensuring only authorized users—like managers and delivery crew—can access these APIs is critical. This guide focuses on **access control**, a cornerstone of API security, to protect sensitive information and maintain proper data governance.

---

## 1. **What is Access Control?**

Access control defines **who** can access your APIs and **what data** they can interact with. It ensures:

- Only the right users manage sensitive data.
- Unauthorized users are denied access.

**Key Concepts**:

- **Roles**: A collection of privileges assigned to a user.
- **Privileges**: Specific actions a user can perform.

---

## 2. **Roles and Privileges: Examples**

### **Customer Role**

Privileges include:

- Browsing menu items.
- Adding items to the cart.
- Placing orders.
- Adding food reviews.
- Viewing personal order history.

### **Manager Role**

Privileges include:

- Adding, editing, and deleting menu items.
- Viewing all orders and customer data.
- Assigning orders to the delivery crew.
- Viewing transaction data.

### **Delivery Crew Role**

Privileges include:

- Viewing assigned orders.
- Updating the status of assigned orders.

Other potential roles:

- **Administrator**: Full system control.
- **HR Representative**: Access to HR-related data.
- **Accountant**: Access to financial records.

---

## 3. **Authorization vs. Authentication**

- **Authentication**: Confirms the user's identity (e.g., login).
- **Authorization**: Determines what the user can do after authentication (e.g., access control).

---

## 4. **Strategies for Role Management**

### **Single Role with Comprehensive Privileges**

Assign all necessary privileges to one role for a user.

- **Example**: A manager role includes privileges from accountant and HR roles.

### **Task-Specific Roles**

Assign multiple specific roles to a user.

- **Example**: The general manager has:
  - Accountant role (financial access).
  - HR role (HR data access).
  - Manager role (operational access).

**Benefits**:

- Easy to update individual role privileges.
- Automatically updates user capabilities when roles are modified.

---

## 5. **Designing Effective Access Control**

- **Detail-Oriented Privileges**: The more granular, the better.
- **Scalable Role System**: Simplifies updates and additions.
- **Future-Proof Design**: Saves time and effort in debugging and refactoring.

---

## **Conclusion**

A well-designed API access control system is an investment in security and efficiency. By clearly defining roles and privileges, you can:

- Ensure sensitive data is accessible only to the right users.
- Avoid costly issues during development and beyond.

Take the time to plan your access control system thoughtfully—your project will thank you in the long run! 💡

---

# Authentication vs. Authorization: Understanding the Difference 🚀

APIs provide access to backend data for third-party clients, making security a top priority. If left unsecured, APIs can expose sensitive information or allow tampering with data. This guide explores the crucial concepts of **authentication** and **authorization** to protect API endpoints effectively.

---

## **Introduction**

- **Authentication**: Confirms **who** you are.
- **Authorization**: Determines **what** you can do.

These processes, while interconnected, serve distinct purposes. Let’s dive deeper into their roles in API security.

---

## **1. Authentication: Verifying User Identity**

Authentication is the process of confirming the user's credentials (e.g., username and password). Successful authentication allows the user to access the system.

### **How It Works:**

1. **Login**: User submits credentials.
2. **Token Issuance**: If valid, the server provides a **bearer token**.
3. **Token Validation**: Client includes the token in every API call. Server validates it before granting access.

### **HTTP Status Codes**:

- `200 OK`: Credentials verified successfully.
- `401 Unauthorized`: Invalid credentials.

### **Analogy**:

Think of this as your first day at work:

- You provide all necessary documents.
- You receive an employee ID card.
- Your ID card is used for subsequent access.

### **Diagrams**:

1. **Authentication Process**: Shows how tokens are issued.
2. **Authenticated API Calls**: Demonstrates token usage for secure API access.

---

## **2. Authorization: Controlling User Actions**

Authorization determines whether a user has the necessary privileges to perform specific actions. It is an additional layer of security after authentication.

### **How It Works:**

1. **User Roles**: Users are assigned roles or groups.
2. **Privilege Check**: After verifying the token, the server checks if the user’s role permits the requested action.

### **HTTP Status Codes**:

- `200 OK`: Authorized action.
- `403 Forbidden`: Insufficient privileges.

### **Analogy**:

Even with an employee ID, access to certain areas (e.g., server room) may require special permissions. Authorization ensures you can only perform tasks relevant to your role.

### **Diagrams**:

1. **API Authorization**: Illustrates how roles and privileges are verified.

---

## **3. Implementing Authorization**

An effective authorization system prevents data corruption and breaches.

### **Steps**:

1. **Define Privileges**: Identify tasks users can perform.
   - Example: In a bookstore API:
     - **Browse books**: All users.
     - **Add/Edit/Delete books**: Managers only.
     - **Place orders**: Authenticated customers.
2. **Create Roles**: Group related privileges into roles.
   - Example:
     - **Customer Role**: Browse and place orders.
     - **Manager Role**: Add, edit, delete books.
3. **Backend Checks**: Verify user roles at each API endpoint.
   - Allow or deny actions based on role privileges.

---

## **4. Key Takeaways**

- **Authentication**: "Who are you?"
  - Verifies identity.
  - Grants access to the system.
- **Authorization**: "What can you do?"
  - Validates privileges.
  - Controls access to specific actions or data.

Together, these processes form the backbone of API security, ensuring safe and controlled data access.

---

## **Conclusion**

Understanding **authentication** and **authorization** is essential for securing your APIs. By implementing these concepts effectively, you can build robust security layers that protect sensitive information and maintain system integrity. Use this foundation to enhance your API projects with user groups, roles, and privileges.

**Secure your APIs—Secure your data.** 🔐

---

## Overview

Up to this point, you've learned quite a lot about **REST APIs** along with best practices for using them. Now, Adrian wants you to start using REST APIs within the **Little Lemon Mobile App**. In order to do this, you'll first need to learn how to interact with REST APIs in **React Native** to make calls to the server. This guide will walk you through how to do just that.

### Key Learning Objectives

- **Network Calls with the Fetch API** in React Native
- **Handling HTTP Requests and Responses**
- **Working with Promises and Asynchronous Operations**

---

## Making Network Calls Using the Fetch API

In this section, you'll become familiar with making network calls using the **Fetch API** in React Native. The Fetch API is a built-in method for making network requests and handling responses, making it easier to interact with APIs.

### What is the Fetch API?

The Fetch API allows you to make requests to a server, retrieve data, or make **POST requests**. It's similar to **XMLHttpRequest** or other networking APIs you may have used before.

#### **Why use Fetch API?**

- It is **asynchronous**, meaning that the application doesn't wait for the server to respond before continuing with other operations.
- **Promises** are used to handle the eventual completion or failure of the request.

---

## Promises in JavaScript

A **Promise** represents the eventual completion (or failure) of an asynchronous operation and its resulting value. This makes it easier to handle network operations without blocking the app's execution.

- **Asynchronous operations** help optimize applications so they do not wait for a server's response before performing other tasks.

---

## Making GET and POST Requests

### **GET Request**

To retrieve data, you will use the `fetch()` method and pass the URL you need to fetch content from.

For example, to fetch a menu from the Little Lemon restaurant:

```js
fetch('https://example.com/get-little-lemon-menu')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
```

### **POST Request**

For a **POST request**, you can customize the request by passing an optional second argument with the **method** and **headers**. For example:

```js
fetch('https://example.com/submit-order', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    item: 'Pizza',
    quantity: 2
  })
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
```

---

## Handling Responses

After making a request, you need to handle the response. Since network calls are asynchronous, you can use **async/await** for a cleaner syntax:

```js
const getMenuItems = async () => {
  try {
    const response = await fetch('https://example.com/get-little-lemon-menu')
    const menuItems = await response.json()
    return menuItems
  } catch (error) {
    console.log('Error:', error)
  }
}
```

### **Error Handling**

If the server times out or any other error occurs, you need to catch it:

```js
fetch('https://example.com/get-little-lemon-menu')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error fetching data:', error))
```

---

## Explore Other Networking Libraries

While the Fetch API is sufficient for most cases, you may also explore other networking libraries, such as **XMLHttpRequest**, which is also built into React Native.

---

## Conclusion

In this video, you've learned how to make network calls using the Fetch API in React Native. You've explored how HTTP requests are made, how to handle responses, and how to use **async/await** syntax to manage asynchronous code. You also learned how to handle errors and catch them effectively.

Next, you'll discover how to fetch data and handle responses from within the **Little Lemon** app!

---

## **HTTP Protocol and Promises in Detail**

Previously, you discovered how to make **HTTP calls** from your React Native app while using the **async/await** methods to resolve promises. You've become familiar with the built-in `fetch` method in React Native and learned how to fetch data and handle the response from an API.

In this section, we will dive deeper into **HTTP calls**, including additional features and best practices for interacting with APIs in React Native. Let's refresh some of the key concepts before we continue.

---

## **Making a GET Request**

To fetch content from a URL, you can use the `fetch` method in React Native, which is a built-in API for making network requests. Here's an example of how to use it:

```js
fetch(
  'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json'
)
```

---

## **Handling the Response**

The goal of making an HTTP request is to perform an action with the response data. The `fetch` method returns a **Promise** that resolves once the response is received from the server. To handle the Promise, you can use the **async/await** syntax, which makes your code more readable and easier to maintain.

Here's an example where we fetch the Little Lemon menu data and handle the response:

```js
const getMenu = async () => {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json'
    )
    const json = await response.json()
    setData(json.menu)
    console.log(json.menu)
  } catch (error) {
    console.error(error)
  } finally {
    // Perform any final actions
  }
}
```

- **`catch` block**: Catches any errors that occur during the fetch process.
- **`finally` block**: Executes any remaining code, regardless of whether the fetch request succeeds or fails.

For the complete code for fetching the menu data using a GET request, you can download the zipped folder below.

---

## **POST Requests**

While **GET requests** are used to retrieve data, **POST requests** are used to send data to a server. In React Native, the `fetch` method can also be used to make **POST requests** to send data, such as user credentials, to the server.

### **POST Request Example – Login a User**

When a user logs into the Little Lemon app, you need to send their credentials (e.g., name, email, password) to the server. Here's an example of how to make a POST request to send the login credentials:

```js
const loginUser = async () => {
  try {
    const response = await fetch('https://your-website.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'user@example.com',
        password: 'password123'
      })
    })
    const jsonResponse = await response.json()
    console.log(jsonResponse)
  } catch (error) {
    console.error(error)
  }
}
```

In the above code:

- **`method: 'POST'`** specifies that this is a POST request.
- **`body`** contains the request data, which is sent as a JSON string.
- **`headers`** specify the request's content type, indicating that the data being sent is in JSON format.

Once the request is made, the server will process the credentials, and the app will handle the response accordingly.

---

## **Other Networking Libraries**

While the `fetch` method is a simple and commonly used way to make network requests in React Native, there are other networking libraries you can explore:

- **`XMLHttpRequest`**: Built into React Native, this is an alternative to `fetch` that you can use to make network requests.
- **Third-party libraries** like **Axios** build on top of `XMLHttpRequest` and provide additional features.

### **XMLHttpRequest Example**

Here’s an example of how to use `XMLHttpRequest` directly:

```js
var request = new XMLHttpRequest()
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return
  }

  if (request.status === 200) {
    console.log('Success:', request.responseText)
  } else {
    console.warn('Error:', request.status)
  }
}
request.open('GET', 'https://example.com/data', true)
request.send()
```

While `XMLHttpRequest` is more verbose than `fetch`, it’s still useful in certain situations, and third-party libraries like Axios can provide even more functionality.

---

## **Conclusion**

React Native offers various networking libraries, and you should choose the one that best suits your needs. In this reading, you've learned how to:

- Make **GET** and **POST** requests using the `fetch` method.
- Handle responses and errors effectively.
- Use **async/await** syntax to manage asynchronous operations.
- Explore other networking libraries like **XMLHttpRequest** and **Axios**.

With these tools, you’re well-equipped to interact with APIs and handle networking within your React Native apps.

---

# 📦 Mastering JSON in React Native

You’ve learned about networking in React Native. Now, let’s explore how **JSON** plays a pivotal role in **data storage** and **transfer** for React Native apps.

---

## ✨ Why JSON is Important

- 🌐 **Widely Used**: JSON is a universal data format used in both web and mobile applications.
- 📜 **Lightweight**: Its syntax is minimal and efficient.
- 💻 **JavaScript-Friendly**: JSON integrates seamlessly with JavaScript, including built-in functions to parse JSON strings into JavaScript objects.
- 🚀 **React Native Ready**: JSON is ideal for data storage and communication between the **client** (mobile app) and **server**.

---

## 🧠 Key JSON Concepts

1. 🗂️ **Data Structure**

   - JSON uses **key-value pairs** for data storage.
   - Example:
     ```json
     {
       "name": "John",
       "age": 30,
       "city": "New York"
     }
     ```

2. 📜 **Syntax Rules**

   - Keys must be enclosed in **double quotes** (`"`).
   - Objects are defined using **curly braces** (`{}`), and arrays use **square brackets** (`[]`).
   - **Colons (`:`)** separate keys and values, and **commas (`,`)** separate items.
   - Example of an object with an array:
     ```json
     {
       "menu": ["Greek Salad", "Caesar Salad", "Grilled Chicken Salad"]
     }
     ```

3. 🔄 **Why JSON is Dominant**
   - ⚡ **Lightweight**: Easy to process and transfer over networks.
   - 🔧 **Compatible**: Works across languages, especially with JavaScript.

---

## 📘 JSON in Action: React Native

In React Native apps, JSON is commonly used to:

- 🚦 Transfer data between the client app and server.
- 🛠️ Store complex states and data structures.

### Example: Menu Items as JSON

Let’s declare a JSON object to store a restaurant’s menu items:

```javascript
const data = {
  menu: ['Greek Salad', 'Caesar Salad', 'Grilled Chicken Salad']
}
```

To access an individual menu item, use:

```javascript
data.menu[1] // Output: Caesar Salad
```

---

## 🌟 Why Practice JSON

JSON is essential when working with **APIs** in React Native:

- 📥 Retrieve data from APIs.
- 🔄 Convert JSON strings into JavaScript objects.
- 🔍 Access object properties programmatically.

---

### ✅ Recap

- JSON is a lightweight, versatile data format.
- It’s crucial for **data transfer** and **storage** in React Native.
- Practice using JSON to improve your app’s functionality and maintainability.

---

# 🥗 Working with JSON in React Native

JSON is an indispensable format in React Native for data storage and transfer. In this guide, you’ll learn how to work with JSON more effectively, including converting strings and arrays into JSON objects, accessing their properties, and displaying them in your app.

---

## 🔄 Converting a String to JSON

Let’s start with a **simple example**: converting a raw string containing menu item details into a JSON object.

### 🍢 Example Raw String:

```plaintext
{
    "name": "Veggie Kabob",
    "price": "$12",
    "type": "Main Dish"
}
```

### 🎯 Objective:

- Convert the string into JSON format.
- Access and display the data in your app.

---

### 🔧 Using `JSON.parse()`

The `JSON.parse()` method is the key to converting strings into JSON objects.

**🛠 Code Example:**

```javascript
const convertStringToJson = () => {
  const myStr = '{
    "name": "Veggie Kabob",
    "price": "$12",
    "type": "Main Dish"
  }';

  const result = JSON.parse(myStr);
  console.log(result.name);  // Output: Veggie Kabob
};
```

### 📂 Accessing JSON Properties:

```javascript
result.name // Output: Veggie Kabob
result.price // Output: $12
result.type // Output: Main Dish
```

---

## 💻 Full Component Example

Here’s how to integrate the conversion into a React Native component:

```javascript
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const [myJSON, setJsonObj] = useState({});

  const convertStringToJson = () => {
    const myStr = '{
      "name": "Veggie Kabob",
      "price": "$12",
      "type": "Main Dish"
    }';

    const result = JSON.parse(myStr);
    setJsonObj(result);
  };

  useEffect(() => {
    convertStringToJson();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.itemText}>{'Menu Item: ' + myJSON.name}</Text>
      <Text style={styles.itemText}>{'Price: ' + myJSON.price}</Text>
      <Text style={styles.itemText}>{'Type: ' + myJSON.type}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    margin: 10,
  },
});
```

### 🖥 Output:

- **Menu Item:** Veggie Kabob
- **Price:** $12
- **Type:** Main Dish

---

## 🔄 Converting an Array of Strings to JSON

What if we need to handle multiple menu items? Let’s convert a **stringified array** into a JSON object.

**🍴 Raw String Array:**

```json
[
  {
    "name": "Veggie Kabob",
    "price": "$12",
    "type": "Main Dish"
  },
  {
    "name": "Greek Salad",
    "price": "$7",
    "type": "Side"
  }
]
```

### 🔧 Using `JSON.parse()`

Here’s how you parse and display multiple items:

**🛠 Code Example:**

```javascript
const convertStringToJson = () => {
  const myStr = '[
    {
      "name": "Veggie Kabob",
      "price": "$12",
      "type": "Main Dish"
    },
    {
      "name": "Greek Salad",
      "price": "$7",
      "type": "Side"
    }
  ]';

  const result = JSON.parse(myStr);
  console.log(result);
};
```

### 🗂 Displaying Items Using `.map()`

**💻 Full Component Example:**

```javascript
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const [menuItems, setMenuItems] = useState([]);

  const convertStringToJson = () => {
    const myStr = '[
      {
        "name": "Veggie Kabob",
        "price": "$12",
        "type": "Main Dish"
      },
      {
        "name": "Greek Salad",
        "price": "$7",
        "type": "Side"
      }
    ]';

    const result = JSON.parse(myStr);
    setMenuItems(result);
  };

  useEffect(() => {
    convertStringToJson();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {menuItems.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemText}>{'Menu Item: ' + item.name}</Text>
          <Text style={styles.itemText}>{'Price: ' + item.price}</Text>
          <Text style={styles.itemText}>{'Type: ' + item.type}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    margin: 10,
  },
  itemText: {
    fontSize: 18,
  },
});
```

### 🖥 Output:

- **Menu Item:** Veggie Kabob, **Price:** $12, **Type:** Main Dish
- **Menu Item:** Greek Salad, **Price:** $7, **Type:** Side

---

## 🏁 Conclusion

- 🔑 **Key Takeaways**:
  - Use `JSON.parse()` to convert strings into JSON objects or arrays.
  - Access properties directly using dot notation (e.g., `result.name`).
  - Use `.map()` to display multiple items dynamically.

By mastering these techniques, you can handle JSON data effectively in your React Native projects. 🚀
