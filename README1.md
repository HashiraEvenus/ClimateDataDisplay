# Tesla Climate Data Visualization 

A React + TypeScript application that helps visualize climate data from CSV files, built with Vite for fast development.

## What it does 

This app lets you:
- Upload CSV files with climate data (in our case the IDCJAC0002_066062_Data12.csv containing temperature data of Australia)
- Visualize the data in a nice table format
- Create interactive line charts where you can:
  - Select which data goes on X and Y axis
  - See all your data points
  - Interact with the chart (hover for tooltips)

## Quick Start 🏃‍♂️

1. Make sure you have Node.js installed
2. Install pnpm if you haven't already:
   ```bash
   npm install -g pnpm
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Run the development server:
   ```bash
   pnpm dev
   ```
5. Open your browser and go to `http://localhost:5173`

## How to Use 📊

1. Click the blue "Load CSV Data" button
2. Select your CSV file
3. Your data will appear in a table format
4. Select X and Y axis values from the dropdowns
5. Watch your data come to life in the line chart!
6. Click "See More" to see more data points
7. Click "See Less" to see less data points
8. Click "Yearly Averages" record bar to see the yearly averages of the data

## Tech Stack 💻

- React 18
- TypeScript
- Vite
- Styled Components
- Recharts for visualization
- Papa Parse for CSV parsing

## Coming Soon 🔜


- Standard deviation overlays
- Custom zoom controls
- More chart customization options
