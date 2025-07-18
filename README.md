# Amazon Clone
A full-stack e-commerce web application that replicates core Amazon functionality, built with React and Firebase.

🔗 Live Demo: https://clone-d6cee.web.app/

## Features
### 🔐 Authentication
- Google Sign-In integration
- User session management with localStorage
- Protected routes for authenticated users

### 🛒 Shopping Experience
- Browse products with ratings and pricing
- Add items to cart with quantity management
- Real-time cart updates
- Shopping cart with item management (quantity changes, deletions)
- Checkout summary with total calculations

### 💻 User Interface
- Amazon-inspired design with responsive layout
- Product grid display with images and details
- Search bar (UI ready)
- Navigation header with user info and cart count
- Clean, modern styling with styled-components

### 📱 Real-time Features
- Live cart synchronization across sessions
- Instant product updates
- Real-time quantity and price calculations

## Tech Stack
### Frontend
- **React 19** - Component-based UI library
- **React Router DOM 7** - Client-side routing (with `Routes`/`Route`)
- **Styled Components 6** - CSS-in-JS styling
- **MUI (Material-UI) v5** - UI components and icons
- **React Number Format 5** - Number formatting for prices

### Backend & Database
- **Firebase 12** - Backend-as-a-Service
  - Firestore (modular v9+ API)
  - Authentication (Google OAuth, modular v9+ API)
  - Hosting

### Development Tools
- Create React App 5 - Build tooling
- Firebase Tools 14 - Deployment and management
- React Testing Library - Component testing

## Project Structure
```
src/
├── App.js              # Main application component with routing
├── Header.js           # Navigation header with search and cart
├── Home.js             # Homepage with product grid
├── Product.js          # Individual product component
├── Cart.js             # Shopping cart page
├── CartItems.js        # Cart items list component
├── CartItem.js         # Individual cart item component
├── CartTotal.js        # Cart total and checkout section
├── Login.js            # Authentication page
├── firebase.js         # Firebase configuration (modular API)
└── App.css             # Global styles
```

## Installation & Setup
### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- Firebase account

### 1. Clone the Repository
```bash
git clone <repository-url>
cd amazon-clone
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Firebase Setup
- Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable the following services:
  - Authentication (Google Sign-In)
  - Firestore Database
  - Hosting
- Copy your Firebase config and update `src/firebase.js` (using the modular API)

### 4. Firestore Database Structure
Create the following collections in Firestore:
#### Products Collection
```json
// Collection: "products"
{
  "name": "Product Name",
  "price": 29.99,
  "rating": 4,
  "image": "https://example.com/image.jpg"
}
```
#### Cart Items Collection
```json
// Collection: "cartItems"
{
  "name": "Product Name",
  "price": 29.99,
  "quantity": 2,
  "image": "https://example.com/image.jpg"
}
```

### 5. Run the Application
```bash
npm start
```
The app will open at http://localhost:3000

## Deployment
### Deploy to Firebase Hosting
```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

## Key Components
- **App.js**: Main application logic, user authentication state, cart data fetching, routing
- **Header.js**: Navigation, user info, cart count, search UI
- **Home.js**: Product grid, real-time product fetching, hero banner
- **Product.js**: Product display, add to cart, rating, quantity
- **Cart Components**: Cart page, items, item controls, total/checkout
- **Firebase Integration**: Real-time listeners, Google OAuth, CRUD for cart

## Migration Notes (for Upgraded Stack)
- **React Router v7+**: Uses `<Routes>` and `element` prop for routes.
- **MUI v5+**: All imports use `@mui/material` and `@mui/icons-material`.
- **Firebase v9+ Modular API**: All Firestore and Auth usage must use the modular import style. See `src/firebase.js` for example.
- **React Number Format v5+**: Use `{ NumericFormat }` instead of default import.

## Available Scripts
- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## Features in Detail
- Add products to cart with quantity tracking
- Update quantities with dropdown
- Remove items from cart
- Real-time price calculations
- Persistent cart data
- Google Sign-In popup
- User data in localStorage
- Protected routes
- Sign-out
- Responsive design

## Environment Variables
Create a `.env` file in the root directory:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Future Enhancements
- Search functionality
- Product categories/filtering
- Order history
- Payment integration
- Reviews/ratings
- Wishlist
- Admin panel
- Email notifications
- Recommendations

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Amazon for design inspiration
- Firebase for backend services
- MUI for component library
- Create React App for build tooling
