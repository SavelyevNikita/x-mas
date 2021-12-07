// interface interResponse{
//     body:ReadableStream;
//     bodyUsed:boolean;
//     headers:object;
//     ok:boolean;
//     redirected:boolean;
//     status:number;
//     statusText:string;
//     type:string;
//     url:string;
// }

// export class Loader {

//     baseLink?: string;
//     options?: { [key: string]: string };

//     constructor(baseLink?: string, options?: { [key: string]: string }) {
//         this.baseLink = baseLink;
//         this.options = options;
//     }

//         getResp(
//             { endpoint, options = {} },
//             callback = ():void => {
//                 console.error('No callback for GET response');
//             }
//         ): void {
//             this.load('GET', endpoint, callback, options);
//         }

//         errorHandler(res:interResponse) {
//             if (!res.ok) {
//                 if (res.status === 401 || res.status === 404)
//                     console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
//                 throw Error(res.statusText);
//             }

//             return res;
//         }

//         makeUrl(options:object, endpoint:string): string {
//             const urlOptions = { ...this.options, ...options };
//             let url = `${this.baseLink}${endpoint}?`;

//             Object.keys(urlOptions).forEach((key) => {
//                 url += `${key}=${urlOptions[key]}&`;
//             });

//             return url.slice(0, -1);
//         }

//         load(method:string, endpoint:string, callback:Function, options = {}) {
//             fetch(this.makeUrl(options, endpoint), { method })
//                 .then(this.errorHandler)
//                 .then((res) => res.json())
//                 .then((data) => callback(data))
//                 .catch((err) => console.error(err));
//         }
// }