import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookList from "../book-list";

const HomePage = () => {
    return <div><BookList books={[]}/></div>
}

export default HomePage