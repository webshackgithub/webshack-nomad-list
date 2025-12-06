import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const cities = [
    { name: 'Bangkok', filename: 'bangkok.jpg' },
    { name: 'Chiang Mai', filename: 'chiang-mai.jpg' },
    { name: 'Bali', filename: 'bali.jpg' },
    { name: 'Kuala Lumpur', filename: 'kuala-lumpur.jpg' },
    { name: 'Seoul', filename: 'seoul.jpg' },
    { name: 'Tokyo', filename: 'tokyo.jpg' },
    { name: 'Taipei', filename: 'taipei.jpg' },
    { name: 'Dubai', filename: 'dubai.jpg' },
    { name: 'Lisbon', filename: 'lisbon.jpg' },
    { name: 'Porto', filename: 'porto.jpg' },
    { name: 'Barcelona', filename: 'barcelona.jpg' },
    { name: 'Berlin', filename: 'berlin.jpg' },
    { name: 'Prague', filename: 'prague.jpg' },
    { name: 'Budapest', filename: 'budapest.jpg' },
    { name: 'Athens', filename: 'athens.jpg' },
    { name: 'Krakow', filename: 'krakow.jpg' },
    { name: 'Tallinn', filename: 'tallinn.jpg' },
    { name: 'Vilnius', filename: 'vilnius.jpg' },
    { name: 'Mexico City', filename: 'mexico-city.jpg' },
    { name: 'Cancun', filename: 'cancun.jpg' },
    { name: 'Austin', filename: 'austin.jpg' },
    { name: 'Denver', filename: 'denver.jpg' },
    { name: 'Buenos Aires', filename: 'buenos-aires.jpg' },
    { name: 'Medellin', filename: 'medellin.jpg' },
    { name: 'Florianopolis', filename: 'florianopolis.jpg' },
    { name: 'Curitiba', filename: 'curitiba.jpg' },
    { name: 'Melbourne', filename: 'melbourne.jpg' },
    { name: 'Auckland', filename: 'auckland.jpg' },
    { name: 'Cape Town', filename: 'cape-town.jpg' },
    { name: 'Marrakesh', filename: 'marrakesh.jpg' },
];

const DOWNLOAD_DIR = path.join(process.cwd(), 'public', 'cities');

if (!fs.existsSync(DOWNLOAD_DIR)) {
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

async function fetchImageUrl(city) {
    try {
        // Search Unsplash page
        const searchUrl = `https://unsplash.com/s/photos/${encodeURIComponent(city)}`;
        const cmd = `curl -s -L "${searchUrl}" | grep -o 'https://images.unsplash.com/photo-[a-zA-Z0-9-]*' | head -n 1`;
        const imageUrl = execSync(cmd).toString().trim();

        if (imageUrl) {
            // Append params for high quality but reasonable size
            return `${imageUrl}?auto=format&fit=crop&w=800&q=80`;
        }
        return null;
    } catch (error) {
        console.error(`Error finding URL for ${city}:`, error.message);
        return null;
    }
}

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(filepath);
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                res.resume();
                reject(new Error(`Status Code: ${res.statusCode}`));
            }
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function processCity(city) {
    const filepath = path.join(DOWNLOAD_DIR, city.filename);
    if (fs.existsSync(filepath)) {
        console.log(`Skipping ${city.name} (already exists)`);
        return;
    }

    console.log(`Fetching URL for ${city.name}...`);
    const url = await fetchImageUrl(city.name);

    if (url) {
        console.log(`Downloading ${city.name} from ${url.substring(0, 50)}...`);
        try {
            await downloadImage(url, filepath);
            console.log(`✓ Saved ${city.name}`);
        } catch (err) {
            console.error(`✗ Failed to download ${city.name}:`, err.message);
        }
    } else {
        console.error(`✗ Could not find image for ${city.name}`);
    }
}

async function main() {
    console.log('Starting batch download...');
    // Process in chunks to avoid overwhelming curl/network (though curl is sequential in loop, parallelism is okay for node)
    // Let's do parallel 5 at a time
    const batchSize = 5;
    for (let i = 0; i < cities.length; i += batchSize) {
        const batch = cities.slice(i, i + batchSize);
        await Promise.all(batch.map(processCity));
    }
    console.log('Done!');
}

main();
