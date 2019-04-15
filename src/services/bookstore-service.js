
export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            img: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
            price: '27$'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            img: 'https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX379_BO1,204,203,200_.jpg',
            price: '34$'
        }
    ];
    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700)
        });
    }
}