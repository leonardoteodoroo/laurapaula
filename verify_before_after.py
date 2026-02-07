from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the local dev server
        page.goto("http://localhost:3000", wait_until="domcontentloaded")

        # Wait for the BeforeAfter component to be visible
        # It has the text "ALÍVIO QUE FICA"
        section = page.get_by_text("ALÍVIO QUE FICA")
        section.scroll_into_view_if_needed()

        # Wait a bit for animations or images to load
        page.wait_for_timeout(2000)

        # Take a screenshot of the viewport
        page.screenshot(path="verification_before_after.png")

        browser.close()

if __name__ == "__main__":
    run()
