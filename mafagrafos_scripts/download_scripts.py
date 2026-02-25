import urllib.request
import os

files = [
    'https://mafagrafos.com/assets/index-BdX9S1PX.js',
    'https://mafagrafos.com/assets/react-vendor-Bqc3y1uR.js',
    'https://mafagrafos.com/assets/three-vendor-BWlPw9Wh.js',
    'https://mafagrafos.com/assets/utils-vendor-DL4EE14t.js',
    'https://mafagrafos.com/assets/i18n-vendor-CS9SJH6h.js'
]

dir_path = r'C:\Users\IFSUL\Documents\dev\palavras-3d\mafagrafos_scripts'

for url in files:
    filename = url.split('/')[-1]
    urllib.request.urlretrieve(url, os.path.join(dir_path, filename))
    print(f"Downloaded {filename}")
