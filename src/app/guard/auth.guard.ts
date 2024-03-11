import { CanActivateFn, Router } from '@angular/router';
import { MessageService } from '../services/message/message.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router=new Router();
  const sweetMessage=new MessageService;
  if(localStorage.getItem("userOnline")==null || localStorage.getItem("userOnline")==undefined){
    router.navigate(['connexion']);
    sweetMessage.showMessage('error','connectez-vous et arrêtez de faire le malin');
    return false;
  }else{
    return true;
  }
};
