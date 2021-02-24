from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome('C:/webdriver/chromedriver.exe')
driver.get("https://gshow.globo.com/realities/bbb/bbb21/votacao/paredao-bbb21-vote-para-eliminar-arthur-gilberto-ou-karol-conka-838ec4d5-7d17-4263-a335-29e13c3a769b.ghtml")
assert "BBB21" in driver.title
elem = driver.find_element_by_xpath(
    '//*[@id="roulette-root"]/div/div[1]/div[4]/div/div[6]/div/div/div/div/div/div/div[1]/div/div')
elem.click()
