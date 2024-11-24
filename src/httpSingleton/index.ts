import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

export default class Singleton {
    private static instance: Singleton;

    private constructor() {}

    private httpInstances: Record<string, AxiosInstance> = {};

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public getHttpConnection(name: string) {
        if (!(name in this.httpInstances)) {
            throw Error('No HTTP instance with such name');
        }

        return this.httpInstances[name];
    }

    public createHttpConnection({ name, config }: { name: string; config: CreateAxiosDefaults }) {
        const axiosInstance = axios.create(config);

        this.httpInstances[name] = axiosInstance;
    }

    public getAxios() {
        return axios;
    }
}
