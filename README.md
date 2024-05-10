# Drug Store App

This is a sample e-commerce application for drugstore products. It allows users to browse a paginated list of drugs, add items to their shopping cart, and proceed to the checkout to view order details.

## Features

- **Pagination**: The drug list is paginated, allowing users to navigate through different pages.
- **Shopping Cart**: Users can add items to their cart and view them on the checkout page.
- **ISR**: The drug list page uses Incremental Static Regeneration for efficient data fetching.
- **Next.js with TypeScript**: The project is built with Next.js and TypeScript for a robust development experience.
- **Mock API with JSON Server**: I use `json-server` to mock RESTful APIs.

## Prerequisites

- Node.js (latest LTS version recommended)
- NPM or Yarn package manager

## Getting Started

To get started with the project, follow these steps:

### Clone the Repository

````bash
git clone https://github.com/cherryDevloper/DrDrNextTest.git
cd drdr-test-app


#### Install Dependencies
````bash
npm install

# To mock the API, you need to start the JSON server in a separate terminal window:
````bash
npm run start-json-server
#This will start a JSON server at http://localhost:4000/.

### Start the Next.js Development Server
````bash
npm run dev


