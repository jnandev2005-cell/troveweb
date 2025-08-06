# Welcome to your Lovable project

## Trove - Premium Dessert E-commerce Platform

A fully functional e-commerce website for premium desserts with OTP-based authentication and complete order management.

### Features

- **No-Login OTP-Based Checkout**: Customers can order without creating accounts
- **Complete Cart System**: Add, remove, and manage items with persistent storage
- **OTP Verification**: Secure phone number verification for orders
- **WhatsApp Integration**: Orders automatically sent to WhatsApp
- **Payment Gateway Ready**: Structured for Razorpay/Stripe integration
- **Responsive Design**: Works perfectly on all devices
- **Product Categories**: Cupcakes, Pastries, Cookies & Brownies
- **Dietary Information**: Vegan and egg-content indicators

### Quick Start

```bash
# Install dependencies
npm install

# Run frontend only
npm run dev

# Run with backend API (recommended)
npm run dev:full
```

### Backend API Endpoints

- `POST /api/send-otp` - Send OTP to phone number
- `POST /api/verify-otp` - Verify OTP code
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order by ID
- `PATCH /api/orders/:id/status` - Update order status
- `GET /api/orders` - Get all orders (admin)

### Demo Credentials

- **Demo OTP**: `123456` (for testing)
- **WhatsApp Number**: Update in `src/pages/Checkout.tsx`
- **Payment Gateway**: Add your keys in checkout component

## Project info

**URL**: https://lovable.dev/projects/ac7e77bd-846f-4ae3-aa15-f31f1dc10d56

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ac7e77bd-846f-4ae3-aa15-f31f1dc10d56) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ac7e77bd-846f-4ae3-aa15-f31f1dc10d56) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
