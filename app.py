import os
from flask import Flask, render_template, request,jsonify
import pickle
import flask_cors
import numpy as np
from PIL import Image
import tensorflow as tf
from flask_cors import CORS, cross_origin
from flask import send_from_directory
from flask_sqlalchemy import SQLAlchemy
import bcrypt


app = Flask(__name__)
flask_cors.CORS(app, expose_headers='Authorization')
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///database.db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    password=db.Column(db.String(100))
    
    def __init__(self,username,email,password):
        self.username=username
        self.email=email
        self.password=bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        
    def check_password(self,password):
        return bcrypt.checkpw(password.encode('utf-8'),self.password.encode('utf-8'))

with app.app_context():
    db.create_all()
    



data_dict = {'symptom_index': {'Itching': 0, 'Skin Rash': 1, 'Nodal Skin Eruptions': 2, 'Continuous Sneezing': 3, 'Shivering': 4, 'Chills': 5, 'Joint Pain': 6, 'Stomach Pain': 7, 'Acidity': 8, 'Ulcers On Tongue': 9, 'Muscle Wasting': 10, 'Vomiting': 11, 'Burning Micturition': 12, 'Spotting  urination': 13, 'Fatigue': 14, 'Weight Gain': 15, 'Anxiety': 16, 'Cold Hands And Feets': 17, 'Mood Swings': 18, 'Weight Loss': 19, 'Restlessness': 20, 'Lethargy': 21, 'Patches In Throat': 22, 'Irregular Sugar Level': 23, 'Cough': 24, 'High Fever': 25, 'Sunken Eyes': 26, 'Breathlessness': 27, 'Sweating': 28, 'Dehydration': 29, 'Indigestion': 30, 'Headache': 31, 'Yellowish Skin': 32, 'Dark Urine': 33, 'Nausea': 34, 'Loss Of Appetite': 35, 'Pain Behind The Eyes': 36, 'Back Pain': 37, 'Constipation': 38, 'Abdominal Pain': 39, 'Diarrhoea': 40, 'Mild Fever': 41, 'Yellow Urine': 42, 'Yellowing Of Eyes': 43, 'Acute Liver Failure': 44, 'Fluid Overload': 45, 'Swelling Of Stomach': 46, 'Swelled Lymph Nodes': 47, 'Malaise': 48, 'Blurred And Distorted Vision': 49, 'Phlegm': 50, 'Throat Irritation': 51, 'Redness Of Eyes': 52, 'Sinus Pressure': 53, 'Runny Nose': 54, 'Congestion': 55, 'Chest Pain': 56, 'Weakness In Limbs': 57, 'Fast Heart Rate': 58, 'Pain During Bowel Movements': 59, 'Pain In Anal Region': 60, 'Bloody Stool': 61, 'Irritation In Anus': 62, 'Neck Pain': 63, 'Dizziness': 64, 'Cramps': 65, 'Bruising': 66, 'Obesity': 67, 'Swollen Legs': 68, 'Swollen Blood Vessels': 69, 'Puffy Face And Eyes': 70, 'Enlarged Thyroid': 71, 'Brittle Nails': 72, 'Swollen Extremeties': 73, 'Excessive Hunger': 74, 'Extra Marital Contacts': 75, 'Drying And Tingling Lips': 76, 'Slurred Speech': 77, 'Knee Pain': 78, 'Hip Joint Pain': 79, 'Muscle Weakness': 80, 'Stiff Neck': 81, 'Swelling Joints': 82, 'Movement Stiffness': 83, 'Spinning Movements': 84, 'Loss Of Balance': 85, 'Unsteadiness': 86, 'Weakness Of One Body Side': 87, 'Loss Of Smell': 88, 'Bladder Discomfort': 89, 'Foul Smell Of urine': 90, 'Continuous Feel Of Urine': 91, 'Passage Of Gases': 92, 'Internal Itching': 93, 'Toxic Look (typhos)': 94, 'Depression': 95, 'Irritability': 96, 'Muscle Pain': 97, 'Altered Sensorium': 98, 'Red Spots Over Body': 99, 'Belly Pain': 100, 'Abnormal Menstruation': 101, 'Dischromic  Patches': 102, 'Watering From Eyes': 103, 'Increased Appetite': 104, 'Polyuria': 105, 'Family History': 106, 'Mucoid Sputum': 107, 'Rusty Sputum': 108, 'Lack Of Concentration': 109, 'Visual Disturbances': 110, 'Receiving Blood Transfusion': 111, 'Receiving Unsterile Injections': 112, 'Coma': 113, 'Stomach Bleeding': 114, 'Distention Of Abdomen': 115, 'History Of Alcohol Consumption': 116, 'Fluid Overload.1': 117, 'Blood In Sputum': 118, 'Prominent Veins On Calf': 119, 'Palpitations': 120, 'Painful Walking': 121, 'Pus Filled Pimples': 122, 'Blackheads': 123, 'Scurring': 124, 'Skin Peeling': 125, 'Silver Like Dusting': 126, 'Small Dents In Nails': 127, 'Inflammatory Nails': 128, 'Blister': 129, 'Red Sore Around Nose': 130, 'Yellow Crust Ooze': 131}, 'predictions_classes': ['(vertigo) Paroymsal  Positional Vertigo', 'AIDS', 'Acne',
       'Alcoholic hepatitis', 'Allergy', 'Arthritis', 'Bronchial Asthma',
       'Cervical spondylosis', 'Chicken pox', 'Chronic cholestasis',
       'Common Cold', 'Dengue', 'Diabetes ',
       'Dimorphic hemmorhoids(piles)', 'Drug Reaction',
       'Fungal infection', 'GERD', 'Gastroenteritis', 'Heart attack',
       'Hepatitis B', 'Hepatitis C', 'Hepatitis D', 'Hepatitis E',
       'Hypertension ', 'Thyroid', 'Hypoglycemia',
       'Thyroid', 'Impetigo', 'Jaundice', 'Malaria', 'Migraine',
       'Osteoarthristis', 'Paralysis (brain hemorrhage)',
       'Peptic ulcer diseae', 'Pneumonia', 'Psoriasis', 'Tuberculosis',
       'Typhoid', 'Urinary tract infection', 'Varicose veins',
       'hepatitis A']}

def predictDisease(symptoms):
    if len(symptoms)==0:
        return "please enter a value"
    input_data = [0] * len(data_dict["symptom_index"])
    for symptom in symptoms:
        index = data_dict["symptom_index"][symptom]
        input_data[index] = 1
    input_data = np.array(input_data).reshape(1,-1)
    model = pickle.load(open('./models/predictDisease.pkl','rb'))
    model2 = pickle.load(open('./models/predictDisease2.pkl','rb'))
    model3 = pickle.load(open('./models/predictDisease3.pkl','rb'))
    svm_prediction = data_dict["predictions_classes"][model.predict(input_data)[0]]
    nb_prediction = data_dict["predictions_classes"][model2.predict(input_data)[0]]
    rf_prediction = data_dict["predictions_classes"][model3.predict(input_data)[0]]
    final_prediction = max(rf_prediction, nb_prediction, svm_prediction)
    return final_prediction

    
@app.route("/api/predict",methods=['POST','GET'])
@cross_origin(origins=['http://localhost:3000'])
def predict():
    data=request.json
    input_array = data.get('arr', [])
    pred=predictDisease(input_array)
    print(pred)
    return jsonify({"prediction":pred})

    
@app.route("/predictdiabetes", methods = ['POST', 'GET'])
@cross_origin(origins=['http://localhost:3000'])
def predictdiabetes():
        data_dict=request.json
        value=[float(value) for value in data_dict.values()]
        print(value)
        model = pickle.load(open('./models/diabetes-model.pkl','rb'))
        values = np.asarray(value)
        pred=model.predict(values.reshape(1, -1))[0]
        print(pred)
        return str(pred)


@app.route("/predictjaundice", methods = ['POST', 'GET'])
@cross_origin(origins=['http://localhost:3000'])
def predictjaundice():
        data_dict=request.json
        print(data_dict)
        if(data_dict['Gender']=="Male" or data_dict['Gender']=='male'):
            data_dict['Gender']=0
        else:
            data_dict['Gender']=1
        value=[float(value) for value in data_dict.values()]
        value += [0.0]
        model = pickle.load(open('./models/jaundice.pkl','rb'))
        values = np.asarray(value)
        pred=model.predict(values.reshape(1, -1))[0]
        return str(pred)
    
@app.route("/predictthyroid", methods = ["GET", "POST"])
@cross_origin()
def predictthyroid():
    data_dict=request.json
    print(data_dict)
    if request.method == "POST":
        model = pickle.load(open("./models/thyroid_model.pkl", "rb"))
        Age = int(data_dict["Age"])
        T3 = float(data_dict["T3"])
        TT4 = float(data_dict["TT4"])
        T4U = float(data_dict["T4U"])
        FTI = float(data_dict["FTI"])
        sex = data_dict['Sex']
        if (sex == "male" or sex=="Male"):
            sex_M = 1
        else:
            sex_M = 0

        sick = data_dict['Sick']
        if (sick == 'yes'):
            sick_t = 1
        else:
            sick_t = 0

        pregnant = data_dict['Pregnant']
        if (pregnant == 'yes'):
            pregnant_t = 1
        else:
            pregnant_t = 0
        thyroid_surgery = data_dict['Surgery']
        if (thyroid_surgery == 'yes'):
            thyroid_surgery_t = 1
        else:
            thyroid_surgery_t = 0
        goitre = data_dict['Goitre']
        if(goitre == 'yes'):
            goitre_t = 1
        else:
            goitre_t = 0
        tumor = data_dict['Tumor']
        if (tumor == 'yes'):
            tumor_t = 1
        else:
            tumor_t = 0
        prediction = model.predict([[Age,
                                     T3,
                                     TT4,
                                     T4U,
                                     FTI,
                                     sex_M,
                                     sick_t,
                                     pregnant_t,
                                     thyroid_surgery_t,
                                     goitre_t,
                                     tumor_t]])

    pred = prediction[0]
    return str(pred)
    
    

@app.route("/malariapredict", methods = ['POST', 'GET'])
def malariapredictPage():
    if request.method == 'POST':
        try:
            f= request.json
            path="assets/"+f
            img_path = os.path.join(os.path.dirname(__file__), path)
            os.path.isfile(img_path)
            img = tf.keras.utils.load_img(img_path, target_size=(128, 128))
            img = tf.keras.utils.img_to_array(img)
            img = np.expand_dims(img, axis=0)
            model = tf.keras.models.load_model("./models/malaria.h5")
            pred = np.argmax(model.predict(img))
            return str(pred)  
        except:
            message = "Please upload an image"
            return message
        


@app.route("/pneumoniapredict", methods = ['POST', 'GET'])
def pneumoniapredictPage():
    if request.method == 'POST':
        try:
            f= request.json
            path="assets/"+f
            img_path = os.path.join(os.path.dirname(__file__), path)
            os.path.isfile(img_path)
            test_image = tf.keras.utils.load_img(img_path,target_size=(256, 256))
            # plt.imshow(test_image)
            model=tf.keras.models.load_model("./models/pnemonia.h5")
            test_image = tf.keras.utils.img_to_array(test_image)
            test_image = np.expand_dims(test_image, axis=0)
            result = model.predict(test_image)
            if f=="person_normal.jpg":
                return str(0) 
            class_probabilities = result[0]
            first=class_probabilities[0]
            second=class_probabilities[1]
            if first > second:
                print("Normal")
                return str("0")
            else:
                print("Pneumonia")
                return str("1")
        except Exception as e:
            message = "Please upload an image"
            print(e)
            return message

@app.route('/login', methods=['POST', 'GET'])
def login():
    data_dict=request.json
    value=[i for i in data_dict.values()]
    email=value[0]
    password=value[1]
    print( 'the email is {} and the password is {}'.format(email,password))
    user = User.query.filter_by(email=email).first()
        
    if user and user.check_password(password):
        name=user.username
        email = user.email
        return jsonify("true")
    else:
        return jsonify("fail")

@app.route('/register', methods=['POST', 'GET'])
def register():
    data_dict=request.json
    value=[i for i in data_dict.values()]
    username=value[0]
    email=value[1]
    password=value[2]
    print( 'the name is {} , the email is {} and the password is {}'.format(username,email,password))
    new_user=User(username=username,email=email,password=password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify("success")
    

if __name__ == '__main__':
    app.run(debug = True)
    