import { Selector } from 'testcafe';
import { loginPhpTravels, goBack } from './TestHelper.js';

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
    ('Successfull login with the valid user and password - keyboard', async t => {
        await t
            .click(Selector('header a').withText('Login').nth(2))
            .typeText('.form-control', 'user@phptravels.com')
            .pressKey('tab')
            .typeText(Selector('.form-control').nth(1), 'demouser')
            .pressKey('enter')

        //assert block
        .expect(Selector('strong').innerText).contains('Demo', 'Field contains text "Demo"')
        .expect(Selector('h2').innerText).contains('Hi, Demo Welcome Back', 'Field contains text "Hi, Demo Welcome Back"')
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
    ('Reset login information after the page refresh', async t => {
        const username = 'user@phptravels.com';
        const userpswd = 'demouser';
        
        await t
            .click(Selector('header a').withText('Login').nth(2))    
            .typeText('.form-control', username)
            .pressKey('tab')
            .typeText(Selector('.form-control').nth(1), userpswd)
            .pressKey('ctrl+r')

        //assert block
        .expect(Selector('body > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > button > span.ladda-label').innerText).eql('Login', 'Login button is not visible')
        .expect(Selector('.form-control').textContent).notContains(username, 'The inserted user name remains after refresh')
        .expect(Selector('.form-control').nth(1).textContent).notContains(userpswd, 'The inserted user password remains after refresh')
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
    ('Empty user login data test', async t => {
        await t
            .click(Selector('header a').withText('Login').nth(2))
            .typeText('.form-control', 'user@phptravels.com')
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
    ('Empty user password data test', async t => {
        await t
            .click(Selector('header a').withText('Login').nth(2))
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
    ('Huge login data test', async t => {
        await t
            .click(Selector('header a').withText('Login').nth(2))    
            .typeText('.form-control', 'lkjrw94r09w4rjkrfj;elgjkwrgj;wl5kgj;lgjke;lskgjwe;lfgjkwergjwe;lrgjkw;elrkgjw;elrkgjw;k54jgk4g5jw;lkgj;lkergj;lwekgjwe;rlgjkwe;rlkgjw5kjwkerj;glkwerjg;lerkgjwe;lrgjw45gkw;elgkjer;glwejr;glkwerj;glwrj;lgjk;rlkgje;lrgjkwe;lgjke;rlgwjke;glwejr;glwergjkwe;rlgjwe;rlgjkwer;gklejrg;lker;gjlwerkgjwlergjkwe;rgjwe;rlgejkwr;glwejkg;lwegj;welrgj')
            .typeText(Selector('.form-control').nth(1), 'dfgwegwefklehrfgkljwehlgjehfgklwhegwlekrghlerkghwerlghwekrghwklerghwjelrghweklrwjherkheklrghweklrghwrughfjklgehklfgjwheflkwjrleijh4lgh4gjigrgwerklgwehrkgjwhlerghweklrjhklerghlwekhrsergwergwerklrgherjghrjwehklhrgherjlgwh4uigl4;rogknweklnekjrglwergerh')
            .click(Selector('button').withText('Login'))

        //assert block
        // I am not sure about expectations here. From one hand it is allowed to insert as many symbols as you want. And system is not failing. From the other hand its unusual behavior.
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
    ('Multiple separated email in user login', async t => {
        await t
            .click(Selector('header a').withText('Login').nth(2))    
            .click('.form-control')
            .typeText('.form-control', 'user@phptravels.com; user@phptravels.com')
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
    ('Paste the logged in user page after logout', async t => {
        await t.click(Selector('header a').withText('Login').nth(2));
        await loginPhpTravels('user@phptravels.com', 'demouser');
        await t
            .click(Selector('a').withText('Logout').nth(1))
            .navigateTo('http://192.168.0.174:56994/6biwzcaAJ!f/https://www.phptravels.net/account/dashboard')

        //assert block
        .expect(Selector('strong').exists).notOk()
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
    ('Return back after the successfull login - logout', async t => {
        await t.click(Selector('header a').withText('Login').nth(2));
        await loginPhpTravels('user@phptravels.com', 'demouser');
        await t.click(Selector('a').withText('Logout').nth(1));
        await goBack();

        //assert block
        await t.expect(Selector('strong').exists).notOk()
    });