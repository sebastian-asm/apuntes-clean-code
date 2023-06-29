import localPosts from './db.json'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

abstract class PostProvider {
  abstract getPosts(): Promise<Post[]>
}

class LocalDataBaseService implements PostProvider {
  async getPosts() {
    return [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
      }
    ]
  }
}

class JsonDatabaseService implements PostProvider {
  async getPosts() {
    return localPosts
  }
}

class JsonApiService implements PostProvider {
  async getPosts() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await resp.json()
    return posts
  }
}

class PostService {
  private posts: Post[] = []

  constructor(private postProvider: PostProvider) {}

  async getPosts() {
    this.posts = await this.postProvider.getPosts()
    return this.posts
  }
}

async function init() {
  // al aplicar este principio, solo se modifica la instancia de la clase
  // const provider = new LocalDataBaseService()
  // const provider = new JsonDatabaseService()
  const provider = new JsonApiService()
  const postService = new PostService(provider)
  const posts = postService.getPosts()
  console.log({ posts })
}

init()
