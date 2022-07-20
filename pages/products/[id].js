import {useRouter} from "next/router";
import styles from '../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";

export default function User({product}) {
    const {query} = useRouter()
    return (
        <MainContainer keywords={product.name}>
            <div className={styles.user}>
                <h1>Продукт id {query.id}</h1>
                <div>Название продукта - {product.data.attributes.name}</div>
                <div>Описание - {product.data.attributes.description}</div>
                <div>Цена - {product.data.attributes.price}</div>


            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`http://localhost:1337/api/products/${params.id}`)
    const product = await response.json()
    return {
        props: {product}, // will be passed to the page component as props
    }
}
