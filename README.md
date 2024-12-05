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

---

# 📸 Fetching Images in React Native: A Step-by-Step Guide

So far, you've explored various features like making HTTP requests, resolving promises, and fetching JSON data. Now, it's time to dive into **working with images in React Native**. This guide will walk you through the process of fetching and rendering images using the `Image` component.

---

## 🛠️ **Step 1: Import the `Image` Component**

To begin, you'll need to import the `Image` component from React Native. Here's an example:

```javascript
import { Image, View, StyleSheet } from 'react-native'
```

---

## 🎯 **Step 2: Add the `Image` Component**

We have a basic component named `DisplayImage` that currently contains only a `View` tag. Let’s enhance it by adding an `Image` component.

### Where Is the Image Stored?

The image is hosted as a PNG file on a **raw GitHub URL**. For example:

```javascript
const imageUrl = 'https://your-image-url.png'
```

---

## 🖼️ **Step 3: Provide the Image Source**

The `Image` component requires a `source` prop to fetch and display images. Use the `URI` property within `source` to specify the image URL:

```javascript
<Image source={{ uri: imageUrl }} style={styles.logo} />
```

---

## 🔍 **Step 4: Set Image Dimensions**

Images fetched from URLs don't have predefined dimensions. To render the image properly, define its `width` and `height` using the `StyleSheet`:

```javascript
const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 550
  }
})
```

---

## 🖌️ **Step 5: Center the Image**

To center the image on the screen, update the parent `View`'s styles with the following properties:

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
```

Wrap the `Image` component inside a styled `View`:

```javascript
<View style={styles.container}>
  <Image source={{ uri: imageUrl }} style={styles.logo} />
</View>
```

---

## 📊 **Final Touch**

After saving your changes, the image should render beautifully in the center of the emulator screen.

### 🎉 The Result:

- The image is fetched seamlessly from the URL.
- It appears with the specified dimensions.
- It's perfectly centered within the app.

---

## 🧠 **Key Takeaways**

1. **No Fetch API Needed**: The `Image` component automatically fetches and renders the image from the URL.
2. **Styling Matters**: Images require explicit dimensions (`width` and `height`) and thoughtful styling for proper display.
3. **Ease of Use**: React Native's `Image` component handles networking behind the scenes, making it incredibly user-friendly.

---

### 🔗 Additional Resources

- React Native Documentation: [Image Component](https://reactnative.dev/docs/image)

---

Here’s a well-decorated and formatted version suitable for a README file:

---

# Introduction to Databases

## Understanding Data and Databases

We encounter data and databases in many aspects of our daily lives—whether uploading photos to social media, downloading files at work, or playing games online. But what exactly is data, and how does it interact with a database?

### What is Data?

In simple terms, **data** refers to facts and figures about anything.  
For example:

- **Personal data:** Name, age, email, date of birth.
- **E-commerce data:** Order number, product description, order quantity, date, customer email.

---

## What is a Database?

A **database** is an electronic storage system where data is systematically organized, stored, and managed to enhance efficiency and security.

### Key Features of Databases:

- **Systematic Organization:** Resembles spreadsheets or tables.
- **Ease of Management:** Data is easily searchable, retrievable, and modifiable.
- **Examples of Use:**
  - Banks: Storing customer accounts and transactions.
  - Hospitals: Managing patient records, staff information, and laboratory data.

---

## How is Data Organized in a Database?

### Entities and Attributes

- **Entities:** Represent elements like a customer, product, or invoice. Entities are organized as **tables** in relational databases.
- **Attributes:** Features or characteristics of entities, represented as **columns** in tables.

#### Example:

For an **online store**, the database might contain:

- **Customer entity:** Attributes such as first name, last name, email, date of birth.
- **Product entity:** Attributes such as product code, description, price, availability.

These entities are related to one another, forming **relational tables**.

---

## Types of Databases

While relational databases are common, there are other types worth exploring:

### 1. **Relational Databases**

Data is stored in rows and columns (tables). Relationships between data make it easy to query and manage.

### 2. **Object-Oriented Databases**

Data is stored as **objects** instead of tables.

- Example: An online bookstore where entities like authors, books, and customers are represented as objects.

### 3. **Graph Databases**

Data is represented as **nodes** with relationships stored as **edges**.

- Example: Nodes for customers, products, and orders, connected by edges to represent their relationships.

### 4. **Document Databases**

Data is stored as **JSON documents** within collections.

- Example: A customer collection might contain documents with customer details, while product and order data are stored in their respective collections.

---

## Where Are Databases Stored?

Databases can be stored:

1. **On-Premises:** Hosted on dedicated machines within an organization.
2. **Cloud-Based:** Accessible via the Internet, offering scalability and cost-effectiveness.

Cloud databases are increasingly popular due to their affordability and flexibility.

---

## Conclusion

By understanding what a database is and how data is organized within it, you now have the foundational knowledge to start managing and storing data efficiently. With relational and non-relational database systems at your disposal, the possibilities are endless.

---

> "Data is the new oil. It’s valuable, but if unrefined it cannot really be used."

---

Here’s a well-structured and visually appealing version for a README file:

---

# Understanding Data Relationships in Databases

## Picture This Scenario

Imagine you're managing the database of a large online store. Your database needs to:

1. Retrieve customer details from one table.
2. Find the orders recorded in another table.

**How does the database establish a relationship between these pieces of data?**  
In this guide, you'll learn:

- Why data in a database should be related.
- How relationships between data work using real-world examples.

---

## Why Should Data Be Related?

Data in a database cannot exist in isolation. It must connect with other data to form meaningful information.

For example:

- **Online Store Database:**
  - A **Customer Table** holds customer details.
  - An **Order Table** records customer purchases.

To identify which customer placed a specific order, the database establishes a link between the data in these tables.

---

## Exploring the Relationship

### **Customer Table**

The customer table stores information about each customer as fields (columns) and records (rows).  
**Example Structure:**  
| Customer ID | First Name | Last Name | Email |  
|-------------|-------------|----------------|-------------------|  
| C1 | Sarah | Hogan | sarah@example.com |  
| C2 | Katrina | Langley | katrina@example.com |

### Key Points:

- **Customer ID**: A unique identifier for each customer, known as the **primary key**.
- Ensures no confusion, even if multiple customers share the same name.

---

### **Order Table**

The order table tracks customer purchases.  
**Example Structure:**  
| Order ID | Product | Order Date | Customer ID |  
|----------|----------------|------------|-------------|  
| O1 | Laptop | 2024-12-01 | C1 |  
| O2 | Smartphone | 2024-12-02 | C2 |

### Key Points:

- **Order ID**: The primary key for the order table.
- **Customer ID**: Links back to the customer table, creating a relationship.

---

## Understanding Primary and Foreign Keys

### **Primary Key**

A field with unique values in a table.

- **Example:** Customer ID in the customer table uniquely identifies each customer.

### **Foreign Key**

A field in one table that references the primary key of another table.

- **Example:** Customer ID in the order table links to Customer ID in the customer table.

---

## Establishing Relationships

By adding the **Customer ID** as a foreign key in the order table:

- The database can relate orders to specific customers.
- You can retrieve meaningful information, such as:
  - All orders placed by a specific customer.
  - Customer details for a given order.

**Visual Representation:**

- **Customer Table:**  
  Customer ID → Primary Key.
- **Order Table:**  
  Customer ID → Foreign Key, linking to Customer Table.

---

## Conclusion

You now understand:

- Why relationships between data are crucial in a database.
- How primary and foreign keys establish these relationships.

With this knowledge, you're ready to design databases that connect data meaningfully and efficiently. Great work! 🎉

---

Here’s a polished and visually appealing README for the content:

---

# Introduction to SQL

At this point in your journey, you’re likely familiar with the basics of databases and how they store and manage data. But to truly harness the power of databases, you need to learn how to **interact with them**—and that's where **SQL** comes in.

---

## What is SQL?

**SQL** (Structured Query Language), often pronounced as _Sequel_, is a **standard language** used to interact with databases.  
It allows you to:

- **Create** new data structures.
- **Read** or retrieve data.
- **Update** existing data.
- **Delete** data.

These operations are collectively known as **CRUD** (Create, Read, Update, Delete) operations.

---

## Why is SQL Important?

SQL is essential for working with **relational databases**, which require a structured approach to store and manage data.  
Some examples of popular relational databases that use SQL include:

- **MySQL**
- **PostgreSQL**
- **Oracle**
- **Microsoft SQL Server**

---

## The Role of SQL in Databases

### How Databases Understand SQL

Databases interpret SQL instructions with the help of a **Database Management System (DBMS)**.

- **DBMS** acts as a bridge between SQL commands and the underlying database.
- It transforms your SQL instructions into a format the database can understand and execute.

### Example DBMS Tools:

- MySQL Workbench
- pgAdmin for PostgreSQL
- SQL Server Management Studio (SSMS)

As a developer, you’ll work with a DBMS to:

1. Write and execute SQL commands.
2. Manage database structures and data efficiently.

---

## What You'll Learn Next

This was just an **introduction to SQL**. As you progress through the course, you’ll:

- Gain a deeper understanding of how SQL interacts with databases.
- Explore CRUD operations in detail.
- Learn to work with various DBMS tools and relational database systems.

By mastering SQL, you’ll unlock the ability to manage, retrieve, and manipulate data effectively in any database system.

---

Here’s a decorated README for the content:

---

# Building a College Database with SQL

Imagine you’ve just been hired to create a database for a college. Your mission?

1. Create tables to hold data for all aspects of the college.
2. Insert data into those tables.
3. Modify or update the data whenever something changes.

It may sound overwhelming, but it’s all manageable with **SQL** and **CRUD operations**.

---

## What Are CRUD Operations?

CRUD stands for:

- **Create**: Add or insert data into a database.
- **Read**: Retrieve or view data.
- **Update**: Modify existing data.
- **Delete**: Remove data.

Performing CRUD operations is the most common task when working with a database. These tasks are made possible through SQL’s commands and subsets, often referred to as **SQL sublanguages**.

---

## SQL Sublanguages

SQL can be divided into the following sublanguages based on its use cases:

### 1. **Data Definition Language (DDL)**

DDL helps you **define the structure** of your database.

#### Key Commands:

- **CREATE**: Create database objects like tables.
- **ALTER**: Modify existing objects, e.g., adding a new column to a table.
- **DROP**: Remove objects like tables from the database.

---

### 2. **Data Manipulation Language (DML)**

DML is used to **manipulate the data** stored in your database.

#### Key Commands:

- **INSERT**: Add new data to a table.
- **UPDATE**: Edit existing data in a table.
- **DELETE**: Remove data from a table.

Most CRUD operations fall under DML.

---

### 3. **Data Query Language (DQL)**

DQL focuses on **retrieving data** from the database.

#### Key Command:

- **SELECT**: Retrieve data from one or multiple tables.
  - Specify fields to retrieve based on filter criteria.
  - Join multiple tables to create meaningful data relationships.

---

### 4. **Data Control Language (DCL)**

DCL is used to **control access** to the database and its data.

#### Key Commands:

- **GRANT**: Provide users with specific access privileges.
- **REVOKE**: Remove access privileges from users.

---

## How SQL Serves as an Interface

SQL serves as the **interface** between the database and its users by enabling developers to perform the following:

- **Define** the structure of a database (DDL).
- **Manipulate and update** stored data (DML).
- **Retrieve and analyze** data (DQL).
- **Control data security and access** (DCL).

By mastering these SQL sublanguages and their commands, you can effectively manage a college database—or any other database you’re tasked with creating!

---

Here's a polished and decorated README:

---

# Getting Started with SQL Syntax and Sublanguages

To interact with a database effectively, you need a solid understanding of **SQL syntax** and its sublanguages. In this guide, we’ll walk through how to:

1. **Create a database** using the Data Definition Language (DDL).
2. **Populate and modify data** using the Data Manipulation Language (DML).
3. **Query and read data** using the Data Query Language (DQL).

For this demonstration, we’ll develop a simple database for a college. This guide will give you a working familiarity with SQL—you’ll dive deeper into each concept later.

---

## Step 1: **Creating a Database and Tables with DDL**

### Create a Database

Use the `CREATE DATABASE` command to create your database. Syntax:

```sql
CREATE DATABASE college;
```

### Create a Table

Once the database is created, use the `CREATE TABLE` command to add tables. For example, to create a `student` table:

```sql
CREATE TABLE student (
  ID INT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  date_of_birth DATE
);
```

Repeat this process for any additional tables needed for the database.

---

## Step 2: **Populating and Modifying Data with DML**

### Insert Data

Use the `INSERT INTO` command to populate tables with data. Syntax:

```sql
INSERT INTO student (ID, first_name, last_name, date_of_birth)
VALUES (1, 'John', 'Doe', '2000-01-01');
```

### Update Data

To update existing data, use the `UPDATE` command. Syntax:

```sql
UPDATE student
SET date_of_birth = '1999-12-31'
WHERE ID = 1;
```

### Delete Data

To delete a record, use the `DELETE FROM` command. Syntax:

```sql
DELETE FROM student
WHERE ID = 3;
```

---

## Step 3: **Querying Data with DQL**

### Retrieve Data

Use the `SELECT` statement to query your tables. For example, to retrieve the name of the student with an `ID` of `1`:

```sql
SELECT first_name, last_name
FROM student
WHERE ID = 1;
```

This query would return the name **John Doe**.

---

## Key Takeaways

### SQL Sublanguages Recap:

- **DDL (Data Definition Language)**: Defines the database structure.
  - Commands: `CREATE`, `ALTER`, `DROP`.
- **DML (Data Manipulation Language)**: Handles data manipulation.
  - Commands: `INSERT`, `UPDATE`, `DELETE`.
- **DQL (Data Query Language)**: Retrieves data from the database.
  - Command: `SELECT`.

---

## What’s Next?

You’re now familiar with the basics of SQL syntax and sublanguages. As you continue to explore SQL, you’ll learn to:

- Perform more advanced queries with `SELECT`.
- Use joins to combine data from multiple tables.
- Manage database permissions with Data Control Language (DCL).

**Congratulations on taking your first step into the world of SQL!** 🚀

---

Here's a decorated and polished README for the content:

---

# 📚 Common SQL Commands

SQL (**Structured Query Language**) is the most widely used database query language, designed for retrieving and managing data in relational databases. It supports a variety of operations such as:

- Accessing data
- Describing data
- Manipulating data
- Managing user roles and permissions

SQL commands are grouped into **four categories** based on their functionality: **DDL, DML, DCL, and TCL**. This guide introduces these categories and the main commands under each.

---

## 🛠 Data Definition Language (DDL)

DDL commands define, modify, and delete the structure of a database and its tables.

### **1. CREATE Command**

**Purpose**: To create a database or table.  
**Syntax**:

```sql
CREATE TABLE table_name (
  column_name1 datatype(size),
  column_name2 datatype(size),
  column_name3 datatype(size)
);
```

### **2. DROP Command**

**Purpose**: To delete a database or table.  
**Syntax**:

```sql
DROP TABLE table_name;
```

### **3. ALTER Command**

**Purpose**: To modify the structure of a table.  
**Examples**:

- Add a column:
  ```sql
  ALTER TABLE table_name ADD column_name datatype(size);
  ```
- Add a primary key:
  ```sql
  ALTER TABLE table_name ADD PRIMARY KEY (column_name);
  ```

### **4. TRUNCATE Command**

**Purpose**: To remove all records from a table without deleting the table itself.  
**Syntax**:

```sql
TRUNCATE TABLE table_name;
```

### **5. COMMENT Command**

**Purpose**: To add comments to your SQL statements for documentation. Comments start with `--`.  
**Example**:

```sql
-- Retrieve all data from a table
SELECT * FROM table_name;
```

---

## 🔍 Data Query Language (DQL)

DQL commands query and retrieve data from the database.

### **SELECT Command**

**Purpose**: To retrieve data from a table.  
**Syntax**:

```sql
SELECT * FROM table_name;
```

---

## ✏️ Data Manipulation Language (DML)

DML commands handle data within tables.

### **1. INSERT Command**

**Purpose**: To add new records to a table.  
**Syntax**:

```sql
INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);
```

### **2. UPDATE Command**

**Purpose**: To modify existing records in a table.  
**Syntax**:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

### **3. DELETE Command**

**Purpose**: To delete records from a table.  
**Syntax**:

```sql
DELETE FROM table_name
WHERE condition;
```

---

## 🛡 Data Control Language (DCL)

DCL commands manage user permissions and access rights for a database.

### **1. GRANT Command**

**Purpose**: To give users specific permissions.  
**Example**:

```sql
GRANT SELECT, INSERT ON database_name TO user_name;
```

### **2. REVOKE Command**

**Purpose**: To remove user permissions.  
**Example**:

```sql
REVOKE SELECT, INSERT ON database_name FROM user_name;
```

---

## 🔄 Transaction Control Language (TCL)

TCL commands manage database transactions and changes made using DML commands.

### **1. COMMIT Command**

**Purpose**: To save all changes made in a transaction.  
**Syntax**:

```sql
COMMIT;
```

### **2. ROLLBACK Command**

**Purpose**: To undo changes made since the last `COMMIT`.  
**Syntax**:

```sql
ROLLBACK;
```

---

## 📖 Summary

### Categories of SQL Commands:

1. **DDL (Data Definition Language)**: Commands for database structure management.
   - Examples: `CREATE`, `DROP`, `ALTER`, `TRUNCATE`, `COMMENT`.
2. **DML (Data Manipulation Language)**: Commands to manipulate table data.
   - Examples: `INSERT`, `UPDATE`, `DELETE`.
3. **DCL (Data Control Language)**: Commands to manage user permissions.
   - Examples: `GRANT`, `REVOKE`.
4. **TCL (Transaction Control Language)**: Commands to manage database transactions.
   - Examples: `COMMIT`, `ROLLBACK`.

---

**Congratulations on mastering the basics of SQL commands!** 🌟 Continue exploring advanced examples to deepen your understanding of this powerful query language.

---

# **Tables Overview**

In this section, you’ll delve deeper into tables in a relational database. While you may already be familiar with the concept of tables and primary keys, here we’ll explore the structure, data types, primary and foreign keys, and table constraints in greater detail.

## **What is a Table?**

A table is the most basic type of database object in a relational database, designed to store data. Like a spreadsheet, it consists of rows and columns:

- **Rows:** Represent individual records, running horizontally.
- **Columns:** Represent fields or attributes, running vertically, with each having a name to describe the data it stores.
- **Cells:** Located at the intersection of a row and a column, they store individual data items.

---

## **Data Types**

Every column in a table must have a data type that defines the kind of data it can store. Here are some common data types:

### **1. Numeric Data Types:**

- `INT`, `TINYINT`, `BIGINT`, `FLOAT`, `REAL`.

### **2. Date and Time Data Types:**

- `DATE`, `TIME`, `DATETIME`.

### **3. Character and String Data Types:**

- `CHAR`, `VARCHAR`.

### **4. Binary Data Types:**

- `BINARY`, `VARBINARY`.

### **5. Miscellaneous Data Types:**

- **CLOB (Character Large Object):** For storing large text blocks.
- **BLOB (Binary Large Object):** For storing collections of binary data like images.

Example: A student table might have these columns and data types:

- `student_id (INT)`
- `first_name (VARCHAR)`
- `date_of_birth (DATE)`

---

## **Tables in a Relational Database**

In relational databases, multiple tables represent the system's backend structure. For instance, in a Student Information System, tables might include:

- **Student**
- **Teacher**
- **Class**
- **Subject**

Each table, also called a **relation**, consists of rows (or tuples) and has a schema, including:

- Table name
- Attributes and their names
- Data types

---

## **Primary Keys**

A **primary key** is a field (or combination of fields) that uniquely identifies each row in a table.

- **Example:** `student_id` in the Student table uniquely identifies each student.
- **Composite Primary Key:** Combines multiple columns to create a unique identifier (e.g., `EMP_ID` + `DEPT_ID`).

---

## **Foreign Keys**

Tables are linked using foreign keys, which reference the primary key in another table.

- **Example:** `student_id` in the Student table might also appear in the Department table as a foreign key, linking the two tables.

---

## **Integrity Constraints**

Constraints ensure the accuracy and reliability of data in the database.

### **1. Key Constraints:**

A primary key must:

- Be unique for each row.
- Never be NULL.

### **2. Domain Constraints:**

Define valid values for a column. For instance:

- A contact number must not exceed 10 digits.

### **3. Referential Integrity Constraints:**

Foreign key values must exist in the referenced primary key column.

---

In summary, tables are the backbone of relational databases, providing structure, defining data types, and ensuring data integrity through constraints. Understanding these concepts is crucial for efficient database management.

---

This decorated version includes headers, lists, and examples to enhance readability and understanding. Let me know if you'd like to add more details or format it differently!

---

Here’s a well-decorated version of your content for a README file:

---

# **Database Structure Overview**

In this section, you'll explore the fundamental structure of a database. You’ve already been introduced to the concepts of tables, data types, primary and foreign keys, and table constraints. Now, we'll take a closer look at tables, fields, records, keys, and table relationships—the core components of a database structure.

---

## **What is Database Structure?**

The **database structure** refers to how data is organized within a database. Related data is grouped into tables, which consist of:

- **Rows (tuples):** Represent individual records.
- **Columns:** Define the attributes or fields of a table.

### Key Components of Database Structure:

1. **Tables (Entities):** Where all the data is stored.
2. **Attributes:** Details or properties that describe the table.
3. **Fields:** Columns that capture attributes.
4. **Records:** Rows of data representing individual entities.
5. **Primary Key:** A unique identifier for each entity in the table.

---

## **Understanding the Table Structure**

### **1. Tables**

A **table** contains all the fields, attributes, and records for a type of entity. A database typically consists of multiple tables.

### **2. Fields (Columns)**

Column headings, known as fields, represent the attributes of a table.

- Each field contains a **data type**, determining the kind of data stored.
- Example: `agent_name` might have a **text** data type, while `commission` could have a **numeric** data type.

### **3. Column Values (Units of Data)**

Each piece of data in a column is called a **unit of data** or **column value**.

### **4. Records (Rows)**

A **record** is a collection of column values for an entity, stored as a row in the table.

---

## **Data Types in Databases**

To ensure consistency, each column is assigned a data type, which determines the kind of data stored and the operations that can be performed on it.

### Common Data Types:

1. **Numeric:** `INT`, `TINYINT`, `BIGINT`, `FLOAT`, `REAL`.
2. **Date and Time:** `DATE`, `TIME`, `DATETIME`.
3. **Character and String:** `CHAR`, `VARCHAR`.
4. **Binary:** `BINARY`, `VARBINARY`.
5. **Miscellaneous:**
   - **CLOB (Character Large Object):** For storing large text blocks.
   - **BLOB (Binary Large Object):** For storing binary data like images.

---

## **Logical Database Structure**

The **logical structure** of a database is often represented using an **Entity Relationship Diagram (ERD)**. This diagram visually depicts:

- How entities are related to each other.
- How relationships are established between entity instances.

### Types of Relationships (Cardinality):

1. **One-to-One:** Each entity in one table is related to one entity in another table.
2. **One-to-Many:** One entity in a table relates to multiple entities in another table.
3. **Many-to-Many:** Multiple entities in one table relate to multiple entities in another table.

---

## **Physical Database Structure**

The **physical structure** of a database is where logical entities are implemented as tables in a Database Management System (DBMS) like MySQL or Oracle.

### **Relationships Using Keys:**

- A **foreign key** links one table to another.
- Example: In a database with `student` and `department` tables, the `student` table’s primary key (`Stud_id`) can also serve as a foreign key in the `department` table to establish a relationship.

---

## **Summary**

In this section, you explored the basic database structure, including:

- Tables and their components (fields, records, and keys).
- Data types and their importance in defining column values.
- Logical and physical structures, including relationships between tables through primary and foreign keys.

Understanding these foundational concepts is essential for designing and managing databases effectively.

---

This version enhances readability with headers, bullet points, and structured sections to make the information clear and engaging. Let me know if you'd like any further tweaks!

---

Here’s a polished and well-structured version for a README file:

---

# **Understanding Numeric Data Types in Databases**

Database tables store data in rows and columns, but how do you ensure each column only accepts the correct type of data? For example, how do you make sure a cost column stores decimal values while a product quantity column only accepts positive whole numbers? This is where **data types** come into play.

---

## **What Are Data Types?**

A **data type** specifies the kind of data a column in a database table can store. It tells the Database Management System (DBMS), like MySQL, how to interpret and handle the column's values.

### **Why Are Data Types Important?**

- They ensure data is stored in the right format.
- They enforce that the values entered into each column meet the expected type.
- They enable consistency and reliability across your database.

---

## **Common Data Types**

The most commonly used data types include:

1. **Numeric Data Types:** For storing numbers.
2. **String Data Types:** For storing text.
3. **Date and Time Data Types:** For storing date and time information.

---

## **Numeric Data Types**

**Numeric data types** are used to store numbers in a database. They play a crucial role in maintaining data accuracy for columns requiring numeric values.

### **Key Numeric Data Types**

1. **Integer Data Type**

   - Stores whole numbers.
   - Example: The `product_quantity` column in a table might be defined as an integer data type because it holds only whole numbers.
   - **Behavior:** If a fractional value is entered, the database rounds it to the nearest whole number.

2. **Decimal Data Type**
   - Stores numbers with fractional values.
   - Example: The `total_price` column in a table could be defined as a decimal data type because it holds numbers like `$80.90`.
   - **Behavior:** Whole numbers can also be inserted, and the database adds a fractional value of `.0` automatically.

---

### **Numeric Data Type Example**

Consider a table from an online store's database:

| **Column Name**    | **Data Type** | **Example Value** |
| ------------------ | ------------- | ----------------- |
| `customer_name`    | String        | John Doe          |
| `order_date`       | Date          | 2024-12-05        |
| `product_quantity` | Integer       | 5                 |
| `total_price`      | Decimal       | 80.90             |

---

## **Integer and Decimal Types in DBMS**

Different DBMSs support variations of integer and decimal types to handle specific storage and range requirements.

### **Integer Variations** (MySQL Example)

- **TINYINT:** For very small integers (max value: 255).
- **INT:** For large integers (max value: over 4 billion).

### **Decimal Variations**

- Designed for precise fractional values.
- Often used in financial applications.

**Tip:** Some DBMSs allow columns to enforce positive-only values, increasing the maximum storable value.

---

## **Summary**

In this section, you learned:

- The role of data types in databases.
- How numeric data types (integer and decimal) work.
- The differences between integer and decimal data types, along with their behavior and use cases.

By understanding numeric data types, you can design database tables that are both efficient and accurate. Great work!

---

Here’s a refined and well-decorated version of the text for your README file:

---

# **Understanding String Data Types in Databases**

When creating a table in a database, it’s crucial to define the **column names** and the **data types** for the data that will be stored. One such data type, the **string data type**, is used when columns need to accept text, numeric, or special characters.

This guide explains the **string data type**, its variations, and how it ensures data integrity. By the end, you'll understand how to differentiate between **CHAR** and **VARCHAR** data types.

---

## **What Are String Data Types?**

String data types allow database columns to store text-based data. This includes:

- **Alphabet characters** (e.g., names).
- **Numeric characters** (e.g., usernames).
- **Special characters** (e.g., passwords, email addresses).

### **When to Use String Data Types**

String data types are ideal for storing:

- Names or descriptive information.
- Alphanumeric data like usernames.
- Mixed data types like passwords or email addresses.

---

## **String Data Types: CHAR vs. VARCHAR**

Two of the most commonly used string data types are **CHAR** and **VARCHAR**. Here’s how they differ:

### **CHAR (Character)**

- **Fixed Length:** CHAR fields have a predetermined, fixed length.
- **Definition:** Specified as `CHAR(n)` where `n` is the length in characters.
- **Use Case:** Best for columns with a consistent, predefined length.
- **Example:**  
  For a `username` column in a `student` table:
  ```sql
  username CHAR(50);
  ```
  - A username like `Mark123` (7 characters) will still occupy 50 characters due to the fixed length.

### **VARCHAR (Variable Character)**

- **Variable Length:** VARCHAR fields can store data of varying lengths up to a specified maximum.
- **Definition:** Specified as `VARCHAR(n)` where `n` is the maximum length in characters.
- **Use Case:** Best when the length of data is unpredictable.
- **Example:**  
  For a `student_name` column:
  ```sql
  student_name VARCHAR(50);
  ```
  - A name like `Mark Simpson` will occupy only as much space as needed (13 characters), saving storage compared to CHAR.

---

## **Other String Data Types**

Here are some additional string data types for specific needs:

- **TINYTEXT:** Stores up to 255 characters. Ideal for short paragraphs or brief descriptions.
- **TEXT:** Stores up to 65,000 characters. Suitable for larger text, like articles.
- **MEDIUMTEXT:** Stores up to 16.7 million characters. Useful for text-heavy content, like books.
- **LONGTEXT:** Stores up to 4 gigabytes of text. Designed for exceptionally large text datasets.

---

## **Example: String Data Types in a Student Table**

Here’s an example of how string data types might be applied in a `student` table for a college database:

| **Column Name** | **Data Type**  | **Example Value**        |
| --------------- | -------------- | ------------------------ |
| `student_name`  | `VARCHAR(50)`  | Mark Simpson             |
| `username`      | `CHAR(50)`     | Mark123                  |
| `password`      | `VARCHAR(255)` | !MarkSimpson@123         |
| `email_address` | `VARCHAR(255)` | mark.simpson@example.com |

---

## **Summary**

In this guide, you learned:

- The role of string data types in databases.
- The differences between CHAR and VARCHAR.
- When to use other string data types like TINYTEXT or LONGTEXT.

With this knowledge, you can ensure your database tables use the most efficient and appropriate data types for storing string-based data. Great work!

---

# **Understanding Database Constraints**

To ensure the **accuracy** and **reliability** of the data in your database, it's essential to restrict the type of data that can be inserted into your tables. This guide explores the purpose of **database constraints** and focuses on the **NOT NULL** and **DEFAULT** constraints.

By the end, you'll understand how to enforce rules that maintain data integrity and set default values for specific columns.

---

## **What Are Database Constraints?**

Database constraints are rules that limit the type of data that can be stored in a table. These rules:

- Ensure all inserted data is valid and reliable.
- Prevent operations that violate the constraints.

For example, attempting to insert invalid data will result in the database rejecting the operation.

### **Types of Constraints**

Constraints can be applied:

1. **Column-Level Constraints:** Rules apply to specific columns.
2. **Table-Level Constraints:** Rules apply to the entire table.

One example of a table-level constraint is the **foreign key constraint**, which maintains links between tables.

---

## **Common Database Constraints**

### **1. NOT NULL Constraint**

The `NOT NULL` constraint ensures that a column cannot contain an empty value. It enforces the rule that fields must always be completed.

#### **Example: Customer Table**

Consider a table called `customer` that records customer information for an online store.

- **Columns:**
  - `customer_id` (must contain numeric values).
  - `customer_name` (must contain string values).
- Both columns are defined with the `NOT NULL` constraint, ensuring no empty fields.

#### **SQL Statement:**

```sql
CREATE TABLE customer (
    customer_id INT NOT NULL,
    customer_name VARCHAR(255) NOT NULL
);
```

#### **Behavior:**

- Any attempt to insert a `NULL` value into these columns will fail.

---

### **2. DEFAULT Constraint**

The `DEFAULT` constraint assigns a default value to a column if no value is provided during an insert operation.

#### **Example: Player Table**

Imagine a table called `player` for a football club's database:

- **Columns:**
  - `player_name` (cannot be empty, enforced by `NOT NULL`).
  - `city` (defaults to "Barcelona" if no value is provided).

#### **SQL Statement:**

```sql
CREATE TABLE player (
    player_name VARCHAR(255) NOT NULL,
    city VARCHAR(255) DEFAULT 'Barcelona'
);
```

#### **Behavior:**

- If a new player's city is not specified, the database will automatically insert "Barcelona" into the `city` column.

---

## **How Constraints Maintain Data Integrity**

- **NOT NULL:** Prevents missing data in essential fields, ensuring all records are complete.
- **DEFAULT:** Simplifies data entry by reducing redundancy and providing meaningful default values.

---

## **Summary**

In this guide, you’ve learned:

- **The purpose of database constraints:** Enforcing rules on columns and tables to maintain data integrity.
- **NOT NULL constraint:** Ensures fields are never left blank.
- **DEFAULT constraint:** Automatically inserts predefined values when no input is provided.

By applying constraints effectively, you can create robust, reliable, and accurate databases. Great work!

---

# **Creating Tables in SQL**

Organizing data effectively is crucial when working with large datasets. With **SQL**, you can create tables to structure and manage your data efficiently. This guide explains the **CREATE TABLE** syntax and provides practical tips for creating database tables.

---

## **The CREATE TABLE Syntax**

The `CREATE TABLE` statement is a part of SQL's **Data Definition Language (DDL)** and is used to create a new table within a database. Here's the basic syntax:

```sql
CREATE TABLE table_name (
    column_name1 datatype(size),
    column_name2 datatype(size),
    ...
);
```

- **`table_name`**: The name of the table.
- **`column_name`**: The name of each column/field in the table.
- **`datatype(size)`**: Specifies the data type and size/length of data the column can store.

---

## **Important Points for Creating Tables**

1. **Meaningful Naming**:

   - Assign descriptive names to tables and columns for clarity.

2. **Data Types May Vary**:

   - Different database systems may use different data types. For example:
     - MySQL: `INT`, `VARCHAR`.
     - Oracle: `NUMBER`.

3. **Appropriate Data Lengths**:

   - Specify lengths for data types like `VARCHAR`.
   - Example:
     - `VARCHAR(100)` can store up to 100 characters.

4. **Choose Efficient Data Types**:
   - Use `VARCHAR` for text-based data.
     - Example: Storing the name "Jen" in a `VARCHAR(100)` column uses **5 bytes** (3 for the text, 2 for length).

---

## **Practical Example: Creating a Customer Table**

Let’s create a table named `customers` to store customer information for a bookstore database.

### **Table Fields**

The table will include the following fields:

- **CustomerId**: Unique identifier for each customer.
- **FirstName**: Customer's first name.
- **LastName**: Customer's last name.
- **Company**: The customer's company (if applicable).
- **Address**, **City**, **State**, **Country**, **PostalCode**: Customer's contact details.
- **Phone**, **Fax**, **Email**: Communication details.

### **SQL Statement**

```sql
CREATE TABLE customers (
    CustomerId INT,
    FirstName VARCHAR(40),
    LastName VARCHAR(20),
    Company VARCHAR(80),
    Address VARCHAR(70),
    City VARCHAR(40),
    State VARCHAR(40),
    Country VARCHAR(40),
    PostalCode VARCHAR(10),
    Phone VARCHAR(20),
    Fax VARCHAR(20),
    Email VARCHAR(50)
);
```

- **`INT`**: Used for numeric data (`CustomerId`).
- **`VARCHAR(size)`**: Used for string data with a maximum length (`FirstName`, `Email`, etc.).

---

## **Additional Commands for Database Management**

1. **Creating a Database**  
   Use the `CREATE DATABASE` command to create a database before creating tables.

   ```sql
   CREATE DATABASE bookstore;
   ```

2. **Dropping a Database**  
   Use the `DROP DATABASE` command to delete an existing database.

   ```sql
   DROP DATABASE bookstore;
   ```

3. **Altering Tables**  
   Modify the structure of an existing table using `ALTER TABLE`.
   ```sql
   ALTER TABLE customers ADD COLUMN Age INT;
   ```

---

## **Summary**

- Use the **`CREATE TABLE`** command to organize data in your database.
- Follow best practices like meaningful naming, efficient data types, and appropriate lengths.
- Use supplementary commands like **`CREATE DATABASE`**, **`DROP DATABASE`**, and **`ALTER TABLE`** for comprehensive database management.

By mastering these SQL concepts, you can structure your data effectively and build reliable, scalable databases. Great job!

---

# **Altering Tables in SQL**

Database tables are rarely static. Developers often need to **restructure tables** to meet new requirements, such as adding or removing columns or modifying column attributes. This guide introduces the **SQL ALTER TABLE** statement and demonstrates its use with examples.

---

## **The ALTER TABLE Syntax**

The `ALTER TABLE` statement is a powerful SQL command that enables developers to modify the structure of an existing table. Here’s the basic syntax:

```sql
ALTER TABLE table_name
    [ADD column_name datatype(size)]
    [DROP COLUMN column_name]
    [MODIFY column_name datatype(size)];
```

### **Key Commands**:

- **`ADD`**: Adds a new column to the table.
- **`DROP COLUMN`**: Deletes a column from the table.
- **`MODIFY`**: Changes the attributes (e.g., data type or size) of an existing column.

---

## **Practical Example: Altering a Students Table**

Let’s work with a `students` table in a database called `college`. The table currently stores the following fields:

- **StudentID**: Unique identifier for each student.
- **Name**: The student's name.
- **Email**: The student's email address.

---

### **Adding New Columns**

We want to add three new columns:

- **`age`**: Stores student age (integer).
- **`country`**: Stores country names (text, up to 50 characters).
- **`nationality`**: Stores nationality (text, up to 255 characters).

Here’s the SQL command:

```sql
ALTER TABLE students
    ADD (
        age INT,
        country VARCHAR(50),
        nationality VARCHAR(255)
    );
```

- **`INT`**: For numeric values (`age`).
- **`VARCHAR(size)`**: For text with a specified maximum length (`country`, `nationality`).

### **Result**:

The `students` table now includes the `age`, `country`, and `nationality` columns.

---

### **Removing a Column**

If we decide the `nationality` column is redundant, we can remove it using:

```sql
ALTER TABLE students
    DROP COLUMN nationality;
```

- **`DROP COLUMN`**: Deletes the specified column from the table.

### **Result**:

The `nationality` column is removed from the `students` table.

---

### **Modifying a Column**

Suppose we need to increase the length of the `country` column from **50** characters to **100**. Here’s the command:

```sql
ALTER TABLE students
    MODIFY country VARCHAR(100);
```

- **`MODIFY`**: Updates the data type or length of a column.

### **Result**:

The `country` column can now hold up to **100 characters**.

---

## **Important Points to Remember**

1. **Ensure a Database Exists**:

   - You must have a database and table before you can alter a table.

2. **Plan Restructuring Carefully**:

   - Removing columns will permanently delete the data in them.
   - Ensure backups are in place if necessary.

3. **Verify Data Types and Limits**:
   - Use the appropriate data types for your database system (e.g., `VARCHAR` for text).
   - Set realistic limits for character-based fields to optimize storage.

---

## **Summary**

The `ALTER TABLE` statement allows you to:

- **Add** new columns.
- **Remove** unwanted columns.
- **Modify** column attributes such as data type or size.

### Example Workflow:

1. **Start with a database**: Ensure you have a database and a table to work with.
2. **Use the correct syntax**: Follow the `ALTER TABLE` syntax carefully for each action.
3. **Test and confirm changes**: Always verify the updated table structure.

By mastering the `ALTER TABLE` statement, you can dynamically restructure your tables to meet evolving database needs. Great job on taking the next step in your SQL journey!

---

Here’s a well-decorated version of your README content for better readability and structure:

---

## SQL for Managing Data in Databases

When working with databases, you often need to add new rows and columns to existing tables or even create new tables from scratch. For example, in a college database, you'll have to add new rows for every new student. SQL allows you to perform these tasks quickly with the `INSERT` statement.

### Insert Data with SQL

By the end of this tutorial, you'll be able to:

- **Identify and understand SQL insert syntax**
- **Insert data into tables with the `INSERT INTO` clause**

#### Insert Into Syntax

To write an `INSERT` statement:

1. Start with the `INSERT INTO` clause, followed by the table name.
2. Specify the columns inside parentheses, separated by commas.
3. Use the `VALUES` keyword and provide a list of values within parentheses.

**Example:**

```sql
INSERT INTO players (ID, Name, Age, StartDate)
VALUES (1, 'Yuval', 25, '2020-10-15');
```

### Insert Multiple Rows

To insert multiple rows:

1. Start with the `INSERT INTO` clause and table name.
2. Use the `VALUES` keyword.
3. Add multiple rows inside parentheses, separated by commas.

**Example:**

```sql
INSERT INTO players (ID, Name, Age, StartDate)
VALUES
  (2, 'Mark', 27, '2020-10-12'),
  (3, 'Karl', 26, '2020-10-07');
```

### Show Data from the Table

To retrieve data from the `players` table, you can use a `SELECT` statement. Here's an example to display all columns from the `players` table:

```sql
SELECT * FROM players;
```

### SQL `UPDATE` Statement

To update an existing record, use the `UPDATE` statement.

**Example:**

```sql
UPDATE student_table
SET homeAddress = 'New Address', contactNumber = '123456789'
WHERE ID = 3;
```

### Delete Data with SQL

To remove a record, use the `DELETE` statement. If you want to delete all records from a table without deleting the table itself, use:

```sql
DELETE FROM student_table;
```

For deleting a specific record, use:

```sql
DELETE FROM student_table
WHERE lastName = 'Miller';
```

For deleting multiple records:

```sql
DELETE FROM student_table
WHERE department = 'Engineering';
```

### Important Notes:

- **Use `WHERE` cautiously**: If you omit the `WHERE` clause, all rows in the table will be affected.
- **Order of Values**: When inserting data, ensure that the values match the columns' order in the table.

---

By following this structure, you can efficiently manage data in SQL. Happy coding!

---

# AsyncStorage in Detail

In this reading, you’ll learn about the limitations of **AsyncStorage**. You’ll also explore **Create**, **Read**, **Update**, and **Delete (CRUD)** methods to update and delete data, with examples of code.

So far, you've been introduced to the basic APIs to interact with the **AsyncStorage** library. These APIs perform read and write operations into storage. Let’s dive into updating and deleting data to complete the CRUD picture.

## Updating Data

Updating data can be done with one of two APIs: `setItem` or `mergeItem`.

- **setItem**: When using `setItem` with an existing key, the value provided replaces the previously stored value, resulting in an **override operation**.
- **mergeItem**: `mergeItem` performs a **merge operation** and assumes that the stored value is a stringified JSON. The main difference is that `mergeItem` requires you to only pass the updated values under a given key and **not the whole object** again.

Let’s illustrate the difference with some code snippets.

Imagine you are storing the following stringified JSON under the key `preferences`, which represents the chosen user preferences for communication purposes:

```js
const userPreferences = {
  pushNotifications: true,
  emailNotifications: true,
  smsNotifications: false
}
```

The user has decided to opt-in for SMS notifications as well. Reflecting the new preferences can be done using two different methods.

### Using the `setItem` Method

With `setItem`, you would have to pass the whole object again as the value to be stored:

```js
const updatePreferences = async (userPreferences) => {
  try {
    const jsonValue = JSON.stringify(userPreferences)
    await AsyncStorage.setItem('preferences', jsonValue)
  } catch (e) {
    // Handle error
  }
}

const newPreferences = {
  pushNotifications: true,
  emailNotifications: true,
  smsNotifications: true // Updated preference
}
```

### Using the `mergeItem` Method

The second method is `mergeItem`. As previously mentioned, this requires the updated values to be passed and not the whole object:

```js
const mergePreferences = async (userPreferences) => {
  try {
    const jsonValue = JSON.stringify(userPreferences)
    await AsyncStorage.mergeItem('preferences', jsonValue)
  } catch (e) {
    // Handle error
  }
}

const newPreferences = {
  smsNotifications: true // Only the updated value
}
```

## Deleting Data

What about **deleting** data? When it comes to deleting data, **AsyncStorage** offers the `removeItem` API, which removes data under a given key.

For example, if the user wants to reset the application data, you can clean up everything that was in storage by using `removeItem`. Here’s how it works with the user preferences example:

```js
const deletePreferences = async () => {
  try {
    await AsyncStorage.removeItem('preferences')
  } catch (e) {
    // Handle error
  }
}

deletePreferences()
```

## Editing Multiple Entries with `multi`

So far, all the methods explored support operating under a **single key**. In some cases, you may want to perform operations in batches to either save, update, read, or delete multiple entries in one single API call.

For these specific APIs, the word **multi** is used at the beginning as the convention. APIs for multiple entries are:

- `multiGet`
- `multiSet`
- `multiMerge`
- `multiRemove`

You can learn more about them in the additional resources of this lesson.

## Deleting All Data

Finally, **AsyncStorage** provides an API method to remove all its data. This method is called `clear()`.

Here’s an example of how to use it:

```js
const clearAllData = async () => {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    // Handle error
  }
}
```

It is important to keep in mind that `clear()` removes **all the keys**. So, if you want to delete a subset only, use the `removeItem` or `multiRemove` API methods.

## Conclusion

In this reading, you gained a holistic view of CRUD operations by unpacking the various methods to **update** and **delete** data. This includes updating data with `setItem` and `mergeItem`, editing multiple entries at once by appending the **multi** keyword, and deleting data with `removeItem` and `clear()`.

---

## Contributors

> Hooks/useUpdateEffect.tsx

```tsx
import { useRef, useEffect, EffectCallback, DependencyList } from 'react'

/**
 * A custom useEffect hook that only triggers on updates, not on the initial mount.
 *
 * @param effect - The effect function to be executed after updates.
 * @param dependencies - The dependency array that determines when the effect runs.
 */
export default function useUpdateEffect(
  effect: EffectCallback,
  dependencies: DependencyList = []
): void {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      return effect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
```

```tsx
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import Constants from 'expo-constants'
import { Switch } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

import useUpdateEffect from '@/Hooks/useUpdateEffect'

interface Preferences {
  pushNotifications: boolean
  emailMarketing: boolean
  latestNews: boolean
}

export default function App() {
  const [preferences, setPreferences] = useState<Preferences>({
    pushNotifications: false,
    emailMarketing: false,
    latestNews: false
  })

  useEffect(() => {
    // Populating preferences from storage using AsyncStorage.multiGet
    ;(async () => {
      try {
        const keys = Object.keys(preferences)
        const values = await AsyncStorage.multiGet(keys)
        const initialState = values.reduce<Preferences>(
          (acc, [key, value]) => {
            if (key && value !== null) {
              acc[key as keyof Preferences] = JSON.parse(value)
            }
            return acc
          },
          { ...preferences }
        )
        setPreferences(initialState)
      } catch (e) {
        Alert.alert(`An error occurred: ${(e as Error).message}`)
      }
    })()
  }, [])

  // This effect only runs when the preferences state updates, excluding initial mount
  useUpdateEffect(() => {
    ;(async () => {
      const keyValues: [string, string][] = Object.entries(preferences).map(
        ([key, value]) => [key, JSON.stringify(value)]
      )
      try {
        await AsyncStorage.multiSet(keyValues)
      } catch (e) {
        Alert.alert(`An error occurred: ${(e as Error).message}`)
      }
    })()
  }, [preferences])

  const updateState = (key: keyof Preferences) => () => {
    setPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Preferences</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Push notifications</Text>
        <Switch
          value={preferences.pushNotifications}
          onValueChange={updateState('pushNotifications')}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Marketing emails</Text>
        <Switch
          value={preferences.emailMarketing}
          onValueChange={updateState('emailMarketing')}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Latest news</Text>
        <Switch
          value={preferences.latestNews}
          onValueChange={updateState('latestNews')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16
  },
  text: {
    fontSize: 18
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
```
