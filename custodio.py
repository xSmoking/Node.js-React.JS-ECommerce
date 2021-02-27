from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from datetime import datetime
import selenium.webdriver.support.ui as ui
import time


class Instagram:
    def __init__(self, email, password):
        self.email = email
        self.password = password

        # connect google chrome with chromedriver
        options = webdriver.ChromeOptions()
        # Replace this location with location of chrome.exe on your machine
        options.binary_location = r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
        # Replace this location with location of chromedriver.exe
        chrome_driver_binary = r"C:\webdriver\chromedriver.exe"
        self.driver = webdriver.Chrome(
            executable_path=chrome_driver_binary, options=options)

        self.driver.get("https://www.instagram.com/")
        # timeout after 10 seconds
        self.wait = ui.WebDriverWait(self.driver, 180)
        time.sleep(1)

        username_input = self.driver.find_element_by_xpath(
            '//*[@id="loginForm"]/div/div[1]/div/label/input')
        username_input.send_keys(self.email)
        time.sleep(1)

        password_input = self.driver.find_element_by_xpath(
            '//*[@id="loginForm"]/div/div[2]/div/label/input')
        password_input.send_keys(self.password)

        login = self.driver.find_element_by_xpath(
            '//*[@id="loginForm"]/div/div[3]/button')
        login.click()

        time.sleep(3)

        self.driver.get("https://www.instagram.com/p/CJl8UtdD1fS/?hl=pt-br")

        time.sleep(2)

        comment_input = self.driver.find_element_by_xpath(
            '//*[@id="react-root"]/section/main/div/div[1]/article/div[3]/section[3]/div/form/textarea')
        comment_input.send_keys(
            '@jmazaia @jhennyreiis @souza.phs @mallia.7 @lucaskalil_')

        time.sleep(1)

        self.driver.find_element_by_xpath(
            '//*[@id="react-root"]/section/main/div/div[1]/article/div[3]/section[3]/div/form/button[2]').click()


if __name__ == "__main__":
    ig = Instagram('joaocovaes@gmail.com', '1pc52b6o')
