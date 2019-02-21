var navFunctions = {
    login: function (username, password) {
        this
            .click('@loginBtn')
            .waitForElementVisible('@loginDisplay', 2000)
            // .click('@username')
            .setValue('@username', username)
            // .click('@password')
            .setValue('@password', password)
            .click('@submitBtn')
        this.expect.element('@profilePicture').to.be.present

        return this
    },

    navProfileBar: function (username, password) {
        this.login(username, password)
            .click('@profilePicture')
            .click('@dashLink')
        this.expect.element('@dashNot').to.be.present
        this.expect.element('@dashRen').to.be.present
        this.expect.element('@dashNew').to.be.present
        this.click('@barInbox')
        this.expect.element('@inboxCheck').to.be.present
        this.click('@barList')
        this.expect.element('@listCheck').to.be.present
        this.click('@barRev')
        this.expect.element('@revCheckOne').to.be.present
        this.expect.element('@revCheckTwo').to.be.present
        this.click('@revTrust')
        this.expect.element('@revTrustCheckOne').to.be.present
        this.expect.element('@revTrustCheckTwo').to.be.present
        this.click('@revProfile')
        this.expect.element('@revProfileCheck').to.be.present
        this.click('@revEdit')
        this.expect.element('@revEditCheck').to.be.present
        this.click('@barRes')
        this.expect.element('@resCheck').to.be.present
        this.click('@barPro')
        this.click('@barAcc')
        this.expect.element('@accPayCheck').to.be.present
        this.click('@accTran')
        this.expect.element('@accTranCheck').to.be.present
        this.click('@accTranFuture')
        this.click('@accTranGross')
        this.click('@accTranComp')
        this.click('@accSec')
        this.expect.element('@accSecCheck').to.be.present
        this.click('@backtoMain')
        this.expect.element('@mainCheck').to.be.present
    }
}

module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        loginBtn: {
            selector: '(//span)[7]',
            locateStrategy: 'xpath'
        },
        username: 'input[name="email"]',
        password: 'input[name="password"]',
        submitBtn: 'button[type="submit"]',
        loginDisplay: '.LoginModal-root-2fzcd',
        profilePicture: 'img[class="sc-hrWEMg buEeUU"]',
        navBar: '.container-fluid',
        dashLink: 'a[href="/dashboard"]',
        dashNot: {
            selector: '(//div[@class="sc-jqCOkK jWYmHJ sc-gqjmRU gMqmqQ"])[1]',
            locateStrategy: 'xpath'
        },
        dashRen: {
            selector: '(//div[@class="sc-jqCOkK jWYmHJ sc-gqjmRU gMqmqQ"])[2]',
            locateStrategy: 'xpath'
        },
        dashNew: {
            selector: '(//div[@class="sc-jqCOkK jWYmHJ sc-gqjmRU gMqmqQ"])[3]',
            locateStrategy: 'xpath'
        },
        barInbox: {
            selector: '(//div[@class="sc-jqCOkK tTxIW sc-gqjmRU fptSCa"])[2]',
            locateStrategy: 'xpath'
        },
        inboxCheck: '.css-7pa3vf',
        barList: {
            selector: '(//div[@class="sc-jqCOkK tTxIW sc-gqjmRU fptSCa"])[3]',
            locateStrategy: 'xpath'
        },
        listCheck: 'i[class="fa fa-th-large fa-lg"]',
        barRev: {
            selector: '(//div[@class="sc-jqCOkK tTxIW sc-gqjmRU fptSCa"])[4]',
            locateStrategy: 'xpath'
        },
        revCheckOne: {
            selector: '(//a[@class="Reviews-tabItem-1QOT2"])[1]',
            locateStrategy: 'xpath',
        },
        revCheckTwo: {
            selector: '(//a[@class="Reviews-tabItem-1QOT2"])[2]',
            locateStrategy: 'xpath'
        },
        revTrust: {
            selector: '(//div[@class="sc-jqCOkK hVAtnY sc-gqjmRU gMqmqQ"])[3]',
            locateStrategy: 'xpath'
        },
        revTrustCheckOne: {
            selector: '(//div[@class="sc-jqCOkK kfkTye sc-gqjmRU hKirOZ"])[1]',
            locateStrategy: 'xpath'
        },
        revTrustCheckTwo: {
            selector: '(//div[@class="sc-jqCOkK kfkTye sc-gqjmRU hKirOZ"])[2]',
            locateStrategy: 'xpath'
        },
        revProfile: {
            selector: '(//div[@class="sc-jqCOkK hVAtnY sc-gqjmRU gMqmqQ"])[2]',
            locateStrategy: 'xpath'
        },
        revProfileCheck: '.ProfilePhoto-textMuted-34FzT',
        revEdit: {
            selector: '(//div[@class="sc-jqCOkK hVAtnY sc-gqjmRU gMqmqQ"])[1]',
            locateStrategy: 'xpath'
        },
        revEditCheck: {
            selector: '(//form)[3]',
            locateStrategy: 'xpath'
        },
        barRes: {
            selector: '(//div[@class="sc-jqCOkK tTxIW sc-gqjmRU fptSCa"])[5]',
            locateStrategy: 'xpath'
        },
        resCheck:'.ReservationContainer-container-395S8',
        barPro: {
            selector: '(//div[@class="sc-jqCOkK tTxIW sc-gqjmRU fptSCa"])[6]',
            locateStrategy: 'xpath'
        },
        barAcc: {
            selector: '(//div[@class="sc-jqCOkK tTxIW sc-gqjmRU fptSCa"])[7]',
            locateStrategy: 'xpath'
        },
        accPayCheck: 'div[class="sc-bdVaJa iHSytp"]',
        accTran: 'a[href="/user/transaction"]',
        accTranCheck: 'div[class="Transaction-smPadding-1dhTq col-lg-9 col-md-9 col-sm-9 col-xs-12"]',
        accTranComp: {
            selector: '(//a[@class="Transaction-tabItem-3ynOG"])[1]',
            locateStrategy: 'xpath'
        },
        accTranFuture: {
            selector: '(//a[@class="Transaction-tabItem-3ynOG"])[2]',
            locateStrategy: 'xpath'
        },
        accTranGross: {
            selector: '(//a[@class="Transaction-tabItem-3ynOG"])[3]',
            locateStrategy: 'xpath'
        },
        accSec:'a[href="/users/security"]',
        accSecCheck:'div[class="sc-jqCOkK kfkTye sc-gqjmRU hKirOZ"]',
        backtoMain: 'a[class="Header-brand-2oS_y Header-brandImg-1BgQy navbar-brand"]',
        mainCheck: 'svg'
    },
    commands: [navFunctions]
}