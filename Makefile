FIG=docker-compose

build:
	@$(FIG) build

up:
	@$(FIG) up

up/web:
	@$(FIG) back

up/frontend:
	@$(FIG) front

up/db:
	@$(FIG) db

down:
	@$(FIG) down

restart:
	@$(FIG) stop
	@$(FIG) start

clean:
	@docker image prune
	@docker volume prune

setup:
	@$(FIG) run back bundle install
	@$(FIG) run back bundle exec rails db:create
	@$(FIG) run back bundle exec rails db:migrate
	@$(FIG) run back bundle exec rails db:seed

web/console:
	@$(FIG) run back bundle exec rails console

web/shell:
	@$(FIG) run back /bin/bash

web/install:
	@$(FIG) run back bundle install

web/gemlist:
	@$(FIG) run back bundle exec gem list

web/mock:
	npx json-server web/mock.json -p 3003

web/test:
	@$(FIG) run back bundle exec rspec

env:
	cp .env.example .env
	cp frontend/.env.example frontend/.env.local

migrate/up:
	@$(FIG) run back bundle exec rails db:migrate

frontend/shell:
	@$(FIG) run front /bin/sh

frontend/install:
	@$(FIG) run front npm install

mysql:
	docker exec -it meish_db mysql -u root -ppassword
