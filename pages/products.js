import {useState, useEffect} from 'react'
import Link from "next/link";
import MainContainer from "../components/MainContainer";
const Users = ({products}) => {

    return (
        <MainContainer keywords={"users next js"}>
            <h1>Cписок продуктов</h1>
            <ul>
                {products.data.map(products =>
                       <li key={products.id}>
                        <Link href={`/products/${products.id}`}>
                         <a>  {products.attributes.name}</a>
                        </Link>
                    </li>
                    // <li key={products.id}>
                    //     <Link href={`/products/${products.id}`}>
                    //         <a>{products.}</a>
                    //     </Link>
                    // </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`http://localhost:1337/api/products`)
    const products = await response.json()
    return {
        props: {products}, // will be passed to the page component as props
    }
}
