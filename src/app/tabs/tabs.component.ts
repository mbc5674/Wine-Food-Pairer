import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  //true means it's corresponding button/tab is being shown
  public showWine:boolean = true;
  public showBeer:boolean = false;
  public showFood:boolean = false;

  public showAllWines:boolean = true;

  public showDryWhite:boolean = false;
  public showSweetWhite:boolean = false;
  public showRichWhite:boolean = false;
  public showSparkling:boolean = false;
  public showLightRed:boolean = false;
  public showMediumRed:boolean = false;
  public showBoldRed:boolean = false;
  public showDessert:boolean = false;

  public showAllFood:boolean = true;

  public showVeggies:boolean = false;
  public showRoastedVeggies:boolean = false;
  public showSoftCheese:boolean = false;
  public showHardCheese:boolean = false;
  public showStarches:boolean = false;
  public showFish:boolean = false;
  public showRichFish:boolean = false;
  public showWhiteMeat:boolean = false;
  public showRedMeat:boolean = false;
  public showCuredMeat:boolean = false;
  public showSweets:boolean = false;

  constructor() { 
   }

  ngOnInit(): void { 
   }

   //hide any wine page still open
   resetWines() {
    this.showDryWhite = false;
    this.showSweetWhite = false;
    this.showRichWhite = false;
    this.showSparkling = false;
    this.showLightRed = false;
    this.showMediumRed = false;
    this.showBoldRed= false;
    this.showDessert = false;
   }

   //case statement shows whichever wine has been selected
   wineSecondPageToggler(i) {
    this.showAllWines = false;
    switch(i) {
      case 0:
        this.showDryWhite = true;
        break;
      case 1:
        this.showSweetWhite = true;
        break;
      case 2:
        this.showRichWhite = true;
        break;
      case 3:
        this.showSparkling = true;
        break;
      case 4:
        this.showLightRed = true;
        break;
      case 5:
        this.showMediumRed = true;
        break;
      case 6:
        this.showBoldRed = true;
        break;
      case 7:
        this.showDessert = true;
        break;
    }
   }

   //shows the wine tab after it has been selected
   selectWineTab() {
    this.resetWines();
    this.resetFood();
    this.showWine = true;
    this.showAllWines = true;
    this.showBeer = false;
    this.showFood = false;
   }

   /*
   //shows the beer tab after it has been selected
   selectBeerTab() {
    this.resetWines();
    this.showWine = false;
    this.showBeer = true;
    this.showFood = false;
   }
   */

   //reset second food page
   resetFood() {
    this.showVeggies = false;
    this.showRoastedVeggies = false;
    this.showSoftCheese = false;
    this.showHardCheese = false;
    this.showStarches = false;
    this.showFish = false;
    this.showRichFish = false;
    this.showWhiteMeat = false;
    this.showRedMeat = false;
    this.showCuredMeat = false;
    this.showSweets = false;
   }

   
   //shows the food tab after it has been selected
   selectFoodTab() {
    this.resetWines();
    this.resetFood();
    this.showAllFood = true;
    this.showWine = false;
    this.showBeer = false;
    this.showFood = true;
   }

   //case statement shows whichever food has been selected
   foodSecondPageToggler(i) {
     this.showAllFood = false;
     switch(i) {
      case 0:
        this.showVeggies = true;
        break;
      case 1:
        this.showRoastedVeggies = true;
        break;
      case 2:
        this.showSoftCheese = true;
        break;
      case 3:
        this.showHardCheese = true;
        break;
      case 4:
        this.showStarches = true;
        break;
      case 5:
        this.showFish = true;
        break;
      case 6:
        this.showRichFish = true;
        break;
      case 7:
        this.showWhiteMeat = true;
        break;
      case 8:
        this.showRedMeat = true;
        break;
      case 9:
        this.showCuredMeat = true;
        break;
      case 10:
        this.showSweets = true;
        break;
   }
  }
}
