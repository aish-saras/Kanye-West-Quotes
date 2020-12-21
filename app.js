class Quote {
    constructor() {

    }
    async getQuote() {
        const quoteResponse = await fetch('https://api.kanye.rest')

        const quote = await quoteResponse.json()
        // quote = encodeURIComponent(quote)
        console.log(quote);

        return quote

    }
}


