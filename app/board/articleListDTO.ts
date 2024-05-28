import { AxiosResponse } from "axios"


export class Article {
    constructor(userUid: number, userId: string, title: string, description: string, postUid: number) {
        this.userUid = userUid
        this.userId = userId
        this.title = title
        this.description = description
        this.postUid = postUid
    }

    userUid: number
    userId: string
    title: string
    description: string
    postUid: number
}

export class Articles {
    constructor(jsonResponse:AxiosResponse) {
        this.articles = this.getArticles(jsonResponse)
    }

    articles: Article[]

    getArticles(response:AxiosResponse):Article[] {
        const articles = response.data;
        return articles.map((el: any) => {
            const article:Article = {
                userUid:el['userUid'],
                userId:el['userId'],
                title:el['title'],
                description:el['description'],
                postUid:el['postUid']
            }
            return article
        })
    }
}