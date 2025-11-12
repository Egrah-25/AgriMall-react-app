# AgriMall Application
## 🛠️ Tech Stack

- **Frontend:** React.js, CSS3
- **Backend:** Firebase (Authentication, Firestore, Storage)
- **Deployment:** Netlify
- **Version Control:** Git & GitHub

## 🛠️ Technical Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
cd AgriMall-app
npm install
npm start
```

Firebase Configuration

1. Create Firebase project
2. Enable Authentication and Firestore
3. Update src/firebase.js with your config

Start development server
   ```bash
   npm start
   ```
   Opens http://localhost:3000

Available Scripts

· npm start - Development server
· npm run build - Production build
· npm test - Run tests

📁 Project Structure

```
AgriMall-react-app/
├──src/
│├── components/
││   ├── Auth.js          # Authentication system
││   ├── FarmerDashboard.js # Farmer product management
││   └── BuyerDashboard.js  # Buyer marketplace
│├── firebase.js          # Firebase configuration
│└── App.js               # Main application
├──public/
└──package.json
```

🚀 Deployment

```bash
npm run build
# Deploy 'build' folder to Netlify
```
