FROM ruby:2.6.0
ENV DOCKER_DEV true
ENV BUNDLE_JOBS=4
ENV BUNDLE_PATH=/bundle

ENV LANG C.UTF-8

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

WORKDIR /tmp

ADD Gemfile Gemfile

ADD Gemfile.lock Gemfile.lock

RUN bundle install

RUN mkdir -p app

RUN gem install bundler

WORKDIR /app

ADD . /app
