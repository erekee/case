module.exports = {
'tags' : ['case7'],
'test artsyjewels' : function (browser) {
browser
.url('https://store.steampowered.com/app/858810/Dawn_of_Man/') // Go to a url
.waitForElementVisible('body', 10000) // wait till page loads
.click('#game_area_purchase > div.game_area_purchase_game_wrapper > div > div.game_purchase_action > div > div.btn_addtocart > a')

.click('#btn_purchase_gift')
.setValue('#input_username', 'mr.ernur99')
.setValue('#input_password', 'QAQ')
.pause(1000)
.end();
}
};
