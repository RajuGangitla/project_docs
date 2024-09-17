
import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
    input: ['./apiData.json'],
    output: './content/docs',
});