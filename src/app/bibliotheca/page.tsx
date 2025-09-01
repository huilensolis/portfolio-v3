import { getLibrary } from "@/utils/library"

export default async function BlibliothecaPage(){
    const {bookList} = await getLibrary()

    const cleanBookList = bookList.filter((book) => book["Exclusive Shelf"])

    return (
        <div className="flex flex-col">
            <main className="w-full mb-32">
                <h1 className="text-6xl sm:text-6xl text-stone-700 font-medium w-full text-balance font-fraunces">
                   Bibliotheca 
                </h1>
            </main>
            <ul className="w-full flex flex-col lg:grid grid-cols-2 gap-4">
                {cleanBookList.map((book, i) => (
                    <li key={i}>
                            <article className="flex flex-col h-full gap-6 bg-gray-100 rounded-md border border-gray-200/40 p-4 hover:bg-gray-200/60 duration-150 transition-all font-fraunces">
                                <header className="w-full flex justify-between">
                                    <span className="font-medium">book</span>
                                </header>
                            <main className="flex gap-4 h-full">
                                <section>
                                    {book['ISBN13'] && (
                                        <BookCover ISBN13={`${book['ISBN13'].replace("=", "").replaceAll('"', "")}`}/>
                                    )}
                                </section>
                                <hr className="bg-neutral-300 h-full w-1 round-sm" />
                                <section> 
                                    {
                                        book.Title && (
                                            <h1 className="text-xl font-medium">{book.Title?.length > 60 ? book.Title?.slice(0, 60) + '...' : book.Title}</h1>
                                        )
                                    }
                                    <p className="text-pretty font-medium line-clamp-4">
                                        {book['Author']}
                                    </p>
                                    <span className="text-neutral-500">{book["Exclusive Shelf"]}</span>
                                </section>
                            </main>
                            </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}

async function BookCover({ISBN13}: {ISBN13: string}){
    const coverUrl = await fetch(`https://bookcover.longitood.com/bookcover/${ISBN13}`)
        .then(async (res) => await res.json())

    if(!coverUrl['url']){
        return
    }

    return <img src={coverUrl['url']} className="min-w-32 max-w-32 w-32 rounded-md shadow-stone-400/60 shadow-md"  />
}
