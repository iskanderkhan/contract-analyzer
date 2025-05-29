# Contract Analyzer

A modern web application for analyzing contracts, built with React and FastAPI.

## Deployment Steps

1. First install Node.js from: https://nodejs.org/

2. Then run these commands in terminal:

```bash
# In the project root directory
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/iskanderkhan/contract-analyzer.git
git push -u origin main

# Install dependencies and deploy
cd frontend
npm install
npm install gh-pages --save-dev
npm run deploy
```

After running these commands, your site will be available at:
https://iskanderkhan.github.io/contract-analyzer

## Features

- Modern Material UI design
- Responsive layout
- Fast and efficient contract analysis

## Local Development

To run the frontend locally:

```bash
cd frontend
npm install
npm start
```

To run the backend locally:

```bash
cd backend
pip install -r requirements.txt
python main.py
```

## Technologies Used

- React
- TypeScript
- Material UI
- FastAPI (Backend)
- Python 