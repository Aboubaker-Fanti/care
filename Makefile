DIR=career

all:
	@cd $(DIR) && docker-compose up --build
down:
	@cd $(DIR) && docker-compose down -v
clean:
	@cd $(DIR) && docker-compose down -v
fclean:
	@cd $(DIR) && docker system prune -a 
re: clean all

reall: fclean all