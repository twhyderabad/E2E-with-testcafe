import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:3000/`;

test('Open spree commerce page', async t => {
    await t
        .click("#link-to-login")
        .expect(Selector("#existing-customer").find("h6").innerText).eql("LOGIN AS EXISTING CUSTOMER");
});