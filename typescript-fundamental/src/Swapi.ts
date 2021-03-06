/**
 * Created by QuanLe on 4/29/2017.
 */
import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from "axios";

/**
 * The class is a wrapper for swapi.co web service
 */
class Swapi {
    private instance: AxiosInstance;
    constructor() {
        const requestConfig: AxiosRequestConfig = {
          baseURL:  "http://swapi.co/api/",
        };
        this.instance = axios.create(requestConfig);
    }

    public getPerson(id: number): AxiosPromise {
        return this.instance.get("people/" + id + "/");
    }
}

export {Swapi};
