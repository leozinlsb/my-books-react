import Input from '../Input'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { getBooks } from '../../services/books'

const SearchContainer = styled.section`
    background : #EDE5CE;
    text-align: center;
    padding: 10px 0;
    width: 100%;
`

const Title = styled.h2`
    color: #1C1A17;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Search() {
    const [researchedBooks, setResearchedBooks] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    async function fetchBooks() {
        const booksAPI = await getBooks();
        setBooks(booksAPI);
    };

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input
                placeholder='Escreva sua próxima leitura'
                onBlur={event => {
                    const typedText = event.target.value
                    const searchResults = books.filter(book => book.name.includes(typedText))
                    setResearchedBooks(searchResults)
                }}
            />
            {researchedBooks.map(book => (
                <div>
                    <p>{book.name}</p>
                    <img src={book.src} alt='capa do livro' key={book.id} />
                </div>
            ))}
        </SearchContainer>

    )
}

export default Search;