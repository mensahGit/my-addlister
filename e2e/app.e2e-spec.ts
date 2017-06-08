import { MyAddlisterPage } from './app.po';

describe('my-addlister App', () => {
  let page: MyAddlisterPage;

  beforeEach(() => {
    page = new MyAddlisterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
