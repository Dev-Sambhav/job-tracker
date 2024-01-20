
# Job Tracker Site built using MERN Stack

Job Tracker is a simple and efficient web application designed to help users organize and manage their job search process. Keep track of job applications, interviews, and important deadlines in one central hub. Streamline your job hunting experience with Job Tracker's intuitive interface and powerful features.

## Key Features

* __Application Management__: Easily add, update, and organize job applications.
* __Interview Tracking__: Record and monitor upcoming interviews.
* __User-Friendly Interface__: Intuitive design for a seamless user experience.

## Tech Stack

**Client:** React js, Styled-Components

**Server:** Node js, Express js

## Environment Variables

To run this project, you need to set up the following environment variables in a `.env` file. Create a file named `.env` in the root of your project and add the following:

```plaintext
PORT = 5000
MONGOOSE_URL = your_database_url
JWT_SECRET= your_jwt_secret
JWT_LIFETIME=1d
```

## Local Setup

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js and npm installed on your machine. You can download them [here](https://nodejs.org/).

### Clone the Repository

```bash
git clone https://github.com/your-username/job-tracker.git
cd your-project
```

### Install dependencies

```bash
  npm run install-client
  npm install
```
### Set Up Environment Variables
Create a .env file in the root of the project and add the necessary environment variables. Refer to the Environment Variables section in this README for details.

### Start the Application
 ```bash
    npm run start <!-- This will start both client and server -->
```

### Note
Do not commit your .env file to version control systems. Make sure to add it to your .gitignore file to keep sensitive information secure.

### Repo Activity

![Activity](https://repobeats.axiom.co/api/embed/51b27f8c91edf92dc5ab5b3929acc8d3630a5dd9.svg "Repobeats analytics image")
