import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';
import { ImagesPage } from '../images/images';
import { StoryPage } from '../story/story';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = InfoPage;
  tab3Root = ImagesPage;
  tab4Root = StoryPage;
  
  constructor() {
  }
}
