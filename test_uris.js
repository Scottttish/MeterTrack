const mongoose = require('mongoose');
// Since I can't easily require the model without knowing where node_modules is, I'll just connect
const MONGO_URI_AQAMZOA_WITH_O = 'mongodb+srv://admin:314159265359o@cluster.aqamzoa.mongodb.net/utility-app?appName=Cluster';
const MONGO_URI_AQAMZOA_NO_O = 'mongodb+srv://admin:314159265359@cluster.aqamzoa.mongodb.net/utility-app?appName=Cluster';
const MONGO_URI_INDEXESS = 'mongodb+srv://scott:314159265359@indexess.bq2wcic.mongodb.net/utility-app?appName=Indexess';

async function test(uri, label) {
    try {
        console.log(`Testing ${label}...`);
        const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
        console.log(`✅ ${label} success!`);
        await mongoose.disconnect();
    } catch (err) {
        console.error(`❌ ${label} failed: ${err.message}`);
    }
}

async function run() {
    await test(MONGO_URI_AQAMZOA_WITH_O, 'AQAMZOA_WITH_O');
    await test(MONGO_URI_AQAMZOA_NO_O, 'AQAMZOA_NO_O');
    await test(MONGO_URI_INDEXESS, 'INDEXESS');
}

run();
