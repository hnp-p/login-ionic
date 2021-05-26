import logonic from "../img/logonic.jpg";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
} from "@ionic/react";
import "./Tab1.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tab1: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    console.log(username, password);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding text-center">
        <img className="inline-block p-5" src={logonic}></img>
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
        </div>
        <div className="mt-3">
          <IonButton onClick={loginUser}>Login</IonButton>
        </div>
        <p>New here?</p>{" "}
        <Link to="/tab2">
          <IonButton color="medium">Signup</IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
