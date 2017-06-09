import { OneAppPage } from './app.po';

describe('one-app App', () => {
  let page: OneAppPage;

  beforeEach(() => {
    page = new OneAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
