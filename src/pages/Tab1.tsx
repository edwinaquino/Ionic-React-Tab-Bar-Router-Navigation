import { IonButton, IonContent, IonHeader, IonPage, IonTabBar, IonTitle, IonToolbar } from "@ionic/react";

const Tab1: React.FC = () => {
    
    return (
      <IonPage>
       <IonHeader>
           <IonToolbar>
               <IonTitle>
                   Tab1
               </IonTitle>
               <IonButton  slot="end" routerLink="/" routerDirection="root">Logout</IonButton>
           </IonToolbar>
       </IonHeader>
       <IonContent className="ion-padding">
<IonButton routerLink="/app/tab1/details" expand="full">Details Inside Tabs Component</IonButton>
<IonButton routerLink="/detailsonly" expand="full">Got Details Outside</IonButton>
       </IonContent>

      </IonPage>
    );
  };
  
  export default Tab1;