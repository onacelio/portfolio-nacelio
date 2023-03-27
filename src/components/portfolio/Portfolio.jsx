import "./Portfolio.css"
import Portfolios from "./Portfolios"

export default function Portfolio() {
    return (
        <section className="portfolio_section section grid" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">Mais recentes projetos</span>

            <Portfolios />
        </section>
    )
}