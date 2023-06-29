// Paso 1️⃣
// Con dependencia
// import axios from 'axios'

// class HttpClient {
//   async get(url: string) {
//     const { data, status } = await axios.get(url)
//     return { data, status }
//   }
// }

// Sin dependencia
class HttpClient {
  async get(url: string) {
    const resp = await fetch(url)
    const data = await resp.json()
    return { data, status: resp.status }
  }
}

// Paso 2️⃣
class TodoService {
  constructor(private http: HttpClient) {}
  async getTodoItems() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos')
    return data
  }
}

class PostService {
  constructor(private http: HttpClient) {}
  async getPosts() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts')
    return data
  }
}

class PhotosService {
  constructor(private http: HttpClient) {}
  async getPhotos() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos')
    return data
  }
}

// Paso 3️⃣
async function init() {
  const httpClient = new HttpClient()

  const todoService = new TodoService(httpClient)
  const postService = new PostService(httpClient)
  const photosService = new PhotosService(httpClient)

  const todos = await todoService.getTodoItems()
  const posts = await postService.getPosts()
  const photos = await photosService.getPhotos()

  console.log({ todos, posts, photos })
}

init()
