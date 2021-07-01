import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "Ignite",
    description: "Alguma descrição.",
    link: "https://github.com/cogumm/Ignite"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}
