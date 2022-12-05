import { Page } from "puppeteer";

export class ProfileWidget {
    constructor(private readonly page: Page) { }

    public async profile(): Promise<void> {
        await this.page.waitForSelector("profile-runtime .row");
        await this.page.waitForSelector("subscriptions-runtime .table-row");
        await this.page.click("[data-bind=\"click: togglePrimaryKey, text: primaryKeyBtnLabel, attr: { 'aria-label': primaryKeyBtnLabel() + ' primary key'}\"]");
    }
}