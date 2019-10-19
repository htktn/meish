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
	cp back/.env.sample back/.env
	@$(FIG) run back bundle install
	@$(FIG) run back bundle exec rails db:create
	@$(FIG) run back bundle exec rails db:migrate
	@$(FIG) run back bundle exec rails db:seed

back/console:
	@$(FIG) run back bundle exec rails console

back/shell:
	@$(FIG) run back /bin/bash

back/install:
	@$(FIG) run back bundle install

back/gemlist:
	@$(FIG) run back bundle exec gem list

back/mock:
	npx json-server back/mock.json -p 3003

migrate/up:
	@$(FIG) run back bundle exec rails db:migrate

front/shell:
	@$(FIG) run front /bin/sh

front/install:
	@$(FIG) run front npm install

mysql:
	docker exec -it meish_db mysql -u root -ppassword
