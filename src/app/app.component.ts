import { Component,Input} from '@angular/core';
import { CatagoryComponent } from './catagory/catagory.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent,CatagoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularWork';
  name = 'Angular 18'
  imgUrl = "https://cdn.pixabay.com/photo/2024/07/12/08/05/venice-8889871_1280.jpg"

  inpType = "password"

  printdata (){
    console.log("hello Angular");
    
  }

  isAvailable = false;

  proname ="samsung";
}
