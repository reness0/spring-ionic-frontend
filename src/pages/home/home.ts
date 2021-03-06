import { CategoriasPage } from "./../categorias/categorias";
import { Component } from "@angular/core";
import { NavController, MenuController } from "ionic-angular";
import { CredenciaisDto } from "../../models/crendeciais.dto";
import { AuthService } from "../../services/AuthService";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService
  ) {}

  creds: CredenciaisDto = {
    email: "",
    senha: "",
  };

  login() {
    this.auth.authenticate(this.creds).subscribe((response) => {
      this.auth.successfulLogin(response.headers.get("Authorization"));
      this.navCtrl.setRoot("CategoriasPage");
    },
    error  => {
      
    });
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter() {
    this.auth.refreshToken().subscribe((response) => {
      
      this.auth.successfulLogin(response.headers.get("Authorization"));
      this.navCtrl.setRoot("CategoriasPage");
    },
    error  => {
      
    });
  }

  signup(){
    this.navCtrl.push('SignupPage');
  }
}
