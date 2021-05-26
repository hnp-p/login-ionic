import { Redirect, Route } from "react-router-dom";
import logonic from "./img/logonic.jpg";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonImg,
} from "@ionic/react";
// import { IonReactRouter } from "@ionic/react-router";
// import { ellipse, square, triangle } from "ionicons/icons";
// import Tab1 from "./pages/Tab1";
// import Tab2 from "./pages/Tab2";
// import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    console.log(username, password);
    console.log(setUsername, setPassword);
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
        <div className="text-webkit-center">
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
          <IonButton color="medium">Signup</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default App;
