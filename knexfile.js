// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
			user: 'postgres',
			password: 'password',
      database: 'spaurk',
    },
		migrations: {
			directory: __dirname + '/db/migrations'
		},
		seeds: {
			directory: __dirname + '/db/seeds/development'
		}
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'spaurkDB',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
			directory: __dirname + '/db/migrations'
    },
		seeds: {
			directory: __dirname + '/db/seeds/staging'
		}
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'spaurkDB',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
			directory: __dirname + '/db/migrations'
    },
		seeds: {
			directory: __dirname + '/db/seeds/production'
		}
  },

};
