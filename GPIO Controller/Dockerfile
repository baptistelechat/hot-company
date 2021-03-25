FROM python:3.6.9-alpine3.9

RUN mkdir -p /srv
COPY server.py /srv
COPY toast.py /srv
COPY requirements.txt /srv
WORKDIR /srv

RUN apk update
RUN apk add -U py3-gunicorn

RUN pip install -r requirements.txt
CMD ["gunicorn", "-b", "localhost:5100", "server:app"]
