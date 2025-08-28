import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const connection = async () => {
    const uri = process.env.MONGO_URI_LOCAL;
    if (!uri) {
        console.error("La variable de entorno MONGO_URI_LOCAL no está definida. Verifica tu archivo .env");
        process.exit(1);
    }
    try {
        const { connection } = await mongoose.connect(uri);
        console.log(`Database is connected on ${connection.host} - ${connection.port}`);
    } catch (error) {
        console.log("Eror al conectar", error);
        process.exit(1);
    }
}

export default connection