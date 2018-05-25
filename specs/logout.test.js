import { Selector } from 'testcafe';
import { Role } from 'testcafe';

const regularAccUser = Role('http://localhost:3000/login', async t => {
    await t
        .typeText(Selector("#spree_user_email"), "spree@example.com")
        .typeText(Selector("#spree_user_password"), "spree123")
        .click(Selector('[name="commit"]'))
});

fixture `Logout`
    .page `http://localhost:3000/`;

    test('User should get logged out successfully', async t => {
        const logout = Selector("#nav-bar").find("li").nth(1).find('a');
        await t
            .useRole(regularAccUser)
            .click(logout)
            .expect(Selector("#content").find('.flash.notice').innerText).eql("Signed out successfully.");

    })