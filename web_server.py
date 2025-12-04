from flask import Flask, send_file
import os
import threading
from config import BOT_TOKEN

app = Flask(__name__)

@app.route('/')
def index():
    """Serve the main HTML page with Vercel Speed Insights"""
    return send_file('index.html')

@app.route('/health')
def health():
    """Health check endpoint for deployment platforms"""
    bot_status = "configured" if BOT_TOKEN and ":" in BOT_TOKEN else "not configured"
    return {"status": "ok", "bot": bot_status}, 200

def run_bot():
    """Run the Telegram bot in a separate thread"""
    try:
        from bot import bot
        print("Bot is running...")
        bot.infinity_polling()
    except Exception as e:
        print(f"Bot failed to start: {e}")

def run_web():
    """Run the web server"""
    port = int(os.getenv('PORT', 8080))
    print(f"Web server is running on port {port}...")
    app.run(host='0.0.0.0', port=port, debug=False)

if __name__ == '__main__':
    # Start bot in a separate thread only if BOT_TOKEN is configured
    if BOT_TOKEN and ":" in BOT_TOKEN:
        bot_thread = threading.Thread(target=run_bot, daemon=True)
        bot_thread.start()
        print("Telegram bot started in background")
    else:
        print("BOT_TOKEN not configured - running web server only")
    
    # Run web server in main thread
    run_web()
