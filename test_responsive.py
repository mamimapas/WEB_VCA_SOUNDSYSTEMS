"""Test visual responsive de VCA web en 3 viewports."""
import os
import sys
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:3000"
OUT_DIR = "C:/Users/tartaletas/Desktop/SAPIENSDATAAI/CLIENTES/VCA_SOUNDSYSTEMS/SCREENSHOTS"
os.makedirs(OUT_DIR, exist_ok=True)

VIEWPORTS = [
    {"name": "mobile-360", "width": 360, "height": 800, "device_scale_factor": 2, "is_mobile": True, "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"},
    {"name": "tablet-768", "width": 768, "height": 1024, "device_scale_factor": 2, "is_mobile": True, "user_agent": "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15"},
    {"name": "desktop-1440", "width": 1440, "height": 900, "device_scale_factor": 1, "is_mobile": False, "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"},
]

ROUTES = [
    ("/", "home"),
    ("/trabajos", "trabajos"),
    ("/servicios", "servicios"),
    ("/servicios/sonido-profesional-eventos", "servicio-sonido"),
    ("/marcas", "marcas"),
    ("/sectores/festivales", "sector-festivales"),
    ("/presupuesto", "presupuesto"),
    ("/contacto", "contacto"),
    ("/sobre-nosotros", "sobre-nosotros"),
]

results = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    for vp in VIEWPORTS:
        print(f"\n=== {vp['name']} ({vp['width']}x{vp['height']}) ===")
        context = browser.new_context(
            viewport={"width": vp["width"], "height": vp["height"]},
            device_scale_factor=vp["device_scale_factor"],
            is_mobile=vp["is_mobile"],
            user_agent=vp["user_agent"],
        )
        page = context.new_page()

        for route, slug in ROUTES:
            url = BASE_URL + route
            try:
                response = page.goto(url, wait_until="networkidle", timeout=15000)
                status = response.status if response else 0

                # Esperar a que se renderice fuentes/animaciones
                page.wait_for_timeout(1500)

                # Capturar screenshot completo
                out_path = f"{OUT_DIR}/{vp['name']}_{slug}.png"
                page.screenshot(path=out_path, full_page=True)

                # Verificaciones clave
                has_h1 = page.locator("h1").count() > 0
                h1_text = page.locator("h1").first.inner_text() if has_h1 else ""

                # Verificar que no hay overflow horizontal
                has_overflow = page.evaluate("""() => {
                    return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
                }""")

                # Verificar que el body es visible
                body_visible = page.locator("body").is_visible()

                result = {
                    "viewport": vp["name"],
                    "route": route,
                    "status": status,
                    "has_h1": has_h1,
                    "h1_text": h1_text[:60],
                    "horizontal_overflow": has_overflow,
                    "body_visible": body_visible,
                    "screenshot": out_path,
                }
                results.append(result)

                ok_marker = "OK" if (status == 200 and has_h1 and not has_overflow and body_visible) else "FAIL"
                overflow_marker = " [OVERFLOW!]" if has_overflow else ""
                print(f"  [{ok_marker}] {route:40s} status={status} h1='{h1_text[:30]}'{overflow_marker}")

            except Exception as e:
                print(f"  [ERROR] {route}: {e}")
                results.append({"viewport": vp["name"], "route": route, "status": "ERROR", "error": str(e)})

        context.close()

    browser.close()

# Resumen final
print("\n\n=== RESUMEN ===")
total = len(results)
passed = sum(1 for r in results if r.get("status") == 200 and not r.get("horizontal_overflow", False) and r.get("has_h1", False))
overflows = [r for r in results if r.get("horizontal_overflow")]
errors = [r for r in results if r.get("status") != 200]

print(f"Tests totales: {total}")
print(f"OK: {passed}")
print(f"Overflow horizontal: {len(overflows)}")
print(f"Errores: {len(errors)}")

if overflows:
    print("\n⚠️  PÁGINAS CON OVERFLOW HORIZONTAL:")
    for r in overflows:
        print(f"  - {r['viewport']} {r['route']}")

if errors:
    print("\n❌ ERRORES:")
    for r in errors:
        print(f"  - {r['viewport']} {r['route']} → {r.get('error', r.get('status'))}")

sys.exit(0 if passed == total else 1)
