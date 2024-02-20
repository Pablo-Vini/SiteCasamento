import "./detalhes.css"

interface DetalhesItem{
    nome: string,
    preco: number,
    loja: string,
    disponivel: boolean,
    imagem: string

}
export function Detalhes(nome, preco, loja, disponivel, imagem : DetalhesItem){
    return(
        <div className="detalhes">
            <h1></h1>
            <h2></h2>
            <h2></h2>
            <img/>
        </div>
    )
}