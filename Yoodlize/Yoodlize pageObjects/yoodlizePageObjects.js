module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        yoodlizelogin: {
            selector: '//span[contains(text(), "Log in")]',
            locateStrategy: 'xpath'
        },
        inputEmail: 'input[name="email"]',
        inputPassword: 'input[name="password"]',
        submitBtn: 'button[type="submit"]',
        inputText: 'input[type="text"]',
        clickTitle: { selector: '(//div[@id="card-title"])[2]', locateStrategy: 'xpath' },
        clickCalendar: { selector: '(//form//input)[1]', locateStrategy: 'xpath'},
        startDate: { selector: '(//form//input)[1]', locateStrategy: 'xpath'},
        endDate: { selector: '(//form//input)[2]', locateStrategy: 'xpath'},
        btnRequest: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',
        btnNext: 'button[class="Meetup-button-1IEeC Meetup-btnPrimary-3Fc0g btn btn-default"]'


    }
}