# Imagigenius 🌟📷 [(Live)](https://imagi-genius.vercel.app/)

Imagigenius is a Next.js project that leverages TypeScript, Tailwind CSS, Clerk, MongoDB, Zod, Stripe, and various AI integrations (like Cloudinary) to provide image enhancement and manipulation functionalities. Users can register and interact with the system to enhance, modify, or process images using AI-powered features.

## Features 🚀

### User Authentication 🔐

Users can create accounts or sign in using email/password, Google, or GitHub authentication provided by Clerk.

### Image Manipulation Functionalities 🖼️

1. **Image Restore**: Enhance the quality of images using AI.
2. **Generative Fill**: Change the aspect ratio of images without altering the content using Cloudinary AI.
3. **Object Remove**: Remove selected objects from images using AI.
4. **Object Recolor**: Recolor specific parts of images.
5. **Background Remove**: Remove image backgrounds and generate PNGs.

### Credit System 💳

Users have a limited number of credits (5) for utilizing image processing services. Additional credits can be purchased via Stripe payments.

### Database 📊

All user records and image processing data are stored in MongoDB.

## Technologies Used 💻

- **Next.js**: React framework for server-rendered React applications.
- **TypeScript**: Typed JavaScript for improved code quality and developer experience.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Clerk**: Authentication and user management.
- **MongoDB**: NoSQL database for storing user data and application state.
- **Zod**: TypeScript-first schema validation library.
- **Stripe**: Payment processing for credit purchases.
- **Cloudinary**: AI-powered image processing and manipulation.

## Getting Started 🏁

### Prerequisites 📋

- Node.js (v14 or higher)
- MongoDB (running locally or via a service like MongoDB Atlas)
- Stripe account (for payment processing)


### Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/your-username/imagigenius.git
  ```

2. Navigate to the project directory:

  ```bash
  cd imagigenius
  ```

3. Install dependencies:

  ```bash
  npm install
  ```
   
4. Set up environment variables:

Create a .env.local file in the root directory from the sample.env.local file:

  ```bash
  cp .env.local .sample.env.local
  ```

5.Run the development server:

  ```bash
  npm run dev
  ```

6. Open http://localhost:3000 in your browser to see the application.

## Contributing
Contributions are welcome! Feel free to open issues or pull requests.

