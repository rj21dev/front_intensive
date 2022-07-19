import { readdir, stat, readFile as readFilePromise } from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const settings = {
    delay: 500,
    bar_length: 30,
    directory: './chapter_2/files/fsHard'
}

export const progressbar = async () => {
    const directory = settings.directory;
    const dsize = await dirSize( directory );
    const files = await readdir( directory );
    let total = 0;

    files.forEach(async (file, index) => {
        setTimeout(_ => {
            const filepath = path.join(directory, file);
            let a = new Promise((resolve, reject) => {
                    resolve(readFilePromise(filepath));
                })
                .then(resolve => fileSize(filepath))
                .then(resolve => total += resolve)
                .then(resolve => draw(total, dsize))
        }, index * settings.delay)
    });
}

const draw = (total, dsize) => {
    let total_n = total / dsize * settings.bar_length;
    process.stdout.write("\r");
    process.stdout.write("[");
    for (let i = 0; i < total_n; i++) {
        process.stdout.write("▓");
    }
    for (let i = total_n; i < settings.bar_length; i++) {
        process.stdout.write("_");
    }
    process.stdout.write("]");
}

const dirSize = async directory => {
  const files = await readdir(directory);
  const stats = files.map(file => stat(path.join(directory, file)));
  return (await Promise.all(stats)).reduce((accumulator, {size}) => accumulator + size, 0);
}

const fileSize = async file => {
    return (await stat(file)).size;
  }

progressbar();
