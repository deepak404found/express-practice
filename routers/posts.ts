import { createPost, deletePost, getPost, getPostByTitle, getPosts, updatePost } from '../controller/posts';
import { Router } from "express";

const router = Router();

router.post('/post/create', (req, res) => {
    try {
        let data = req.body;
        createPost(data).then((result) => {
            res.send(result);
        }
        );
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

router.get('/posts', async (req, res) => {
    try {
        const posts = await getPosts();
        res.json(posts);
    }
    catch (error) {
        res.send(error);
    }
}
);

router.get('/post/:id', (req, res) => {
    let id = req.params.id;
    getPost(id).then((result) => {
        res.send(result);
    }
    );
}
);

router.get('/post/title/:title', (req, res) => {
    let title = req.params.title;
    getPostByTitle(title).then((result) => {
        res.send(result);
    }
    );
}
)

router.put('/post/update/:id', (req, res) => {
    let id = req.params.id;
    updatePost(id).then((result) => {
        res.json(result);
    }
    );
}
);

router.delete('/post/delete/:id', (req, res) => {
    let id = req.params.id;
    deletePost(id).then((result) => {
        res.json(result);
    }
    );
}
);

export default router;