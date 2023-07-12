import axios from "axios";
import { Like, Stats } from "./outdata";
const baseURL = 'https://api.archiver.me'

export default class Archive_Client {

    private token: string;
    private clientId: string;

    constructor(token: string, clientId: string) {
        if (typeof token !== "string") throw new TypeError("[Archive API] Argument 'token' must be a string");
        if (typeof clientId !== "string") throw new TypeError("[Archive API] Argument 'clientId' must be a string");
        this.token = token;
        this.clientId = clientId;
    }

    public async Bot_postStats(server_count: number, shard_count?: number): Promise<Stats> {
        this.tokenAvailable();
        if (typeof server_count !== "number" || isNaN(server_count)) throw new TypeError("[Archive API → postStats()] Argument 'serverCount' must be a number.");
        if (typeof shard_count !== "number" || isNaN(shard_count)) throw new TypeError("[Archive API → postStats()] Argument 'shardCount' must be a number.");
        return this._post(`/bots/${this.clientId}/server`, { servers: server_count }).then((res) => res.data) as any;
    }

    public async Bot_GetLike(userId: string): Promise<Like> {
        this.tokenAvailable();
        if (typeof userId !== "string") throw new TypeError("[Archive API → postStats()] Argument 'userId' must be a String.");
        return this._get(`/bots/${this.clientId}/like/${userId}`).then((res) => res.data) as any;
    }

    private _post(url: string, body?: Object) {
        return axios.post(`${baseURL}${url}`, body, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
        })
    }

    private _get(url: string) {
        console.log(url)
        return axios.get(`${baseURL}${url}`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
        })
    }

    private async tokenAvailable(token: string = this.token): Promise<boolean> {
        if (!token) throw new ReferenceError("[Archive API] You didn't enter the 'Token' information.");
        return true;
    }
}