import { Selector } from 'testcafe';

fixture `Login`
    .page `http://localhost:3000/`;

test("Login user with valid credentials", async t => {
    const successMessageElement = Selector("#content").find('.flash.success');
    await t
        .click("#link-to-login")
        .typeText(Selector("#spree_user_email"), "spree@example.com")
        .typeText(Selector("#spree_user_password"), "spree123")
        .click(Selector('[name="commit"]'))
        .expect(successMessageElement.innerText).eql("Logged in successfully");
});

test('Unsuccessful login when username is wrong', async t => {
    const unsuccessfulNotification = Selector("#content").find(".flash.error");
    await t
        .click("#link-to-login")
        .typeText(Selector("#spree_user_email"), "wrong-email@example.com")
        .typeText(Selector("#spree_user_password"), "spree123")
        .click(Selector('[name="commit"]'))
        .expect(unsuccessfulNotification.innerText).eql("Invalid email or password.")
});

test('Unsuccessful login when password is wrong', async t => {
    const unsuccessfulNotification = Selector("#content").find(".flash.error");
    await t
        .click("#link-to-login")
        .typeText(Selector("#spree_user_email"), "spree@example.com")
        .typeText(Selector("#spree_user_password"), "wrong-password")
        .click(Selector('[name="commit"]'))
        .expect(unsuccessfulNotification.innerText).eql("Invalid email or password.")
});
