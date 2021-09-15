import { Selector, ClientFunction, t } from 'testcafe';

export async function loginPhpTravels(username, userpass) {
    await t
        .typeText('.form-control', username)
        .pressKey('tab')
        .typeText(Selector('.form-control').nth(1), userpass)
        .pressKey('enter');
};

export async function goBack() {
    const back = ClientFunction(() => window.history.back());
    await back();
};
