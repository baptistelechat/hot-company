from pycnic.core import WSGI
from toast import Toast

class app(WSGI):
    routes = [('/toast', Toast())]