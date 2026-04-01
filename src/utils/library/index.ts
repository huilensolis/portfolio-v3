import { cwd } from "node:process";
import { LIBRARY_PATH } from "../consts";
import path from "node:path";
import { createReadStream } from "node:fs";
import csv from "csv-parser"

type TBook = {
     'Book Id'?: string,
      Title?: string,
      Author?: string,
      'Author l-f'?: string,
      'Additional Authors'?: string,
      ISBN?: string,
      ISBN13?: string,
      'My Rating'?: string,
      'Average Rating'?: string,
      Publisher?: string,
      Binding?: string,
      'Number of Pages'?: string,
      'Year Published'?: string,
      'Original Publication Year'?: string,
      'Date Read'?: string,
      'Date Added'?: string,
      Bookshelves?: string,
      'Bookshelves with positions'?: string,
      'Exclusive Shelf'?: string,
      'My Review'?: string,
      Spoiler?: string,
      'Private Notes'?: string,
      'Read Count'?: string,
      'Owned Copies'?:string; 
}

export async function getLibrary(): Promise<{bookList: TBook[]}>{
	const libraryPath = path.join(cwd(), LIBRARY_PATH);

	const libraryFilePath = libraryPath + "/" + "goodreads_library_export.csv";

    const bookList: TBook[] = []
    return new Promise((resolve, reject) => {

        createReadStream(libraryFilePath)
        .pipe(csv())
        .on('data', (data) => bookList.push(data))
        .on('end', () => {
                resolve({bookList})
        }).on("error", () => {
                reject({bookList: []})
            })
    })
}
