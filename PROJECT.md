## The Problem

You are to build a system to manage books, customers, orders, and payments.

Only authenticated users can make orders

## The Database Design
Books: BookID(PK), Title, Author, Price

Customers: CustomerID(PK), Name, Email, PasswordHash, isAdmin

Orders: OrderID(PK), CustomerID(FK), CreatedAt, TotalPrice

orderItems: orderItemID(PK), orderID(FK), BookID(FK),Quantity, Price

Payments: PaymentID(PK), orderID(FK), PaymentAmount, PaymentDate


### NOTE
A Customer can have many orders.(One to many relationship)
An order can have many orderItems.
An order has one Payment
An orderItem refers to one Book.

## Connect to the Database

Use a Sequelize ORM to mao your entitles to the database tables

This will handle the database connections and allow you to work with objects in your code.

## Add API Endpoints

GET /books: Retrieve all books

POST /books: Add a new book(Admin only)

DELETE /books/{bookId} : Delete a book by ID(Admin only)

GET /orders: Retrieve all orders(Admin only).

POST /orders: create a new book

GET /orders/{orderId}: Retrieve a specific order

POST /payments: Process a payment for an order.


## Aunthentication

Use JWT(JSON Web Token) to handle use aunthentication.

Users will log in, receive a token, and use that token for the nesxt requests

## Logging

Configure a Log middleware for monitoring and debugging

## Testing

Use Postman to verify that your endpoints are working and publish your postman document to be view as part of your README contents

