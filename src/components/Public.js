import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Kareena's Repair Shop!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Jaipur City, Kareena's Repair Shop provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Kareena Beniwal<br />
                    Software Development Engineer<br />
                    Vaishali Nagar, Jaipur<br />
                    <a href="tel:+15555555555">(+91)9511579657</a>
                </address>
                <br />
                <p>Owner: Kareena Beniwal</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public