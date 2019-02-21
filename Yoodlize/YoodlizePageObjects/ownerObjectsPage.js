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
            return this
    },
    postItem: function(title, desc, category, address, apt, city, state, zip, dailyRate, rules, photo) {
        this
        .click('@listStuff')
        .click('@startBtn')
        .setValue('@itemTitle', title)
        .setValue('@itemDesc', desc)
        .clickText(category)
        .click('@next1')
        .waitForElementVisible('@address')
        .setValue('@address', address)
        .setValue('@city', city)
        .setValue('@state', state)
        .setValue('@zip', zip)
        .click('@next2')
        .waitForElementVisible('@dailyRate')
        // .pause(500)
        .setValue('@dailyRate', dailyRate)
        .click('@next3')
        .waitForElementVisible('select')
        .setValue('select', rules)
        .clickText('Save & Next: Availability')
        .waitForElementNotPresent('select')
        .getLocationInView('@next4')
        .clickText('Next: Photos')
        .waitForElementPresent('@photo')
        // .click('@photo')
        .uploadPhoto(photo)
        // .pause(2000)
        .waitForElementVisible('@coverPhoto', 5000)
        .clickText('Save & Next: Review')
        .waitForElementPresent('@liability', 5000)
        .click('@liability')
        .waitForElementPresent('@terms', 5000)
        .moveToElement('@terms', 10, 10)
        .api.mouseButtonClick(0)
        this.click('@publish')
        .waitForElementVisible('@success', 5000)
        .expect.element('@success').text.to.equal('You have successfully published your listing')
        this.clickText('View Listing')
        .expect.element('@successListing').text.to.equal(title)

        return this
    },

    clickText: function(text) {
        this.api.useXpath()
        this.click(`//*[text()="${text}"]`)
        this.api.useCss()

        return this
    },
    uploadPhoto: function(picture) {
        this.setValue('@photo', require('path').resolve(`/Users/Sarah's laptop/Desktop/${picture}`))
    
return this
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
        navBar: '.container-fluid',
        listStuff: {
            selector: '(//span[1])[5]',
            locateStrategy: 'xpath'
        },
        startBtn: 'button[class="sc-esjQYD iteNRl sc-ifAKCX kvYMhQ"]',
        itemTitle: 'input[class="sc-hORach AOFbL"]',
        itemDesc: 'textarea[class="sc-VJcYb jWnxHj"]',
        next1: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        address: 'input[placeholder="Street Address"]',
        apt: 'input[placeholder="Apt, suite, Bldg, (optional)"]',
        city: 'input[placeholder="City"]',
        state: 'input[placeholder="State"]',
        zip: 'input[placeholder="Zipcode"]',
        next2: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        dailyRate: 'input[type="number"]',
        next3: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        next4: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        next5: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        photo: 'input[type="file"]',
        next6: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        liability: {
        selector: '(//div[@class="icheckbox_minimal-blue"])[1]',
        locateStrategy: 'xpath'
        },
        terms: {
            selector: '(//ins)[2]',
            locateStrategy: 'xpath'
        },
        successListing: 'div[class="sc-jqCOkK lcWNTj sc-gqjmRU fptSCa"]',
        publish: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        viewListing: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        success: 'div[class="sc-jqCOkK ifkAej sc-gqjmRU bQRrST"]',
        coverPhoto: {
            selector: '(//a[text()="Use as cover photo"])',
            locateStrategy: 'xpath'
        },

    },  
    commands: [ownerFunctions]   
}
    