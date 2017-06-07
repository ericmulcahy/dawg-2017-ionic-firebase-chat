import { Component } from '@angular/core';

import {UsersPage} from "../users/users";
import {AccountPage} from "../account/account";
import {ChatPage} from "../chat/chat";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UsersPage;
  tab2Root = ChatPage;
  tab3Root = AccountPage;

  constructor() {

  }
}
