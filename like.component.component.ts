import { Component,Input } from '@angular/core';

@Component({
  selector: 'AppComponent',
  templateUrl: './like.component.component.html'
  
})
export class LikeComponentComponent{
  numberOfLikes: number=0;
  likeButtonClick() {
    this.numberOfLikes++;
  }
  dislikeButtonClick() {
   this.numberOfLikes--; 
  }
}