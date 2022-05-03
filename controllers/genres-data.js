const {ObjectId, MongoClient} = require('mongodb')


const genreData = class GenreData {
    //connecting db
    static async main() {
        const uri = "mongodb+srv://spitzerc22:HkCUdLhqfYbv5A7y@cluster1.zxjij.mongodb.net/filmater?retryWrites=true&w=majority"
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, () => {console.log("Connected to DB")})
        
        
        try{
            //connect to cluster
            await client.connect();
            await listDatabases(client)
        } catch(e) {
            console.error(e)
        }
    }

    static async listDatabases(client) {
        databasesList = await client.db().admin().listDatabases()

        console.log('Databases')
        databasesList.databases.forEach(db => console.log( `--${db.name}`))
    }
}

genreData.main().catch(console.error)
module.exprots = genreData