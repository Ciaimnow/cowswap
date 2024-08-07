@echo off
setlocal

rem Specify the directory where the index.html file is located
set "web_dir=C:\Users\turk\Desktop\websites\9_neger"

rem Start the local server and open the web page
start http://localhost:8000/index.html
python -m http.server --directory "%web_dir%"

endlocal
