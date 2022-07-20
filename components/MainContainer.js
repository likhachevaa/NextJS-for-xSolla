import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"test, nextjs" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text="Главная"/>
                <A href={'/users'} text="Пользователи"/>
                <A href={'/products'} text="Продукты"/>

            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                   
                `}
            </style>
        </>
    );
};

export default MainContainer;
