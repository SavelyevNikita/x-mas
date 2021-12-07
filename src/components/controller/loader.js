class Loader {
    constructor(baseLink, options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} },
        callback = () => {
            console.log(endpoint, options);
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res) {
        // console.log(res);
        // console.log(res.body,typeof res.body);
        // console.log(res.bodyUsed,typeof res.bodyUsed);
        // console.log(res.headers,typeof res.headers);
        // console.log(res.ok,typeof res.ok);
        // console.log(res.redirected,typeof res.redirected);
        // console.log(res.status,typeof res.status);
        // console.log(res.statusText,typeof res.statusText);
        // console.log(res.type,typeof res.type);
        // console.log(res.url,typeof res.url);
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;

        // Response {type: 'cors', url: 'https://newsapi.org/v2/sources?apiKey=12e7ef50353e443d998bc1ff56a76034', redirected: false, status: 200, ok: true, …}
        // body: (...)
        // bodyUsed: true
        // headers: Headers {}
        // ok: true
        // redirected: false
        // status: 200
        // statusText: ""
        // type: "cors"
        // url: "https://newsapi.org/v2/sources?apiKey=12e7ef50353e443d998bc1ff56a76034"
        // ReadableStream {locked: false}locked: true[[Prototype]]: ReadableStream 'object'
        // loader.js:20 false 'boolean'
        // loader.js:21 Headers {} 'object'
        // loader.js:22 true 'boolean'
        // loader.js:23 false 'boolean'
        // loader.js:24 200 'number'
        // loader.js:25  string
        // loader.js:26 cors string
        // loader.js:27 https://newsapi.org/v2/sources?apiKey=12e7ef50353e443d998bc1ff56a76034 string
    }

    makeUrl(options, endpoint) {
        // console.log(options);
        // console.log(endpoint);
        // console.log(typeof endpoint);
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);

//         {}[[Prototype]]: Object
//         loader.js:41 sources
//          loader.js:42 string
    }

    load(method, endpoint, callback, options = {}) {
        // console.log(method, typeof method);
        // console.log(endpoint, typeof endpoint);
        // console.log(callback, typeof callback);
        // console.log(options, typeof options);
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));

            // GET string
            // loader.js:55 sources string
            // loader.js:56 (data) => this.view.drawSources(data) 'function'
            // loader.js:57 {} 'object'
            // index.js:52 [WDS] Live Reloading enabled.

    }
}

export default Loader;
