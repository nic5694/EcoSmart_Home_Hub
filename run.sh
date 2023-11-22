#!/bin/bash
cd /home/nicho/Documents/finalproject
fuser -k 3000/tcp
fuser -k 5000/tcp
unset GIT_INDEX_FILE 
echo "Publishing our React App" 
 
cd /home/nicho/Documents/finalproject/frontend/build
echo "Building React App"
npm run-script build --verbose

# flask settings
cd /home/nicho/Documents/finalproject/frontend
echo "Starting flask API and React app"
export FLASK_APP=/home/nicho/Documents/finalproject/backend/app.py && export FLASK_DEBUG=0
serve -s build & cd ~/Documents/finalproject/backend && flask run --host=0.0.0.0 --port=5000
