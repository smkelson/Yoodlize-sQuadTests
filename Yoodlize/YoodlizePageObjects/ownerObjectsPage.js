var ownerFunctions = {
    login: function(userName, password) {
        this
            .click('@loginBtn')
            .waitForElementVisible('@loginDisplay', 2000)
            .click('@login')
            .setValue('@login', userName)
            .click('@password')
            .setValue('@password', password)
            .click('@submitBtn')
            this.expect.element('@displayImg').to.be.present
    }
}

module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        loginBtn: {
        selector: '(//span)[7]',
        locateStrategy: 'xpath'
    },
        login: 'input[name="email"]',
        password: 'input[name="password"]',
        submitBtn: 'button[type="submit"]',
        loginDisplay: '.LoginModal-root-2fzcd',
        displayImg: 'img[class="sc-hrWEMg buEeUU"]',
        navBar: '.container-fluid'
    },  
    commands: [ownerFunctions]   
}
    