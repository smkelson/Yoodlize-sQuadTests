var owner = {}

module.exports = {
    beforeEach: browser => {
        owner = browser.page.ownerObjectsPage()
        owner.navigate()
    },
    after: browser => {
        browser.end()
    },

    'userName': browser => {
        owner.login('smkelson@yahoo.com', 'Dexterbaby2004!')
    }
}