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
	@$(FIG) run back bundle exec rails db:create
	@$(FIG) run back bundle exec rails db:migrate

back/console:
	@$(FIG) run back bundle exec rails console

migrate/up:
	@$(FIG) run back bundle exec rails db:migrate

back/shell:
	@$(FIG) run back /bin/bash

front/shell:
	@$(FIG) run front /bin/sh

mysql:
	docker exec -it meish_db mysql -u root -ppassword
