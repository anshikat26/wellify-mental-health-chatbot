from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = "wellify_secret_key"

@app.route("/", methods=["GET", "POST"])
def welcome():
    if request.method == "POST":
        session["name"] = request.form["name"]
        session["age"] = request.form["age"]
        return redirect(url_for("dashboard"))
    return render_template("welcome.html")

@app.route("/dashboard")
def dashboard():
    name = session.get("name", "User")
    return render_template("dashboard.html", name=name)

@app.route("/chatbot")
def chatbot():
    name = session.get("name", "User")
    return render_template("chatbot.html", name=name)
@app.route("/helpline")
def helpline():
    return render_template("helpline.html")
@app.route("/affirmation")
def affirmation():
    return render_template("affirmation.html")
@app.route("/stress")
def stress():
    return render_template("stress.html")
    
import os 
if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT",10000))
    )
