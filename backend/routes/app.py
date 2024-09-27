import pandas as pd
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS  # Import Flask-CORS
import re
import nltk
from nltk.corpus import stopwords

# Download stopwords from NLTK if not already downloaded
nltk.download('stopwords')

app = Flask(__name__)
CORS(app, resources={r"/ask": {"origins": "http://localhost:5173"}})

# Load the dataset
df = pd.read_parquet("hf://datasets/ruslanmv/ai-medical-chatbot/dialogues.parquet")

# Custom names
doctor_name = "Hermione"
ai_name = "Care Console"

# Define stopwords to eliminate common non-informative words
stop_words = set(stopwords.words('english'))

# Function to clean and extract important keywords from a question
def extract_keywords(sentence):
    # Tokenize and filter out stopwords
    words = re.findall(r'\b\w+\b', sentence.lower())  # Tokenize words
    filtered_words = [word for word in words if word not in stop_words]  # Remove stopwords
    return filtered_words

# Function to find the answer to a specific question
def find_answer(question):
    # Normalize the question for easier checking
    normalized_question = question.lower()

    # Extract important keywords from the question
    keywords = extract_keywords(normalized_question)
    
    # Greetings to identify
    greetings = ["hi", "hello", "thank you", "thanks", "hey", "good morning", "good afternoon", "good evening"]

    # Check for greetings in the question
    if any(greet in normalized_question for greet in greetings):
        return f"{ai_name}: Hi! I am {ai_name}, your healthcare assistant. How can I help you today?"

    # If there are no keywords, return a generic response
    if not keywords:
        return f"{ai_name}: I'm sorry, I need more information to understand your question."

    # Check if 'Description' column exists in the dataset
    if 'Description' in df.columns:
        # Join the keywords into a regex pattern
        keyword_pattern = '|'.join(keywords)

        # Create a mask for rows containing any of the keywords
        mask = df['Description'].str.contains(keyword_pattern, case=False, na=False)
        related_rows = df[mask]

        # Check if any related rows were found
        if not related_rows.empty:
            answer = related_rows.iloc[0]['Doctor']  # Get the first related doctor's response
            return f"{ai_name}: {answer}"
        elif 'hermione' in normalized_question:  # Check if the question is about the doctor
            return f"{ai_name}: Here’s some information about {doctor_name}."
        else:
            return f"{ai_name}: Sorry, I couldn't find an answer to that question."
    else:
        return f"{ai_name}: The dataset doesn't contain a 'Description' column."

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    question = data.get('message', '')
    answer = find_answer(question)
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)
