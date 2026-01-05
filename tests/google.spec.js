import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1765365776009&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Sachin tendulkar\'');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DSachin%2Btendulkar%26sca_esv%3D9c318bad663a3542%26source%3Dhp%26ei%3DEFg5aZLzE-ru4-EPjO3V-Qg%26iflsig%3DAOw8s4IAAAAAaTlmIC1HwhN1AGXXXC5U9HPz670TAzhw%26ved%3D0ahUKEwiSu_z_87KRAxVq9zgGHYx2NY8Q4dUDCBA%26uact%3D5%26oq%3DSachin%2Btendulkar%26gs_lp%3DEgdnd3Mtd2l6IhBTYWNoaW4gdGVuZHVsa2FyMggQLhiABBixAzILEAAYgAQYsQMYgwEyBRAAGIAEMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMg4QABiABBixAxiDARiKBUjmQ1DCCVjnPHADeACQAQCYAbcBoAH5E6oBBDAuMTi4AQPIAQD4AQGYAhWgArsUqAIKwgIKEAAYAxjqAhiPAcICDhAuGIAEGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQLhiABBixAxiDAcICDhAuGIAEGLEDGNEDGMcBwgIIEC4YgAQY5QTCAgsQLhiABBjHARivAcICDBAuGIAEGLEDGAoYC8ICDxAAGIAEGLEDGIMBGAoYC8ICCRAAGIAEGAoYC8ICDBAAGIAEGLEDGAoYC8ICEBAAGIAEGLEDGIMBGIoFGAqYAwXxBUWqhbXaxb_SkgcEMy4xOKAHtNIBsgcEMC4xOLgHsBTCBwYwLjE5LjLIBy-ACAA%26sclient%3Dgws-wiz%26sei%3DIlg5adn_MMOc4-EPk-L16Q0&q=EgRnu_mXGKOw5ckGIjCvLMVNEKCZ3YF3zo-uhLc0S7do5QkTIUAfMUC14AoLKWiAjd-7QTvimXobx0W6zSYyAVJaAUM');
  await page.locator('iframe[name="a-f06j8kjkiaf3"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});