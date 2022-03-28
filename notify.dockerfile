FROM 			node:alpine

LABEL 			author="Martin Mwangi"

ENV 			PORT=9006


WORKDIR 		/var/www

COPY 			package*.json ./

RUN 			npm install

COPY 			. .


EXPOSE 			$PORT

CMD 			["npm",  "start"]