var owner = {}

module.exports = {
    beforeEach: browser => {
        owner = browser.page.ownerObjectsPage()
        owner.navigate()
        .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },

    'userName': browser => {
        owner.login('smkelson@yahoo.com', 'Dexterbaby2004!')
    },
    'post an item': browser => {
        owner.postItem('basketball standard','adjustable with 3 heights', 'Sporting Goods', '234 Sunnydale Ln', '', 'Spanish Fork', 'UT', '84660', '10', 'No late returns', 'basketball.jpg')
    },
}