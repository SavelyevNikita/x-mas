// // export interface interResponse {
// //     body: ReadableStream;
// //     bodyUsed: boolean;
// //     headers: object;
// //     ok: boolean;
// //     redirected: boolean;
// //     status: number;
// //     statusText: string;
// //     type: string;
// //     url: string;
// // }
// // оказывается есть базовый интерфейс Response
// // type typeCallback = <T>(data: T) => void;
// // interface IOptions {
// //     [key: string ]: string;
// //   } 
// //   interface IArgResp {
// //     string, [key: string]: IOptions
// //   } 


// export class Loader {

//     baseLink?: string;
//     options?: { [key: string]: string };
//     //      {sources: 'aftenposten'}
//     //        sources: "aftenposten"

//     constructor(baseLink?: string, options?: { [key: string]: string }) {
//         this.baseLink = baseLink;
//         this.options = options;
//     }

//     getResp(
//         // { endpoint, options = {} }: { endpoint: string, options: { [key: string]: string } },
//         { endpoint, options }: { endpoint: string; options?: Record<string, never>},
//         callback = () => {
//             console.error('No callback for GET response');
//         }
//     ) {
//         this.load({ method: 'GET', endpoint, callback, options });
//     }

//     errorHandler(res: Response): Response {
//         if (!res.ok) {
//             if (res.status === 401 || res.status === 404)
//                 console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
//             throw Error(res.statusText);
//         }

//         return res;
//     }

//     makeUrl({ endpoint, options = {} }: { endpoint: string, options: { [key: string]: string } }): string {
//         const urlOptions = { ...this.options, ...options };
//         let url = `${this.baseLink}${endpoint}?`;

//         Object.keys(urlOptions).forEach((key) => {
//             url += `${key}=${urlOptions[key]}&`;
//         });

//         return url.slice(0, -1);
//     }

//     load(method: string, endpoint: string, callback: (data:Response)=>void, options: { [key: string]: string } = {}) {
//         fetch(this.makeUrl(options, endpoint), { method })
//             .then(this.errorHandler)
//             .then((res) => res.json())
//             .then((data) => callback(data))
//             .catch((err) => console.error(err));
//     }
// }