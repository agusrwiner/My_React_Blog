import express from 'express';

let articlesInfo = [
    {
        name: 'learn-react',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'learn-node',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'mongodb',
        upvotes: 0,
        comments: [],
    }
]

const app = express();
app.use(express.json());

app.put('/api/articles/:name/upvote',(req,res) => {
    const {name} = req.params;
    const article = articlesInfo.find( article => article.name === name );

    if (article) {
        article.upvotes += 1;
        res.send(`The ${name} article now has ${article.upvotes} upvotes!`);
    } else {
        res.send(`Article not found :(`);
    }
});

app.post('/api/articles/:name/comments',(req,res) => {
    const { postedBy,text } = req.body;
    const {name} = req.params;

    const article = articlesInfo.find(article => article.name === name);

    if (article) {
        article.comments.push( {postedBy, text} );
        // res.send(`The ${article.name} article recieved a comment by ${postedBy}!`);
        res.send( article.comments );
    } else {
        res.send(`Article not found :(`);
    }
});

app.listen( 8000,() => {
    console.log('Server is listening on port 8000');
} );