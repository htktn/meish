FIG=docker-compose

build:
	@$(FIG) build

up:
	@$(FIG) up

down:
	@$(FIG) down

restart:
	@$(FIG) stop
	@$(FIG) start

clean:
	@docker image prune
	@docker volume prune

setup:
	@$(FIG) run web bundle install
	@$(FIG) run web bundle exec rails db:create
	@$(FIG) run web bundle exec rails db:migrate
	@$(FIG) run web bundle exec rails db:seed

web/console:
	@$(FIG) run web bundle exec rails console

web/shell:
	@$(FIG) run web /bin/bash

web/install:
	@$(FIG) run web bundle install

web/gemlist:
	@$(FIG) run web bundle exec gem list

web/mock:
	npx json-server web/mock.json -p 3003

web/test:
	@$(FIG) run web bundle exec rspec

env:
	cp .env.example .env
	cp frontend/.env.example frontend/.env.local

migrate/up:
	@$(FIG) run web bundle exec rails db:migrate

frontend/shell:
	@$(FIG) run frontend /bin/sh

frontend/install:
	@$(FIG) run frontend npm install

mysql:
	docker exec -it meish_db mysql -u root -ppassword
