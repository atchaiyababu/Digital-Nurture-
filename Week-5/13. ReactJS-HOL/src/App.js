import React from 'react';

import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
    const books = [
        { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
        { id: 2, title: 'Atomic Habits', author: 'James Clear' },
        { id: 3, title: 'The Power of Now', author: 'Eckhart Tolle' }
    ];

    const blogs = [
        { id: 1, title: 'Learning React', author: 'John Doe' },
        { id: 2, title: 'Understanding JavaScript', author: 'Jane Smith' },
        { id: 3, title: 'Web Development Tips', author: 'Alex Brown' }
    ];

    const courses = [
        { id: 1, name: 'React JS', duration: '3 Months' },
        { id: 2, name: 'Java Programming', duration: '6 Months' },
        { id: 3, name: 'Python Programming', duration: '4 Months' }
    ];

    return (
        <div>
            <h1>Blogger App</h1>

            <BookDetails books={books} />

            <BlogDetails blogs={blogs} />

            <CourseDetails courses={courses} />
        </div>
    );
}

export default App;