import * as OpenAPI from 'fumadocs-openapi';



void OpenAPI.generateFiles({
    input: ['./apiData.json'],
    output: './content/docs/v1',
    per: 'operation',
});


