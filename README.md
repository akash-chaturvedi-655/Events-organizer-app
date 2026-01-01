# Nightlife App - Local Setup & Run Guide

A nightlife discovery and table-booking platform built with React and Express.js. This app is being modernized to handle 10M+ daily users with Java backend migration and system design improvements.

## ✅ Fixed Issues

- ✅ Fixed `body-Parser` casing error → `body-parser`
- ✅ Added proper middleware options: `.urlencoded({extended:true})`
- ✅ Fixed static file serving with `res.sendFile()` instead of `res.send(__dirname + "path")`
- ✅ Added React key props in carousel components
- ✅ Added health check endpoint for monitoring
- ✅ Added npm scripts for building and running server

## Prerequisites

Before running the application, ensure you have:

- **Node.js v16+** - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **macOS** (or Linux/Windows with Node.js)

Verify installation:
```bash
node --version
npm --version
```

## Installation Steps

### 1. Install Dependencies
```bash
cd /Users/akash.chaturvedi/nightlife-app
npm install
```

This will install all required packages:
- `express` - Backend server framework
- `react` & `react-dom` - Frontend framework
- `webpack` & `webpack-dev-server` - Module bundling
- `babel-loader` - JavaScript transpiling
- And other dependencies listed in `package.json`

### 2. Build the Frontend (Production Bundle)
```bash
npm run build
```

This creates an optimized bundle in the `dist/` folder.

## Running Locally

You have **two options**:

### Option A: Development Mode (Recommended for Development)

Run both frontend dev server and backend in separate terminals:

**Terminal 1 - Start Frontend Dev Server:**
```bash
npm run dev
```
- Watches for file changes
- Auto-reloads on changes
- Runs on `http://localhost:8080`

**Terminal 2 - Start Backend Server:**
```bash
npm run server
```
- Starts Express.js server
- Runs on `http://localhost:5000`
- Serves the built frontend

**Access the app:** `http://localhost:5000` or `http://localhost:8080`

---

### Option B: Production Mode (Single Command)

```bash
npm run build && npm run server
```

This will:
1. Build the optimized webpack bundle
2. Start the Express server
3. Serve the bundled app on `http://localhost:5000`

**Access the app:** `http://localhost:5000`

---

## API Endpoints

### 1. Home Page
```
GET http://localhost:5000/
```
Returns the index.html page with React app

### 2. Health Check
```
GET http://localhost:5000/health
```
Response:
```json
{ "status": "Server is running" }
```

### 3. Search (POST)
```
POST http://localhost:5000/search
Content-Type: application/json

{
  "searched": "nightlife venues"
}
```

### 4. Search (GET)
```
GET http://localhost:5000/search
```

## Project Structure

```
nightlife-app/
├── client/
│   └── public/
│       ├── app_effect.js        # React carousel component
│       ├── index.js              # React entry point
│       ├── index.html            # HTML template
│       ├── styles.css            # Global styles
│       ├── images/               # Image assets
│       └── favicon/              # Favicon files
├── server/
│   ├── server.js                 # Express server main file
│   └── routes.js                 # API route definitions
├── dist/                         # Build output (created after npm run build)
├── webpack.config.js             # Webpack configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## Troubleshooting

### Issue: Port 5000 already in use
**Solution:** Kill the process using port 5000:
```bash
lsof -i :5000
kill -9 <PID>
```

### Issue: Port 8080 already in use (webpack-dev-server)
**Solution:** Kill the process using port 8080:
```bash
lsof -i :8080
kill -9 <PID>
```

### Issue: "Cannot find module" errors
**Solution:** Ensure node_modules is installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Webpack compilation errors
**Solution:** Clear webpack cache:
```bash
rm -rf dist/
npm run build
```

### Issue: CORS errors in browser console
The app already has CORS enabled in Express. If issues persist, check that both servers are running on the correct ports.

---

## Next Steps: Java Backend Migration

This codebase will be migrated to a Java backend (Spring Boot) to handle 10M+ daily users. The migration plan includes:

1. **Phase 1:** Create Spring Boot project with REST APIs matching current Express routes
2. **Phase 2:** Migrate database from MongoDB to PostgreSQL with connection pooling
3. **Phase 3:** Add Redis caching layer for performance
4. **Phase 4:** Implement message queues (RabbitMQ/Kafka) for async operations
5. **Phase 5:** Add distributed tracing and monitoring (ELK Stack / Datadog)
6. **Phase 6:** Deploy on Kubernetes with load balancing and auto-scaling

### System Design for 10M Daily Users

- **Database:** PostgreSQL with read replicas and sharding
- **Caching:** Redis (sessions, search results)
- **Message Queue:** RabbitMQ or Kafka
- **Load Balancing:** Nginx / HAProxy
- **API Gateway:** Spring Cloud Gateway
- **Containerization:** Docker + Kubernetes
- **CDN:** CloudFlare / AWS CloudFront for static assets
- **Monitoring:** ELK Stack, Datadog, or New Relic

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Development mode (watch & auto-reload)
npm run dev

# Build production bundle
npm run build

# Start Express server (requires npm run build first)
npm run server

# Combined: Build + Start
npm run build && npm run server

# Test (currently placeholder)
npm test
```

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- React 17.0.2+

---

## Author
**Akash Chaturvedi**

## License
ISC

---

## Notes

- The app currently runs on **port 5000** (Express) and **8080** (webpack-dev-server)
- Frontend is built with React and Webpack
- Backend uses Express.js (will be migrated to Java/Spring Boot)
- Static assets are served from `client/public/`
- All API requests should be made to `http://localhost:5000` in production mode
