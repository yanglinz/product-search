# Walmart Product Search

[Badges]

## Intro

This project is a Python/React app built to search and display Walmart products
using [Walmart Open API](https://developer.walmartlabs.com/).

## Relevant Links

Here are some links related to the project.

- [Demo](https://pensive-poincare-124932.netlify.com/)
- [GraphQL server](https://product-search-walmart.herokuapp.com/graphql/)
- [Storybook assets](/)
- [Continuous integration builds](/)

## Local Development

> Before running the project locally, you need a working
> [Walmart Open API](https://developer.walmartlabs.com/) key. If you do not have
> one, sign up and create one
> [here](https://developer.walmartlabs.com/member/register).

To get started on running the project locally, first clone the project from
github.

```sh
git clone git@github.com:yanglinz/product-search.git
cd product-search
```

Next, we need to setup the environmental variables for local development.

```sh
cp product_search/.sample.env product_search/.env
```

Once the `.env` file has been copied from the sample, we need to edit the value
of `.env` by changing the following line, by replacing `placeholder` with an
actualy [Walmart Open API](https://developer.walmartlabs.com/) key.

```
WALMART_API_KEY=xxxxxxxxxx
```

Once the environmental variables are setup, we can now run the project. There
are a couple of options for running the project locally: with or without docker.

### Local Development with Docker (Recommended)

To run the project with Docker, the following software are required.

- MacOS
- [Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

> While any system with `docker` and `docker-compose` should work, this project
> has only been tested with
> [Docker for Mac](https://docs.docker.com/docker-for-mac/install/).

To run the project with Docker, run the following commands:

```
docker-compose build
docker-compose up
```

Once the server is up, navigate to `localhost:3000` with a browser to view the
application.

### Local Development without Docker

To run the project without Docker, the following software are required.

- MacOS
- [Python](https://www.python.org/) (version 3.6)
- [Node](https://nodejs.org) (version 8+)
- [Pipenv](https://docs.pipenv.org/)
- [Yarn](https://yarnpkg.com)

To run the project without Docker, run the following commands:

```
pipenv install --dev
yarn install
```

Then in a terminal, run the Python server:

```
pipenv run python manage.py runserver
```

And in a separate terminal, run the Node server:

```
yarn start
```

Finally, once both servers are running, navigate to `localhost:3000` with a
browser to view the application.

### Local Development Commands

Once the application dependencies are setup, here are some commands you can
invoke.

| Description                   | Command                                                       |
| ----------------------------- | ------------------------------------------------------------- |
| Run python tests              | `pipenv run pytest server`                                    |
| Run python tests (docker)     | `docker-compose run server pipenv run pytest server`          |
| Run python formatter          | `pipenv run black server`                                     |
| Run python formatter (docker) | `docker-compose run server pipenv run black server`           |
| Run storybook                 | `yarn run storybook`                                          |
| Run storybook (docker)        | `docker-compose run frontend -p 9001:9001 yarn run storybook` |
| Run tests                     | `yarn test`                                                   |
| Run storybook (docker)        | `docker-compose run frontend yarn test`                       |

## License

This project is licensed under MIT license.
