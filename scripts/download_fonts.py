import re
import urllib.request
from pathlib import Path

families = [
    ("Cormorant Garamond", "cormorant-garamond", "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap"),
    ("Manrope", "manrope", "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap"),
    ("Inter", "inter", "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"),
]

base_dir = Path(__file__).resolve().parents[1] / "public" / "fonts"
base_dir.mkdir(parents=True, exist_ok=True)

for _, folder, css_url in families:
    out_dir = base_dir / folder
    out_dir.mkdir(parents=True, exist_ok=True)
    css = urllib.request.urlopen(css_url).read().decode("utf-8")
    urls = re.findall(r"url\((https://fonts.gstatic.com/[^)]+\.woff2)\)", css)
    if not urls:
        raise RuntimeError(f"No font URLs found for {folder}")
    for i, url in enumerate(urls, 1):
        filename = out_dir / f"{folder}-{i}.woff2"
        urllib.request.urlretrieve(url, filename)
        print(f"Downloaded {filename}")
