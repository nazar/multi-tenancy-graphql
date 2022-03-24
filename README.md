# Multi-tenancy graphQL endpoints POC

This repo demonstrates hosting multiple graphql endpoints using shared and specific resources per endpoint

## API

The [api](./api) folder contains an express based API that defines two graphql endpoints.

## Client

the [client](/client) folder contains a React application that uses two Apollo Client definitions at the root of each currency module folder that defines which graphql endpoints are used for graphql queries under each module. 

## Getting started

1. install Docker and Docker Compose
2. run `docker-compose up`
3. navigate to http://localhost:4000
