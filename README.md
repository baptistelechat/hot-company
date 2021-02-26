# hot-company
A web application to control a homemade connected toaster

## GPIO Controller

### Install dependencies
pip3 install pycnic
sudo apt-get install gunicorn3

### Run server

gunicorn3 -b 127.0.0.1:5100 server:app
