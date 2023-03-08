import { useEffect, useState } from "react";

import * as userService from './components/services/userService'
import { Header } from "./components/Header";
import './App.css'
import { Footer } from "./components/Footer";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list/UserList";


function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll()
            .then(users => setUsers(users))

    }, [])
    console.log(users);
    return (

        <div className="App">

            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />
                    <UserList users={users}> </UserList>
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default App;
