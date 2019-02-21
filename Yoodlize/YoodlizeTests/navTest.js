var nav = {}

module.exports = {
    beforeEach: browser => {
        nav = browser.page.yoodlizePageObjects()
        nav.navigate()
    },
    after: browser => {
        browser.end()
    },

    // 'Login': browser => {
    //     nav.login('napnek@gmail.com', 'Tester18!')
    // }
    'Navigate through Profile Bar': browser => {
        nav.navProfileBar("napnek@gmail.com","Tester18!")
    }
}