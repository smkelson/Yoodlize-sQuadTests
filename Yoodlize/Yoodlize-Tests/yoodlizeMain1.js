var yoodlizePageObjects = {}
var yoodlizelogin = (pageObject, email, password, item, startDate, endDate) => {
    pageObject

    .click('@inputEmail')
    .setValue('@inputEmail', email)
    .click('@inputPassword')
    .setValue('@inputPassword', password)
    .click('@submitBtn')
    .click('@inputText')
    .setValue('@inputText', item)
    .click('@clickTitle')
    .click('@startDate')
    .setValue('@startDate', startDate)
    .click('@endDate')
    .setValue('@endDate', endDate)
    .click('@btnRequest')

}



module.exports = {
    beforeEach: browser => {
        yoodlizePageObjects = browser.page.yoodlizePageObjects()
        yoodlizePageObjects.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Login and Renting an item': browser => {
        yoodlizelogin(yoodlizePageObjects, 'cristian.gomessoares@gmail.com', 'cristian1983', 'dog\ue007', '02/20/2019', '02/23/2019'  )
    },

    // 'Login': browser => {
    //     yoodlizePageObjects
    //         .click('@yoodlizelogin')

    //     browser
    //         .click('input[name="email"]')
    //         .setValue('input[name="email"]', 'cristian.gomessoares@gmail.com')
    //         .click('input[name="password"]')
    //         .setValue('input[name="password"]', 'cristian23')
    //         .click('button[type="submit"]')
    //         .expect.element('button[type="submit"]').to.not.be.visible.before(5000)

    // },
    // 'Search for Item': browser => {
    //     browser
    //         .click('input[type="text"]')
    //         .setValue('input[type="text"]', 'dog\uE007')
    //         .useXpath()
    //         .waitForElementVisible('(//div[@id="card-title"])[2]')
    //         .click('(//div[@id="card-title"])[2]')
    //         .waitForElementVisible('(//form//input)[1]')
    //         .click('(//form//input)[1]')
    //         .setValue('(//form//input)[1]', '02/20/2019')
    //         .setValue('(//form//input)[2]', '02/23/2019')
    //         .useCss()
    //         .click('button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]')
    //         .click('button[class="Meetup-button-1IEeC Meetup-btnPrimary-3Fc0g btn btn-default"]')
    //         .useXpath()
    //         .expect.element('(//div)[1]').text.to.contain('Get ready to rent with Sarah').before(5000)

    // }
}