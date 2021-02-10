import  fetchUrl from '../../shared/fetchUrl/fetchUrl';

export async function getBooksByType(type: string) {
    try {
        return await fetchUrl(`https://www.googleapis.com/books/v1/volumes?q=${type}&maxResults=12`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        });
    } catch(exception) {
        return [];

    }
}

export async function getBooksByTypeWithPagination(type: string, index: number) {
    try {
        return await fetchUrl(`https://www.googleapis.com/books/v1/volumes?q=${type}&startIndex=${index*12}&maxResults=12`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        });
    } catch(exception) {
        return [];

    }
}

