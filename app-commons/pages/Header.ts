import { Page } from '@playwright/test';

export class Header {
  page: Page;
  menuButton: any;
  logoutLink: any;

  constructor(page: any) {
    this.page = page;

    this.menuButton = '#react-burger-menu-btn';
    this.logoutLink = '#logout_sidebar_link';
  }

  async logout() {
    await this.page.click(this.menuButton);
    await this.page.click(this.logoutLink);
  }
}
