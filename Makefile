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
	@$(FIG) run back bundle install
	@$(FIG) run back bundle exec rails db:create
	@$(FIG) run back bundle exec rails db:migrate

back/console:
	@$(FIG) run back bundle exec rails console

back/shell:
	@$(FIG) run back /bin/bash

back/install:
	@$(FIG) run back bundle install

migrate/up:
	@$(FIG) run back bundle exec rails db:migrate

front/shell:
	@$(FIG) run front /bin/sh

mysql:
	docker exec -it meish_db mysql -u root -ppassword
