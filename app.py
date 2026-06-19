from flask import Flask, render_template, jsonify
from datetime import datetime
import pytz

app = Flask(__name__, template_folder='.')

CITIES = {
    "Berlin": "Europe/Berlin",
    "New York": "America/New_York",
    "Tokyo": "Asia/Tokyo",
    "London": "Europe/London",
    "Dubai": "Asia/Dubai"
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/time")
def time_api():
    result = {}

    for city, tz in CITIES.items():
        timezone = pytz.timezone(tz)
        result[city] = datetime.now(timezone).strftime("%H:%M:%S")

    return jsonify(result)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
