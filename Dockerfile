# Ref: https://github.com/nuxt/nuxt.js/blob/dev/examples/docker-build/Dockerfile
FROM node:16 as builder

WORKDIR /src

COPY . .

ARG NEXT_PUBLIC_GRAPHQL_URL=https://bst-ap-event-api.hasura.app/v1/graphql
ENV NEXT_PUBLIC_GRAPHQL_URL $NEXT_PUBLIC_GRAPHQL_URL
ARG NEXT_PUBLIC_RELEASE=staging
ENV NEXT_PUBLIC_RELEASE $NEXT_PUBLIC_RELEASE

RUN yarn install
RUN yarn build

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
