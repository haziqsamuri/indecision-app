# indecision-app
REACT hands-on tutorial from Udemy by Andrew Mead

Author: Muhammad Haziq Samuri

Github: msamuri

Requires node.js and yarn

Set-up: 
1. yarn global add live-server OR npm install -g live-server
2. yarn global add babel-cli OR npm install -g babel-cli
3. yarn init
4. yarn add babel-preset-react babel-preset-env


To run, 

run the following in terminal:

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

Note: if using a different file than app.js, change directory of 2nd command

then in another terminal:

live-server public 