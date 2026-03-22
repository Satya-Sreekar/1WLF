import { test, expect } from '@playwright/test'

test.describe('TMS Features Grid consistency', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tms')
    await page.waitForSelector('.features-grid', { timeout: 10000 })
  })

  test('feature cards in the same row have equal heights', async ({ page }) => {
    // Scroll to features so they render
    await page.locator('#features').scrollIntoViewIfNeeded()
    await page.waitForTimeout(1000)

    const cards = page.locator('.feature-card')
    const count = await cards.count()
    expect(count).toBeGreaterThanOrEqual(6)

    // Get all card heights
    const heights = await cards.evaluateAll(els =>
      els.map(el => el.getBoundingClientRect().height)
    )

    // Group by rows of 3 and check each row has equal heights
    for (let i = 0; i < heights.length; i += 3) {
      const row = heights.slice(i, Math.min(i + 3, heights.length))
      if (row.length > 1) {
        const maxH = Math.max(...row)
        const minH = Math.min(...row)
        // Allow 1px tolerance for subpixel rendering
        expect(maxH - minH).toBeLessThanOrEqual(1)
      }
    }
  })

  test('features grid uses 3-column layout', async ({ page }) => {
    const cols = await page.locator('.features-grid').first().evaluate(el =>
      getComputedStyle(el).gridTemplateColumns
    )
    const colCount = cols.split(' ').length
    expect(colCount).toBe(3)
  })
})

test.describe('TMS Roles Grid consistency', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tms')
    await page.waitForSelector('.roles-grid', { timeout: 10000 })
  })

  test('role cards have equal heights within each grid', async ({ page }) => {
    const grids = page.locator('.roles-grid')
    const gridCount = await grids.count()
    expect(gridCount).toBeGreaterThanOrEqual(1)

    for (let g = 0; g < gridCount; g++) {
      const grid = grids.nth(g)
      await grid.scrollIntoViewIfNeeded()
      await page.waitForTimeout(500)

      const cards = grid.locator('.role-card')
      const count = await cards.count()
      expect(count).toBeGreaterThanOrEqual(2)

      const heights = await cards.evaluateAll(els =>
        els.map(el => el.getBoundingClientRect().height)
      )

      const maxH = Math.max(...heights)
      const minH = Math.min(...heights)
      expect(maxH - minH).toBeLessThanOrEqual(1)
    }
  })
})

test.describe('TMS Tech Grid consistency', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tms')
    await page.waitForSelector('.tech-grid', { timeout: 10000 })
  })

  test('tech items have equal heights per row', async ({ page }) => {
    await page.locator('.tech-grid').scrollIntoViewIfNeeded()
    await page.waitForTimeout(1000)

    const items = page.locator('.tech-item')
    const count = await items.count()
    expect(count).toBeGreaterThanOrEqual(4)

    const heights = await items.evaluateAll(els =>
      els.map(el => el.getBoundingClientRect().height)
    )

    // Group by rows of 4
    for (let i = 0; i < heights.length; i += 4) {
      const row = heights.slice(i, Math.min(i + 4, heights.length))
      if (row.length > 1) {
        const maxH = Math.max(...row)
        const minH = Math.min(...row)
        expect(maxH - minH).toBeLessThanOrEqual(1)
      }
    }
  })
})

test.describe('TMS Screenshot Carousel', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tms')
    await page.locator('#screenshots').scrollIntoViewIfNeeded()
    await page.waitForSelector('.carousel-viewport', { timeout: 10000 })
  })

  test('carousel renders with all slides', async ({ page }) => {
    const slides = page.locator('.carousel-slide')
    const count = await slides.count()
    expect(count).toBe(7)
  })

  test('carousel has navigation arrows, dots, and play/pause', async ({ page }) => {
    await expect(page.locator('.carousel-arrow.prev')).toBeAttached()
    await expect(page.locator('.carousel-arrow.next')).toBeAttached()

    const dots = page.locator('.carousel-dot')
    await expect(dots).toHaveCount(7)

    // First dot is active by default
    await expect(dots.first()).toHaveClass(/active/)

    await expect(page.locator('.carousel-playpause')).toBeVisible()
    await expect(page.locator('.carousel-counter')).toHaveText('1 / 7')
  })

  test('clicking next arrow advances the slide', async ({ page }) => {
    // Hover to reveal arrows
    await page.locator('.carousel-viewport').hover()
    await page.locator('.carousel-arrow.next').click()
    await page.waitForTimeout(600)

    await expect(page.locator('.carousel-counter')).toHaveText('2 / 7')
    await expect(page.locator('.carousel-dot').nth(1)).toHaveClass(/active/)
  })

  test('clicking a dot jumps to that slide', async ({ page }) => {
    await page.locator('.carousel-dot').nth(4).click()
    await page.waitForTimeout(600)

    await expect(page.locator('.carousel-counter')).toHaveText('5 / 7')
    await expect(page.locator('.carousel-dot').nth(4)).toHaveClass(/active/)
  })

  test('theme toggle switches screenshot sources', async ({ page }) => {
    const firstImg = page.locator('.carousel-slide img').first()
    const darkSrc = await firstImg.getAttribute('src')
    expect(darkSrc).toContain('screenshots-dark')

    // Switch to light
    await page.locator('.gallery-toggle button').first().click()
    const lightSrc = await firstImg.getAttribute('src')
    expect(lightSrc).toContain('screenshots/')
    expect(lightSrc).not.toContain('screenshots-dark')
  })

  test('play/pause button toggles autoplay', async ({ page }) => {
    const btn = page.locator('.carousel-playpause')

    // Initially playing — should show pause icon
    await expect(btn).toBeVisible()

    // Click to pause
    await btn.click()
    await expect(page.locator('.carousel-counter')).toHaveText('1 / 7')

    // Wait and verify it stays on slide 1 (paused)
    await page.waitForTimeout(5000)
    await expect(page.locator('.carousel-counter')).toHaveText('1 / 7')
  })
})
