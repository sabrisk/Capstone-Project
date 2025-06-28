# Project Proposal: Gift Coordination App

### Tech Stack

-   Frontend (Web):
    -   React: For building the web application, ensuring a consistent and interactive
        user experience across platforms.
-   Backend:
    -   Node.js with Express: For handling API requests, server-side logic, and
        integration with the database.
-   Database:
    -   MongoDB: A NoSQL database to store and manage static content and any
        additional data needed by the application.
-   Hosting:
    -   Unknown

### Focus of the Project

The project will be an evenly focused full-stack application, integrating both frontend and
backend components.

### Project Type

-   Website: A responsive web application accessible through modern browsers.

### Project Goal

My project will be designed to achieve the goal of making the coordination of gift giving/receiving easier. It will serve as a helpful tool to allow people to avoid things like duplicate gifts, trouble finding gifts, and gifts being purchased that the recipient doesn't want.

### User Demographic

The primary users of the app will be:

-   Anyone looking to coordinate gift giving whether they're shopping for someone else, or if they're receiving gifts and want to make it easier for those purchasing to find what they want.

### Data and API

-   Data: The data, at least initially, will all be user generated. They will provide gift names, descriptions, etc. As a stretch goal, it may connect to an api or fake api for product data.
-   Data Collection: Most data collection will be collected via form input from users, however future data collection may involve connecting to an external API.
-   Internal API: The API will provide endpoints for retrieving the user-generated content, The API will be custom-built.

### Project Approach

1. Database Schema
    - Content: Stores event, users, gifts, event participants, reservations, and notifications
2. Potential API Issues
    - Scalability: Handling increasing amounts of data and user requests efficiently
    - Error Handling: Managing and reporting API errors to ensure a smooth user
      experience
3. Sensitive Information
    - Email, passwords, and potentially even gifts should be treated as sensitive information. Possibly even names if shoppers should be anonymous to each other
4. Functionality

-   Authentication: Users can log in with email and password
-   Event Creations: Users can create events and add/remove participants (shoppers/recipients)
-   Content Display: Users can view events and gifts to be purchased.
-   Search and Filter: Users can search for and filter gifts
-   Email/notifications: Users should receive e-mail invites which direct them to account creation as well as e-mail notifications based on events in app
-   Reservations: Users can mark gifts as reserved or purchased.
-   Adding gifts: Shoppers and recipients can add/remove gifts for others to see. (Shopper added gifts should be hidden from the recipeint by default unless otherwise specified )

5. User Flow

-   Events: Displays events that users are participants of
-   Event Details: For shoppers, it displays the recipients being shopped for and the gifts they each want. Shoppers can add gift ideas for themselves or others. Shoppers can mark gifts as reserved/purchased. For recipients, they will see a list of gifts they've added which they can edit or delete.

6. Stretch Goals

-   Chat Support: Give shoppers the ability to chat with each other for each recipient's list of gifts. Possibly also give shoppers the ability to ask questions to recipients via direct message once they reserve a gift.
-   Product API or product scraping: Give the ability for users to paste an amazon link to autofil product information for a gift instead of having to type it manually
-   Browser Extension: A browser extension that allows easy adding of a product if on that product page on Amazon.
-   LLM Gift Suggestions: Give users the ability to request gift ideas from an integrated LLM.
