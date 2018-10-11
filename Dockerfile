FROM node:10-alpine

LABEL maintainer "TEAM BAP <engineering@bureauxapartager.com>"

COPY . /graphql-markdown
WORKDIR /graphql-markdown

RUN npm install
RUN npm install -g graphql-markdown

CMD graphql-markdown