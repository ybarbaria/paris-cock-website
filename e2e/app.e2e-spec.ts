import { ParisCockWebsitePage } from './app.po';

describe('paris-cock-website App', () => {
  let page: ParisCockWebsitePage;

  beforeEach(() => {
    page = new ParisCockWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
