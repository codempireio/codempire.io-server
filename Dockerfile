FROM node:latest
WORKDIR /app
COPY . /app
RUN yarn
EXPOSE 5000
CMD node index