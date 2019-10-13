FROM ruby:2.6.0

ENV LANG C.UTF-8

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

WORKDIR /tmp

ADD Gemfile Gemfile

ADD Gemfile.lock Gemfile.lock

RUN gem install bundler

RUN bundle install

RUN mkdir -p app

WORKDIR /app

ADD . /app
