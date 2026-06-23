import { books } from "./LastRealeasesData"
import styled from "styled-components"
import { Title } from "../Title"
import RecommendationCard from "../RecommendationCard"
import imgbook from "../../imagens/livro2.png"

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title color="#1C1A17" fontSize="36px">Ultimos Lançamentos</Title>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src} alt={book.name} key={book.id} />
                ))}
            </NewBooksContainer>
            <RecommendationCard
                title="Talvez você se interesse por..."
                subtitle="Angular 11"
                description="Construindo uma aplicação moderna"
                img={imgbook}
            />
        </LastReleasesContainer>
    )
}

export default LastReleases