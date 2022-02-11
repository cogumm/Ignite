import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "mylinux",
  description: "descrição qualquer",
  link: "https://cogumm.net/"
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
  )
}
