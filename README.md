# HNG-Backend-Stage-2
## Persons API
The Persons API is a simple and lightweight RESTful API that allows you to manage a collection of individuals with their unique identifiers (IDs) and names. This API serves as a foundation for storing and retrieving basic information about people, making it useful for a variety of applications such as address books, user profiles, or any system that requires the management of individual entities.

Key Features:

1. Create: Add new persons to the database by providing a unique ID and their name.

1. Read: Retrieve person information using their ID or retrieve a list of all persons in the database.

1. Update: Modify a person's name by specifying their ID.

1. Delete: Remove a person from the database based on their ID.

1. Validation: Ensure that each person has a unique ID and a valid name.

The Person API is designed for simplicity and flexibility, making it easy to integrate into your projects that require basic person management functionality.




## Prerequisites


Before you can use this API, make sure you have the following prerequisites installed and configured on your system:

- **Node.js**: You should have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/en).

- **npm (Node Package Manager)**: npm usually comes bundled with Node.js. You can check if it's installed by running npm -v in your terminal.

- **MongoDB**: This API relies on MongoDB for data storage. Make sure you have MongoDB installed and running. You can download it from [mongodb.com](https://www.mongodb.com/).

That's it! Once you have these prerequisites in place, you'll be ready to set up and use the API.

## Getting Started

To quickly start using this API, follow these simple steps:

### Installation

1. **Clone this repository**:

   ```bash
   git clone https://github.com/PaschalPM/hng_backend-stage2.git
   ```
2.  **Install Dependencies**: Use npm to install the required dependencies for the API:
    ```bash
    npm install
    ```
3. **Configuration**: Customize the API configuration by creating a .env file in the root directory. For example:
    ```bash
    PORT=5000
    MONGO_URI=mongodb//localhost:27017/your-database-name
    ```
    Adjust these variables according to your project's requirements.
4.  **Uncomment**: Head to app.js and uncomment lines 14 to 17.
5.  **Run the API**: Start the API by running the following command:
    ```
    npm start
    ```
Your API will be accessible at http://localhost:5000 (or the specified port).

That's it! You're now ready to use the API to manage person resources.
    
## Documentation
> Link to [documentation]('https://github.com/PaschalPM/hng_backend-stage2/blob/main/DOCUMENTATION.md').

## UML Diagram
> Link to [diagram]('https://excalidraw.com/#json=v0S6BiIBkwmj1jbaKrQQe,-TGlV4HKkBB7E0ScF4QJ7A').
