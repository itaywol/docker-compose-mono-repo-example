FROM node:16

ARG APP

WORKDIR /home/app

COPY . .

RUN yarn && \
    yarn workspaces run build

CMD ["yarn", "workspace", $APP, "start"]