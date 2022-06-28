FROM node:16

WORKDIR /home/app

COPY . .

RUN yarn && \
    yarn build

CMD ["yarn", "start"]