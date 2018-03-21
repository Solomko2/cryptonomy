// function fetchNews() {
//     return fetch('/news.json');
// }
//
// export function makeFetchNews() {
//     return async function () {
//         console.log('makeFetchNews');
//         try {
//             const response = await fetchNews();
//             const json = await response.json();
//             console.log(json, 'json');
//             return {json: json, response: response};
//         } catch(err) {
//            return err;
//         }
//     };
// }