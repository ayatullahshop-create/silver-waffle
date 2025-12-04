# WinzerEscrowBot

A Telegram bot for secure escrow transactions with a web landing page.

## Features

- **Telegram Bot**: Secure escrow transaction management
- **Web Interface**: Landing page with bot information
- **Vercel Speed Insights**: Performance monitoring integrated

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Configure environment variables:
   - `BOT_TOKEN`: Your Telegram bot token
   - `ADMIN_ID`: Your Telegram admin ID
   - `PORT`: (Optional) Web server port (default: 8080)

3. Run the application:
   ```bash
   python web_server.py
   ```

The web server will be available at `http://localhost:8080` and includes Vercel Speed Insights tracking.

## Deployment

This project is configured for deployment on:
- Vercel (via `vercel.json`)
- Railway (via `railway.json`)
- Heroku/other platforms (via `Procfile`)

The web interface includes Vercel Speed Insights for performance monitoring when deployed.