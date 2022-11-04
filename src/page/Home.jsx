import { UserLayout } from "../components/UserLayout";
import ItemListContainer from "../components/ItemListContainer";
import AppContainer from "../components/AppContainer";

export const Home = () => {
    return (
        <UserLayout>
        <ItemListContainer
        greeting = "Bienvenidos a Cinco Sentidos"
        />
        <AppContainer/>
      </UserLayout>

    );
};