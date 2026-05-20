from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # Take screenshot of Hero
    page.screenshot(path="/home/jules/verification/screenshots/hero.png")
    page.wait_for_timeout(500)

    # Click About nav
    page.get_by_role("button", name="About").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/about.png")
    page.wait_for_timeout(500)

    # Click Research nav
    page.get_by_role("button", name="Research").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/research.png")
    page.wait_for_timeout(500)

    # Click Contact nav
    page.get_by_role("button", name="Contact").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/contact.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
