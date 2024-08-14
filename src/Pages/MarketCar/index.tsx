'use client'
import React, { useState } from "react"



interface ICurso {
    id:number,
    titulo:string,
    preco:number
}

interface IShoppingItem {
    produto: ICurso,
    quantidade:number
}


const cursos: ICurso[] = [
{id:1, titulo:"Informática Básica", preco:520.00},
{id:2, titulo:"Mecânico de Motocicletas", preco:700.00},
{id:3, titulo:"Eletricista Predial", preco:1000.00},
{id:4, titulo:"Auxiliar Administrativo", preco:425.00},
{id:5, titulo:"Mecânico Automotivo", preco:920.00},
{id:6, titulo:"Redes de Computadores", preco:615.00},
]




const MarketCarPages = () => {
 const [shoppingCursos, setShoppingCursos] = useState<IShoppingItem[]>([]) 

 const handleAddCurso = (id:number) => {
    const curso = cursos.find((curso) => curso.id  === id)   
    
    const carItem : IShoppingItem = {
        produto:curso!,
        quantidade:1
    }
   const newShoppingCurso:IShoppingItem[] = [...shoppingCursos,carItem]
   setShoppingCursos(newShoppingCurso)

 }
 
 const handleRemoveCurso = (id:number) => {}
 
return (
    <div>
      <h1>Cursos SENAI 2024</h1>
      <ul>
        {cursos.map(curso => (
            <li key={curso.id}>
            <p>{curso.titulo}</p>
            <p>{curso.preco}</p>
            <button onClick={() =>handleAddCurso(curso.id)}>Adicionar</button>
       </li>))}
      </ul>
      <h1>Carrinho de Compras</h1>
      <ul>
        {shoppingCursos.map((item) => (
            <li key={item.produto.id}>
            <p>Produto:{item.produto.titulo}</p>
            <p>Preço:{item.produto.preco}</p>
            <p>Quantidade{item.quantidade}</p>
            <p>Total: {item.quantidade * item.produto.preco}</p>
            <button onClick={()=> handleRemoveCurso(item.produto.id)}>Remover</button>
        </li>))}
      </ul>
    </div>
  )
}

export default MarketCarPages


