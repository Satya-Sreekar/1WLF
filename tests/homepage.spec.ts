import { test, expect } from '@playwright/test'

test.describe('Homepage Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Wait for the app to hydrate
    await page.waitForSelector('.home-navbar', { timeout: 10000 })
  })

  test('navbar is visible with correct elements', async ({ page }) => {
    const navbar = page.locator('.home-navbar')
    await expect(navbar).toBeVisible()

    // Logo
    await expect(page.locator('.home-nav-logo')).toBeVisible()
    await expect(page.locator('.home-nav-logo-img')).toBeVisible()

    // Nav links
    const navLinks = page.locator('.home-nav-links a')
    await expect(navLinks).toHaveCount(4)
    await expect(navLinks.nth(0)).toHaveText('Projects')
    await expect(navLinks.nth(1)).toHaveText('Focus')
    await expect(navLinks.nth(2)).toHaveText('Philosophy')
    await expect(navLinks.nth(3)).toHaveText('Contact')

    // Flagship CTA
    const flagship = page.locator('.home-nav-flagship-desktop')
    await expect(flagship).toBeVisible()
    await expect(flagship).toContainText('1WLF TMS')
    await expect(flagship).toContainText('Flagship')
    await expect(flagship).toHaveAttribute('href', '/tms')
  })

  test('navbar gets scrolled class on scroll', async ({ page }) => {
    const navbar = page.locator('.home-navbar')
    await expect(navbar).not.toHaveClass(/scrolled/)

    await page.evaluate(() => window.scrollBy(0, 200))
    await page.waitForTimeout(300)
    await expect(navbar).toHaveClass(/scrolled/)
  })

  test('flagship badge has gradient background', async ({ page }) => {
    const flagship = page.locator('.home-nav-flagship-desktop')
    const bg = await flagship.evaluate(el => getComputedStyle(el).backgroundImage)
    expect(bg).toContain('gradient')
  })
})

test.describe('Section consistency', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('.home-navbar', { timeout: 10000 })
  })

  test('all sections have id attributes for nav anchoring', async ({ page }) => {
    await expect(page.locator('#projects')).toBeAttached()
    await expect(page.locator('#focus')).toBeAttached()
    await expect(page.locator('#philosophy')).toBeAttached()
    await expect(page.locator('#contact')).toBeAttached()
  })

  test('all sections have consistent section headers', async ({ page }) => {
    // Projects, Focus, Philosophy, Contact should all have section-label + section-title
    const sectionLabels = page.locator('.section-label')
    const sectionTitles = page.locator('.section-title')

    // Should be at least 4 labels and 4 titles (one per section)
    await expect(sectionLabels).toHaveCount(4)
    await expect(sectionTitles).toHaveCount(4)
  })

  test('section padding is consistent (100px top/bottom on desktop)', async ({ page }) => {
    const sections = ['#projects', '#focus', '#philosophy', '#contact']

    for (const selector of sections) {
      const padding = await page.locator(selector).evaluate(el => {
        const style = getComputedStyle(el)
        return {
          top: parseInt(style.paddingTop),
          bottom: parseInt(style.paddingBottom),
        }
      })
      expect(padding.top).toBe(100)
      expect(padding.bottom).toBe(100)
    }
  })

  test('cards use consistent border-radius (16px)', async ({ page }) => {
    // Project card
    const projectRadius = await page.locator('.project-card').evaluate(el =>
      getComputedStyle(el).borderRadius
    )
    expect(projectRadius).toBe('16px')

    // Focus cards
    const focusRadius = await page.locator('.focus-card').first().evaluate(el =>
      getComputedStyle(el).borderRadius
    )
    expect(focusRadius).toBe('16px')

    // Terminal
    const terminalRadius = await page.locator('.terminal').evaluate(el =>
      getComputedStyle(el).borderRadius
    )
    expect(terminalRadius).toBe('16px')
  })

  test('scroll progress bar is positioned below navbar', async ({ page }) => {
    const top = await page.locator('.scroll-progress').evaluate(el =>
      getComputedStyle(el).top
    )
    expect(top).toBe('60px')
  })
})

test.describe('Mobile responsiveness', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('hamburger menu visible on mobile, nav links hidden', async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('.home-navbar', { timeout: 10000 })

    await expect(page.locator('.home-nav-hamburger')).toBeVisible()
    await expect(page.locator('.home-nav-links')).not.toBeVisible()
    await expect(page.locator('.home-nav-flagship-desktop')).not.toBeVisible()
  })

  test('mobile menu opens and shows TMS CTA', async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('.home-navbar', { timeout: 10000 })

    await page.locator('.home-nav-hamburger').click()

    const mobileMenu = page.locator('.home-nav-mobile.open')
    await expect(mobileMenu).toBeVisible()

    // TMS CTA in mobile menu
    const mobileFlagship = mobileMenu.locator('.home-nav-flagship')
    await expect(mobileFlagship).toBeVisible()
    await expect(mobileFlagship).toContainText('1WLF TMS')
  })
})
