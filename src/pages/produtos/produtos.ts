import { ProdutoService } from './../../services/domain/produtoService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoDto } from '../../models/produto.dto';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})

export class ProdutosPage {

  items: ProdutoDto[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public produtoService : ProdutoService) {
  }

  
  ionViewDidLoad() {
    let cat_id = this.navParams.get('cat_id');
    this.produtoService.findByCategoria(cat_id)
    .subscribe(response => {

      this.items = response['content'];
      //this.loadImageUrl();
    },
    error => {
      
    }
    )
   
  };

  showDetails(prod_id : string){
    this.navCtrl.push('ProdutodetailPage',{id: prod_id});
  }

  // loadImageUrl(){
  //   for (var i = 0; i<this.items.length;i++){

  //     let item = this.items[i];

  //     this.produtoService.getSmallImageFromBucket(item.id)
  //     .subscribe(response =>{

  //       item.imageUrl = `${API_CONFIG.bucket_baseUrl}/prod${item.id}-small.jpg`

  //     },
  //     error =>{}
  //     )

  //   }
  // }

}
