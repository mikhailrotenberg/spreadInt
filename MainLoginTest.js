import { Selector } from 'testcafe';

fixture `Set the webpage under test`
    .page `https://www.phptravels.net/`;

test
    .before( async t => {
        await t
            // code to create test data (test user)
            .maximizeWindow()
    })
    .after( async t => {
        // code to delete the prepared test data
    })
    ('Successfull login with the valid user and password - mouse clicks', async t => {
        await t
            .click(Selector('header a').withText('Login').nth(2))    
            .typeText('.form-control', 'user@phptravels.com')
            .typeText(Selector('.form-control').nth(1), 'demouser')
            .click(Selector('button').withText('Login'))

            //assert block
            .expect(Selector('strong').innerText).contains('Demo', 'Field contains text "Demo"')
            .expect(Selector('h2').innerText).contains('Hi, Demo Welcome Back', 'Field is not containing text "Hi, Demo Welcome Back"')
    });

test
    .before( async t => {
        await t
            // code to create test data (test user)
            .maximizeWindow()
    })
    .after( async t => {
        // code to delete the prepared test data
    })
    ('Failed Login with the wrong user name', async t => {
        await t
            .click(Selector('header a').withText('Login').nth(2))    
            .typeText('.form-control', 'userphptravels')
            .pressKey('tab')
            .typeText(Selector('.form-control').nth(1), 'demouser')
            .click(Selector('button').withText('Login'))

            //assert block
            .expect(Selector('body > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > button > span.ladda-label').innerText).eql('Login', 'Login button is not visible')

            
});

test
    .before( async t => {
        await t
            // code to create test data (test user)
            .maximizeWindow()
    })
    .after( async t => {
        // code to delete the prepared test data
    })
    ('Failed Login with the wrong password', async t => {
        await t
            .click(Selector('header a').withText('Login').nth(2))    
            .typeText('.form-control', 'user@phptravels.com')
            .pressKey('tab')
            .typeText(Selector('.form-control').nth(1), 'Wronguserpassword')
            .pressKey('enter')
            
            //assert block
            .expect(Selector('body > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > button > span.ladda-label').innerText).eql('Login', 'Login button is not visible')
    });