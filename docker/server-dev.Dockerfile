FROM python:3.6.6

ENV PYTHONUNBUFFERED 1

RUN mkdir -p /home/app
RUN pip install pipenv
COPY Pipfile /home/app/
COPY Pipfile.lock /home/app/
WORKDIR /home/app

RUN pipenv install --dev
