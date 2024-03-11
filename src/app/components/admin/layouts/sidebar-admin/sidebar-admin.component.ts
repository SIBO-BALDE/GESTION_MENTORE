import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/securityService/auth.service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent {

  constructor(private authService: AuthService) { }


  logout(){
    this.authService.logout()
  }

}
