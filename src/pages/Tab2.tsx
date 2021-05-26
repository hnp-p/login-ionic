import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
} from "@ionic/react";
import "./Tab2.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tab2: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [enterpassword, setEnterPassword] = useState("");

  function registerUser() {
    console.log(username, password, enterpassword);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding text-center">
        <div className="items-center justify-center flex flex-col">
          <IonInput
            className="border border-black-500 w-2/12 rounded-lg text-center  "
            placeholder="Username"
            onIonChange={(e: any) => setUsername(e.target.value)}
          />
          <IonInput
            className="border border-black-500 w-2/12 rounded-lg mt-3"
            type="password"
            placeholder="Password"
            onIonChange={(e: any) => setPassword(e.target.value)}
          />
          <IonInput
            className="border border-black-500 w-2/12 rounded-lg mt-3"
            type="password"
            placeholder="Enter the password"
            onIonChange={(e: any) => setEnterPassword(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <IonButton onClick={registerUser} color="medium">
            Signup
          </IonButton>
        </div>
        <p>Already have an account?</p>{" "}
        <Link to="/tab1">
          <IonButton>Login</IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
