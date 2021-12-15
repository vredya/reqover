import { parse } from '@apidevtools/swagger-parser';
import { GraphQLSchema } from 'graphql';

export let API_SERVICE_URL = process.env.API_SERVICE_URL;
export let SWAGGER_SPEC_URL = process.env.SWAGGER_SPEC_URL;
export let SWAGGER_BASE_PATH = process.env.SWAGGER_BASE_PATH;
export const PROXY_MODE = process.env.PROXY_MODE;
export let GRAPHQL_URL = process.env.GRAPHQL_URL;
export let GRAPHQL_SCHEMA: GraphQLSchema = null;
export let API_SERVICE_URL_ARRAY = [process.env.API_SERVICE_URL, process.env.API_SERVICE_URL, process.env.API_SERVICE_URL, process.env.API_SERVICE_URL];
export let SWAGGER_SPEC_URL_ARRAY = [process.env.SWAGGER_SPEC_URL, process.env.SWAGGER_SPEC_URL, process.env.SWAGGER_SPEC_URL, process.env.SWAGGER_SPEC_URL];
export let SWAGGER_BASE_PATH_ARRAY = [process.env.SWAGGER_BASE_PATH, process.env.SWAGGER_BASE_PATH, process.env.SWAGGER_BASE_PATH, process.env.SWAGGER_BASE_PATH];
export let CURRENT_ID = 0;

export function setApiSericeUrl(url) {
    API_SERVICE_URL = url;
}

export function setSwaggerUrl(url) {
    SWAGGER_SPEC_URL = url;
}

export function setBasePath(path) {
    SWAGGER_BASE_PATH = path;
}

export function setGraphQLUrl(path) {
    GRAPHQL_URL = path;
}

export function setGraphSchema(schema) {
    GRAPHQL_SCHEMA = schema;
}

export function setApiSericeUrlToArray(url, id: number) {
    API_SERVICE_URL_ARRAY[id] = url;
}

export function setSwaggerUrlToArray(url, id: number) {
    SWAGGER_SPEC_URL_ARRAY[id] = url;
}

export function setBasePathToArray(url, id: number) {
    SWAGGER_BASE_PATH_ARRAY[id] = url;
}

export function setCorrentId(id: number) {
    CURRENT_ID = id;
}
