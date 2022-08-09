# dan0de

## Dev

Create a new file called "nodemon.json" and set the contents to ( adjust if needed ):

```
{
    "env": {
        "NODE_PORT": 4000,
        "NODE_MONGODB": "mongodb://localhost:27017/dan0de"
    }
}
```

If NODE_PORT is not set, it will default to 8000.

## Enviroment variables ( dev )

```
    "NODE_ENV": "development",
    "NODE_PORT": 4000,
    "NODE_MONGODB": "mongodb://localhost:27017/dan0de"
```

## Enviroment variables ( production )

For production build NODE_ENV must be set for express to NOT generate debug-data and overhead

```
    "NODE_ENV": "production",
    "NODE_PORT": 4000,
    "NODE_MONGODB": "mongodb://localhost:27017/dan0de"
```

## Seeds

Run npm script with enviroment variable NODE_MONGODB ( adjust hostname, port, db-name if needed )

```
#NODE_MONGODB=mongodb://localhost:27017/dan0de npm run db:seed
```